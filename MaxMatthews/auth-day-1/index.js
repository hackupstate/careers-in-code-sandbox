const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const cookieParser = require("cookie-parser");
app.use(cookieParser("superSecretRandomString!"));

const bcrypt = require("bcrypt");
const md5 = require("md5");
const cryptoRandomString = require("crypto-random-string");

//backend code
// const firebaseAdminImport = require("firebase-admin");
// const serviceAccount = require("../JSONFILEHERE.json");
// const firebaseAdmin = firebaseAdminImport.initializeApp({
// 	credential: firebaseAdminImport.credential.cert(serviceAccount),
// 	databaseURL: "https://URLHERE.firebaseio.com"
// });

// firebaseAdmin
// 	.auth()
// 	.verifyIdToken(req.headers.firebasetoken)
// 	.then(data => {
// 		console.log(data.userID);
// 	});

//frontend code
//import firebase from "firebase/app";
// let firebasetoken = firebase.auth().currentUser
// ? await firebase.auth().currentUser.getIdToken(false)
// : "";
//fetch(apiURL + url, {
// method,
// credentials: "include",
// mode: "cors",
// headers: {
//     "Content-Type": "application/json",
//     firebasetoken
// },
// body
// })

//new firebaseui.auth.AuthUI(firebase.auth());
// import firebase from "firebase/app";
// import firebaseui from "firebaseui";
//const uiConfig = {
//     signInSuccessUrl: "/postLogin",
//     privacyPolicyUrl: "/privacyPolicy",
//     signInOptions: [
//         // Leave the lines as is for the providers you want to offer your users.
//         firebase.auth.EmailAuthProvider.PROVIDER_ID,
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//         firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//         firebase.auth.GithubAuthProvider.PROVIDER_ID
//         // firebase.auth.PhoneAuthProvider.PROVIDER_ID
//     ],
//     // Terms of service url.
//     tosUrl: "/terms-of-service" //TODO
// };
//				authUI.start("#firebaseui-auth-container", uiConfig);

const models = require("./models")();
models.init();

const loginChecker = async (req, res, next) => {
	const user = await models.User.findOne({
		where: { username: req.body.username }
	});

	const result = await bcrypt.compare(req.body.password, user.password);

	if (result) {
		res.locals.userID = user.id;
		next();
	} else {
		res.status(401).send({ error: "unauthorized" });
	}
};

const loginCheckerCookie = async (req, res, next) => {
	if (req.cookies.userID) {
		res.locals.userID = req.cookies.userID;
		next();
	} else {
		res.status(401).send({ error: "unauthorized" });
	}
};

app.post("/login", loginChecker, async (req, res) => {
	res.send({ message: "login checked", userID: res.locals.userID });
});

app.post("/login2", async (req, res) => {
	if (req.cookies.userID) {
		res.send({ message: "cookie already set", userID: user.id });
	} else {
		const user = await models.User.findOne({
			where: { username: req.body.username }
		});

		if (user) {
			const result = await bcrypt.compare(req.body.password, user.password);

			if (result) {
				res
					.cookie("userID", user.id)
					.send({ message: "cookie set", userID: user.id });
			} else {
				res.status(401).send({ error: "unauthorized" });
			}
		} else {
			res.status(401).send({ error: "unauthorized" });
		}
	}
});

app.get("/logout", async (req, res) => {
	res.clearCookie("userID");
	res.send({ message: "cookie deleted" });
});

app.get("/onlySignedIn", loginCheckerCookie, async (req, res) => {
	res.send({ message: "ok", userID: res.locals.userID });
});

app.put("/user", async (req, res) => {
	const hashAsMD5 = md5(req.body.password);
	const salt = cryptoRandomString({ length: 3 });

	const hash = await bcrypt.hash(req.body.password, 10);

	await models.User.create({
		username: req.body.username,
		password: hash,
		salt
	});

	res.send({ message: "user created" });
});

app.listen(5000, () => {
	console.log("Server running on 5000");
});
