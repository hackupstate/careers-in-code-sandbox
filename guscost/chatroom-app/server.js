/*
We have to install our dependencies in npm in our terminal
Some example commands are:
sudo npm install -g nodemon    || We need sudo to install global packages as they're installed everywhere on our computer, not just this project.
npm init      || creates our package.json file so we can save our dependencies
npm install --save express body-parser moment      || Install three packages and save them to package.json
*/

const express = require("express"); //import express from npm

// Create an app of express (note, this is a requirement of node. Only a few other packages require you 
// initialize it before you use it. Read the docs of that package for more info)
const app = express(); 

// import body-parser & moment from npm as well
const bodyparser = require("body-parser");
const moment = require("moment");
const fs = require("fs");

// tell express to use bodyparser as middleware so we can get access to req.body
app.use(bodyparser.json());

// make a variable for us to store our messages in
let messages = [];

// tell express to send the index.html file when you load the homepage root route ("/")
app.get("/", (req, res) => {
  // __dirname is important to use here as it helps node figure out that the path is relative to the currently
  // running server.js file
  res.sendFile(__dirname + "/views/index.html");
});

// PUT endpoint to send a message
app.put("/send", (req, res) => {
  // grab the data from our incoming req(uest) and store it in our messages array as an object
  messages.push({
    name: req.body.name,
    message: req.body.message,
    timestamp: new Date() //built in JS to create a new date timestamp
  });

  // add in a console.log here to make sure the server is receiving & generating the right data
  console.log(messages);

  // always send something back to the client as it will always be waiting to hear back from the server
  res.send({ status: "ok" });
});

// GET endpoint to get all of our messages
app.get("/receive", (req, res) => {
  // send the messages array back as JSON (express handles this for us) in a key called messages
  res.send({ messages: messages });
});

app.get("/save", (req, res)=>{
  let toSave = "";
  for (const message of messages){
    toSave += `${message.name} (${moment(message.timestamp).format("LT")}): ${message.message}\n`;
  }
  fs.writeFileSync(__dirname + "/message.txt", toSave);

  res.send({message: "ok"});
});

// tell our express app to listen on port 8081 on requests from any IP address (0.0.0.0)
app.listen(8081, "0.0.0.0", () => {
  // use a callback to make sure our server started up correctly, this won't print if we run into
  // issues with the port already being used
  console.log("Server is running");
});
