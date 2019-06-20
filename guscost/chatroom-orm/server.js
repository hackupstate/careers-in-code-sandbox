const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const moment = require('moment');
const fs = require('fs');

const dbConfig = require('./config/config.json');

const Sequelize = require('sequelize');
const db = new Sequelize(
  dbConfig.development.database,
  dbConfig.development.username,
  dbConfig.development.password,
  {
    host: dbConfig.development.host,
    dialect: dbConfig.development.dialect,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
);

const User = require('./models/user')(db, Sequelize.DataTypes);
const Message = require('./models/message')(db, Sequelize.DataTypes);

User.prototype.sendMessage = function(text) {
  return Message.create({ userId: this.id, text: text });
}

// NOTE: we are using migrations now! No need for this!
// // If "force" is "true", this will tear down & 
// // recreate all tables (including the data!)
// db.sync({ force: false });

// Create a new Express app
const app = express(); 
app.use(cors()); // add CORS middleware so we can connect to a remote server from our client webpage
app.use(bodyparser.json()); // add bodyparser middleware so we can get access to req.body


// GET a list of users
app.get('/users', async function(req, res) {
  try {
    const users = await User.findAll();
    res.send({ status: 'ok', users: users });
  } catch (error) {
    res.send({ status: 'error', error: error });
  }
});

// POST a new user
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send({ status: 'ok', user: user });
  } catch (error) {
    res.send({ status: 'error', error: error });
  }
});

// GET a list of messages
app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.findAll();
    res.send({ status: 'ok', messages: messages });
  } catch (error) {
    res.send({ status: 'error', error: error });
  }
});

// POST a new message
app.post('/messages', async (req, res) => {
  try {
    const message = await Message.create({
      userId: req.body.userId,
      text: req.body.text
    });
    // const user = await User.findByPk(req.body.userId);
    // const message = await user.sendMessage(req.body.text);
    res.send({ status: 'ok', message: message });
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
