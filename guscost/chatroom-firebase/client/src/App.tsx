import React, { useState, useEffect } from 'react';
import './App.css';

const MESSAGES_URL = 'https://us-central1-chatroom-6a5a0.cloudfunctions.net/messages';

// Helper function to fetch all messages
// The setMessages argument is a function!
const fetchMessages = (setMessages: Function) => {
  return fetch(MESSAGES_URL).then(res => res.json()).then(data => {
    setMessages(data);
  });
};

// Helper function to create a new message
// We could automatically call setMessages here if we passed it in
// But then we'd also need to pass in all the existing messages!
const postMessage = (text: string) => {
  return fetch(MESSAGES_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  } as any);
};

const App: React.FC = () => {

  // State for the message input box
  const [newMessage, setNewMessage] = useState('');

  // State for the list of messages
  const [messages, setMessages] = useState([] as Array<any>);
  
  // Fetch the messages on first load (don't forget the empty array)
  // The function can't return anything, so we should use curly braces
  useEffect(() => { fetchMessages(setMessages); }, []);

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Add message..."
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
        />
        <button
          onClick={async () => {
            // Only save if there actually is a message
            if (newMessage !== '') {
              // Because we're awaiting, we don't want the UI to lag
              // So, clear out the text box before any API calls
              setNewMessage('');

              // Do the POST to /messages
              await postMessage(newMessage);

              // EITHER: Fetch the list of messages again
              await fetchMessages(setMessages);
              // // OR: Optimize by updating the list of messages with the new one
              // // The server could respond to the POST with the new message's id
              // // Because this is a lot harder to do correctly, don't bother
              // setMessages([...messages, { id: ???, text: newMessage }]);
            }
          }}
        >Add message</button>
      </div>
      <ul>
        {messages.map(
          // This "any" function parameter typing is redundant
          // It would be happy with just the Array<any> above
          (message: any) => <li>{message.text}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
