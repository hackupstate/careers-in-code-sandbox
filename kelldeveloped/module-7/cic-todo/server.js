const express = require("express");
const app = express();

// const Sequelize = require('sequelize');
const models = require("./models")();
models.init();

const bodyparser = require("body-parser");

app.use(bodyparser.json);

app.get("/", (req, res) => {
    res.send({ hello: "world" });
});

app.listen(8081, '0.0.0.0', () => {
    console.log("Server is running!")
});