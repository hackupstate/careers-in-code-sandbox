const express = require("express");
const app = express();

const models = require("./models")();
models.init();

const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// const md5 = require("md5");
// const cryptoRandomString = require("crypto-random-string");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
app.use(cookieParser("topsecretpasswordthatmaxlikes"));

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
	if (req.cookies.userID) {
		console.log("sign in successful with cookie");
		res.send({ message: "user is already signed in with cookie" });
	} else {
		const userDB = await models.User.findOne({
			where: { username: req.body.username }
		});

		if (!userDB) {
			res.send({ error: "Can't sign in" });
		} else {
			const match = await bcrypt.compare(req.body.password, userDB.password);

			if (match) {
				console.log("sign in successful but used a hash");
				console.log(userDB.id);
				res
					.cookie("userID", userDB.id)
					.send({ message: "user is signed in for sure" });
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

const loginChecker = async (req, res, next) => {
	// const userDB = await models.User.findOne({
	// 	where: { username: req.body.username }
	// });

	// if (!userDB) {
	// 	res.status(401).send({ error: "Can't sign in" });
	// } else {
	// 	const match = await bcrypt.compare(req.body.password, userDB.password);

	// 	if (match) {
	// 		next();
	// 	} else {
	// 		res.status(401).send({ error: "Can't sign in" });
	// 	}
	// }

	if (req.cookies.userID) {
		next();
	} else {
		res.status(401).send({ message: "no cookies for you" });
	}
};

app.post("/add", loginChecker, (req, res) => {
	res.send({ result: req.body.num1 + req.body.num2 });
});

app.listen(5000, () => {
	console.log("Server is running on 5000");
});
