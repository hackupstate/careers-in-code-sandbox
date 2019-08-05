const express = require("express");
const app = express();

const models = require("./models")();
models.init();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send({ message: "hello world"});
});

app.post("/test", (req, res) => {
    console.log(req.body.hello);

    res.send({ hello: "world"});
})

app.listen(5000, () => {
    console.log("server is running on 5000");
});