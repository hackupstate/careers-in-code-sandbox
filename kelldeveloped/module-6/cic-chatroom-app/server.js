/*
We have to install our dependencies in npm in our terminal
Some example commands are:
sudo npm install -g nodemon     || We need sudo to install global packages as they're installed everywhere on our computer, not just for this project.
npm init                        || Create a new package.json file so we can save our dependencies (follow the prompts)
npm install --save express      || Install the "express" package and save it to package.json
npm install                     || Install all packages listed as "dependencies" in the package.json
*/

const express = require("express"); // express, the package for building our server
const cors = require("cors"); // CORS headers middleware for express
const bodyparser = require("body-parser"); // body-parser middleware for express

// import some other NPM packages
const moment = require("moment");
const fs = require("fs");

// Import "Sequelize" which is a package for using the database!
const SQL = require("sequelize");


// Set up sequelize to connect to our postgres database
const sequelize = new SQL("postgres", "postgres", "cic", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Create a new Express app
const app = express(); 
app.use(cors()); // add CORS middleware so we can connect to a remote server from our client webpage
app.use(bodyparser.json()); // add bodyparser middleware so we can get access to req.body

// tell express to send the index.html file when you load the homepage root route ("/")
app.get("/", (req, res) => {
  // __dirname is important to use here as it helps node figure out that the path is relative to the currently
  // running server.js file
  res.sendFile(__dirname + "/views/index.html");
});

// PUT endpoint to send a message
app.put("/send", (req, res) => {
  const newId = Math.floor(Math.random() * 999999999) + 1;
  sequelize.query(
    "INSERT INTO messages VALUES (:id, :text, NOW(), :user_id);",
    {
      replacements: {
        id: newId,
        text: req.body.message,
        user_id: req.body.user_id
      }
    }
  ).then(function([results, metadata]) {
    console.log(results, metadata);

    // always send something back to the client as it will always be waiting to hear back from the server
    res.send({ status: "ok" });
  }).catch(function (error) {
    console.log(error);
    res.send({ status: "error" });
  });
});

// GET endpoint to get all of our messages
app.get("/receive", (req, res) => {
  // send the messages from SQL back as JSON (express handles this for us) in a key called messages
  sequelize.query("SELECT * FROM messages;").then(function([results, metadata]) {
    res.send({messages: results});
  });
});

// tell our express app to listen on port 8081 on requests from any IP address (0.0.0.0)
app.listen(8081, "0.0.0.0", () => {
  // use a callback to make sure our server started up correctly, this won't print if we run into
  // issues with the port already being used
  console.log("Server is running");
});
