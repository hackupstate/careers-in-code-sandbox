const express = require ("express");
const app = express();

const models = require("./models")();
models.init();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

//const md5 = require("md5");
const bcrypt = require("bcrypt");
//const cryptoRandomString = require("crypto-random-string");

const cookieParser = require("cookie-parser");
app.use(cookieParser("bestpasswordever"));

app.get("/", (req, res) => {
    res.send({ message: "hello. this is my world "});
});

app.post("/test", (req, res) => {
    console.log(req.body.hello);
    res.send({ world: "this is mine" });
});

app.post("/createAccount", async (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.status(401).send({ hackers: "sucks to be you" }); 
    } else {
        const generatedPassword = await bcrypt.hash(req.body.password, 10);
        models.User.create({
            username: req.body.username,
            password: generatedPassword
        });
        res.send({ message: "User Created" });
    }
});

app.post("/login", async (req, res) => {
    if (req.cookies.userID) {
        console.log("successful sign in with cookie");
        res.send({ message: "User is already signed with cookie" });
    } else {
        const userDB = await models.User.findOne({ 
            where: { username: req.body.username }
        });
        if (!userDB) {
            res.send({ error: "Can't sign in" });
        } else {
            const match = await bcrypt.compare(req.body.password, userDB.password);
            if (match) {
                console.log("successful sign in with a hash");
                console.log(userDB.id);
                res.cookie("userID", userDB.id);
                res.send({ message: "user is definitely signed in"});
            } else {
                res.send({ error: "Can't sign in" });
            }
        }

    }
});

app.post("/logout", (req, res) => {
    res.clearCookie("userID");
    res.send({ message: "user is logged out" });
});

app.listen(3000, () => {
    console.log ("Server is running on 3000");
});