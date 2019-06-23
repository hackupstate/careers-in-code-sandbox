const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const User = require('./models/user');
const Message = require('./models/message');

// Create a new Express app
const app = express(); 
app.use(cors()); // add CORS middleware so we can connect to a remote server from our client webpage
app.use(bodyparser.json()); // add bodyparser middleware so we can get access to req.body


// Serialize a user to make it nice and friendly looking in the API
function serializeUser(user) {
  return {
    id: user._id,
    email: user.email,
    name: user.name,
    birthday: user.birthday,
    state: user.state
  };
}

// Serialize a message
function serializeMessage(message) {
  return {
    id: message._id,
    userId: message.user._id,
    text: message.text
  };
}


// GET a list of users
app.get('/users', async function(req, res) {
  try {
    const users = await User.find();
    res.send({
      status: 'ok',
      users: users.map(serializeUser)
    });
  } catch (error) {
    res.send({ status: 'error', error: error });
  }
});

// POST a new user
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send({ status: 'ok', user: serializeUser(user) });
  } catch (error) {
    res.send({ status: 'error', error: error });
  }
});

// GET a list of messages
app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find();
    res.send({ status: 'ok', messages: messages.map(serializeMessage) });
  } catch (error) {
    res.send({ status: 'error', error: error });
  }
});

// POST a new message
app.post('/messages', async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    const message = await user.sendMessage(req.body.text);
    res.send({ status: 'ok', message: serializeMessage(message) });
  } catch (error) {
    res.send({ status: 'error', error: error });
  }
});


// tell our express app to listen on port 8081 on requests from any IP address (0.0.0.0)
app.listen(8081, "0.0.0.0", () => {
  // use a callback to make sure our server started up correctly, this won't print if we run into
  // issues with the port already being used
  console.log("Server is running");
});
