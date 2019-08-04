const express = require("express"); //import express from npm
const app = express(); 

const cors = require('cors');

const bodyparser = require("body-parser");
app.use(bodyparser());
const moment = require("moment")();

const models = require("./ model")();
models.init();

// app.get("/",(req,res)=>{
//     res.send({hello:"world"});
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/task", async (req, res) => {
  await models.Todo.create({
    name: req.body.name,
    createdAt: new Date(),
    dueTime: req.body.dueTime,
    userName: req.body.userName
  });

  res.send({ message: "ok" });
});

app.get("/task", async (req, res) => {
  const tasks = await models.Todo.findAll();

  res.send({ tasks });
});

//tell the server to listen on port 8080 on any IP address
app.listen(8082, "0.0.0.0", () => {
  //add a callback so we know there were no errors turning on
  console.log("Server is running");
});