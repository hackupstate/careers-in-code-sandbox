const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const moment = require('moment');
const fs = require('fs');

const Sequelize = require('sequelize');

const db = new Sequelize('postgres', 'postgres', 'cic', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

const User = db.define('user', {
  name: Sequelize.STRING,
  email: { type: Sequelize.STRING, unique: true, allowNull: false },
  state: Sequelize.STRING,
  birthday: Sequelize.DATEONLY
});

const Message = db.define('message', {
  text: { type: Sequelize.STRING, allowNull: false },
  timestamp: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW // NOW()
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  }
});

// If "force" is "true", this will tear down & 
// recreate all tables (including the data!)
db.sync({ force: false });

// Create a new Express app
const app = express(); 
app.use(cors()); // add CORS middleware so we can connect to a remote server from our client webpage
app.use(bodyparser.json()); // add bodyparser middleware so we can get access to req.body

// GET a list of users
app.get('/users', (req, res) => {
  User.findAll().then(users => res.send(users));
});

// POST a new user
app.post('/users', (req, res) => {
  User.create({
    email: req.body.email
  }).then(user => {
    res.send({ status: 'ok', user: user });
  }).catch(error => {
    res.send({ status: 'error', error: error });
  });
});

// GET a list of messages
app.get('/messages', (req, res) => {
  Message.findAll().then(messages => res.send(messages));
});


// tell our express app to listen on port 8081 on requests from any IP address (0.0.0.0)
app.listen(8081, "0.0.0.0", () => {
  // use a callback to make sure our server started up correctly, this won't print if we run into
  // issues with the port already being used
  console.log("Server is running");
});
