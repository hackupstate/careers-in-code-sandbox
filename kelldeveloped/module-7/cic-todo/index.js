const express = require("express");
const app = express();

// const Sequelize = require('sequelize');
const models = require("./models")();
models.init();

const bodyparser = require("body-parser");

app.use(bodyparser.json);

//app.get("/", (req, res) => {
//res.send({ hello: "world" });
//});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "./index.html");
});

app.post("/newtask", async (req, res) => {
    await models.Todo.create({
        name: req.body.name,
        createdAt: new Date(),
        dueTime: req.body.dueTime,
        //userID: Sequelize.INTEGER.UNSIGNED
        userName: req.body.userName
    });
    res.send({ message: 'okay' });
})

app.listen(8082, '0.0.0.0', () => {
    console.log("Server is running!")
});