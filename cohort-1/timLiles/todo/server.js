const express = require("express");
const app = express();

//const Sequelize = require("sequelize");
const models = require("./models")();
models.init();


const bodyparser = require("body-parser");

app.use(bodyparser.json());

//    app.get("/", (req, res) => {
//        res.send({ Hello: "world" })
//    });

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/newTask", (req, res) => {
    models.Todo
    res.send();
});

app.listen(8080, "0.0.0.0", () => {
    console.log("server is running");
});