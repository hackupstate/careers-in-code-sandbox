//import express from npm
const express = require("express");
const app = express(); //set up a server instance of express

//import our models from our file
//because the require paramater is a file path, it means use our own file
//instead of an npm package
const models = require("./models")();

//call the init function which in the models.js file, syncs our models with the DB
models.init();

//bodyparser so we can have access to the req.body object when we send JSON in a request
const bodyparser = require("body-parser");
app.use(bodyparser.json());

//get request to the home page and send back some JSON
app.get("/", (req, res) => {
  res.send({ hello: "world" });
});

//tell the server to listen on port 8080 on any IP address
app.listen(8080, "0.0.0.0", () => {
  //add a callback so we know there were no errors turning on
  console.log("Server is running");
});
