const express = require("express"); // express, the package for building our server
const cors = require("cors"); // CORS headers middleware for express
const bodyparser = require("body-parser"); // body-parser middleware for express

// import some other NPM packages
const moment = require("moment");
const fs = require("fs");

// Import "Sequelize" which is a package for using the database!
const Sequelize = require("sequelize");

// Set up sequelize to connect to our postgres database
const db = new Sequelize("postgres", "postgres", "cic", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

const User = db.define('user', {
    name: Sequelize.STRING,
    email: { 
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        state: Sequelize.STRING,
        birthday: Sequelize.DATEONLY
    }
});

const message = db.define('message', {
    text: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    timestamp: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW, //Now()
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

//force: true wipes tables everytime and recereates (including data) everytime you restart the server
db.sync({ force: false });

const app = express();
app.use(cors()); 
app.use(bodyparser.json());

app.get('/users', (req, res) => {
    message.findAll().then(users =>res.send(users));
});

app.post('/users', (req, res) => {
    User.create({
        text: req.body.text
    }).then(User => {
        res.send({
            status: 'ok', user: user
        }).catch(error => {
            res.send({
                status: 'error', error: error
            });
        });
    });
});

app.get('/messages', (req, res) => {
    message.findAll().then(messages =>res.send(messages));
});

app.post('/messages', (req, res) => {
    message.create({
        text: req.body.text,
        user_id: req.body.user_id
    }).then(message => {
        res.send({
            status: 'ok', message: message
        }).catch(error => {
            res.send({
                status: 'error', error: error
            });
        });
    });
});

app.listen(8081, "0.0.0.0", () => {
    console.log("Server is running");
});