const express = require("express");
const app = express();

const models = require("./models")();
models.init();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const md5 = require("md5");
const cryptoRandomString = require("crypto-random-string");
const bcrypt = require("bcrypt");

app.get("/", (req, res) => {
	res.send({ message: "hello world" });
});

// app.post("/test", (req, res) => {
// 	console.log(req.body.hello);

// 	res.send({ world: "hello" });
// });

app.post("/createAccount", async (req, res) => {
	if (!req.body.username || !req.body.password) {
		res.status(401).send({ hackers: "you get nothing" });
	} else {
		const generatedPassword = await bcrypt.hash(req.body.password, 10);

		models.User.create({
			username: req.body.username,
			password: generatedPassword
		});

		res.send({ message: "user created" });
	}
});

app.post("/login", async (req, res) => {
	const userDB = await models.User.findOne({
		where: { username: req.body.username }
	});

	if (!userDB) {
		res.send({ error: "Can't sign in" });
	} else {
		const match = await bcrypt.compare(req.body.password, userDB.password);

		if (match) {
			res.send({ message: "user is signed in" });
		} else {
			res.send({ error: "Can't sign in" });
		}
	}
});

// app.post("/createAccount", (req, res) => {
// 	if (!req.body.username || !req.body.password) {
// 		res.status(401).send({ hackers: "you get nothing" });
// 	} else {
// 		const salt = cryptoRandomString({ length: 3 });
// 		const generatedPassword = md5(req.body.password + salt);

// 		models.User.create({
// 			username: req.body.username,
// 			password: generatedPassword,
// 			salt: salt
// 		});

// 		res.send({ message: "user created" });
// 	}
// });

// app.post("/login", async (req, res) => {
// 	const userDB = await models.User.findOne({
// 		where: { username: req.body.username }
// 	});

// 	if (!userDB) {
// 		console.log(1);
// 		res.send({ error: "Can't sign in" });
// 	} else {
// 		if (userDB.password === md5(req.body.password + userDB.salt)) {
// 			console.log(2);
// 			res.send({ message: "user is signed in" });
// 		} else {
// 			res.send({ error: "Can't sign in" });
// 		}
// 	}
// });

app.listen(5000, () => {
	console.log("Server is running on 5000");
});
