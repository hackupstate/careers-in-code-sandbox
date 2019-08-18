import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [messages, setMessages] = useState([] as Array<any>);
  useEffect(() => {
    const gusMessagesUrl = 'https://us-central1-chatroom-6a5a0.cloudfunctions.net/messages';
    fetch(gusMessagesUrl).then(res => res.json()).then(data => {
      setMessages(data);
    });
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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
