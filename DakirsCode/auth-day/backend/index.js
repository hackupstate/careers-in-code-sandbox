const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const models = require("./models")()
models.init();

app.get("/", (req, res) => {
    res.send("yeah boy its ya server cominga at ya");
})

app.put("/test", (req, res) => {
    console.log(req.body)
    res.send({
        dakir: "thompson"
    });
})

app.listen(5000, () => {
    console.log("server is up and cracking cuh");
})