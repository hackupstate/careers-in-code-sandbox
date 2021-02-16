const express = require("express");
const app = express();

const models = require("./models")();
models.init();

const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
app.use(cookieParser("topsecretpassword"));

// app.get("/", (req, res) => {
    // res.send({ message: "hello world"});
// });

app.post("/createAccount", async (req, res) => {
    if (!req.body.usernamee || !req.body.password) {
        res.status(401).send({ hackers: "you get nada" });
    } else {
        const generatedPassword = await
        bcrypt.hash(req.body.password, 10);

        models.User.create({
            username: req.body.username,
            password: generatedPassword
        });

        res.send({ message: "user created" });
    }
});

app.post("/logout", (req, res) => {
    res.clearCookie("userID");
    res.send({ message: "user is logged out" });
});

const loginChecker = async (req, res, next) => {
    if (req.cookies.userID) {
        next();
    } else {
        res.status(401).send({ message: "no cookies for you" });
    }
};

app.post("/add", loginChecker, (req, res) => {
    res.send({ result: req.body.num1 + 
    req.body.num2 });
});

app.listen(5000, () => {
    console.log("server is running on 5000");
});