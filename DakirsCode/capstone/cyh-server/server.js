const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const moment = require("moment");
const fs = require("fs");

const Sequelize = require("sequelize");

const db = new Sequelize(
	process.env.DATABASE_NAME,
	process.env.DATABASE_USER,
	process.env.DATABASE_PASSWORD,
	{
		host: process.env.DATABASE_HOST,
		port: process.env.DATABASE_PORT || 5432,
		dialect: "postgres",
		pool: {
			max: 5,
			min: 0,
			idle: 10000
		}
	}
);

const User = db.define("user", {
	email: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false,
		validate: {isEmail: true}
	},
	name: Sequelize.STRING,
	state: {
		type: Sequelize.STRING,
		validate: {is: /^[A-Z]{2}$/i}
	},
	birthday: {
		type: Sequelize.DATEONLY,
		validate: {
			isOldEnough: function(value) {
				if (moment(value).add(18, "years") > moment()) {
					throw new Error("Please be older before using the app");
				}
			},
			isNotTooOld: function(value) {
				if (moment(value).add(118, "years") < moment()) {
					throw new Error("Please be younger?");
				}
			}
		}
	}
});

User.prototype.sendMessage = function(text) {
	return Message.create({user_id: this.id, text: text});
};

const Message = db.define("message", {
	text: {type: Sequelize.STRING, allowNull: false},
	timestamp: {
		type: Sequelize.DATE,
		allowNull: false,
		defaultValue: Sequelize.NOW // NOW()
	},
	user_id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: {
			model: User,
			key: "id"
		}
	}
});

// If "force" is "true", this will tear down &
// recreate all tables (including the data!)
db.sync({force: true});

// Create a new Express app
const app = express();
app.use(cors()); // add CORS middleware so we can connect to a remote server from our client webpage
app.use(bodyparser.json()); // add bodyparser middleware so we can get access to req.body

// GET a list of users
app.get("/users", async function(req, res) {
	const users = await User.findAll();
	res.send(users);
});

// POST a new user
app.post("/users", async (req, res) => {
	try {
		const user = await User.create(req.body);
		res.send({status: "ok", user: user});
	} catch (error) {
		res.send({status: "error", error: error});
	}
});

// GET a list of messages
app.get("/messages", async (req, res) => {
	const messages = await Message.findAll();
	res.send(messages);
});

// POST a new message
app.post("/messages", async (req, res) => {
	try {
		const user = await User.findByPk(req.body.user_id);
		const message = await user.sendMessage(req.body.text);
		res.send({status: "ok", message: message});
	} catch (error) {
		res.send({status: "error", error: error});
	}
});

// tell our express app to listen on port 8081 on requests from any IP address (0.0.0.0)
app.listen(8081, "0.0.0.0", () => {
	// use a callback to make sure our server started up correctly, this won't print if we run into
	// issues with the port already being used
	console.log("Server is running");
});
