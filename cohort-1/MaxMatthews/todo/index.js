//import express from npm
const express = require("express");
const app = express(); //set up a server instance of express

//import our models from our file
//because the require paramater is a file path, it means use our own file
//instead of an npm package
const models = require("./models")();

//call the init function which in the models.js file, syncs our models with the DB
models.init();

//bodyparser so we can have access to the req.body object when we send JSON in a request
const bodyparser = require("body-parser");
app.use(bodyparser.json());

// //get request to the home page and send back some JSON
// app.get("/", (req, res) => {
//   res.send({ hello: "world" });
// });

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

//post endpoint for creating new task
app.post("/task", async (req, res) => {
	//use the sequelize model to create a todo
	await models.Todo.create({
		name: req.body.name, //req.body is our body from our fetch request
		createdAt: new Date(), //system generated timestamp
		dueTime: req.body.dueTime,
		userID: req.body.userID
	});

	//every endpoint needs to send something back to the server
	res.send({
		tasks: await models.Todo.findAll({
			order: [["completionTime", "DESC"]],
			include: [{ model: models.User }]
		})
	});
});

app.delete("/task", async (req, res) => {
	const todo = await models.Todo.findByPk(req.body.id);
	await todo.destroy();

	res.send({
		tasks: await models.Todo.findAll({
			order: [["completionTime", "DESC"]],
			include: [{ model: models.User }]
		})
	});
});

app.put("/task/editName", async (req, res) => {
	const todo = await models.Todo.findByPk(req.body.id);
	todo.name = req.body.name;
	await todo.save();

	res.send({
		tasks: await models.Todo.findAll({
			order: [["completionTime", "DESC"]],
			include: [{ model: models.User }]
		})
	});
});

app.put("/task", async (req, res) => {
	const todo = await models.Todo.findByPk(req.body.id);
	todo.completionTime = new Date();
	await todo.save();

	res.send({
		tasks: await models.Todo.findAll({
			order: [["completionTime", "DESC"]],
			include: [{ model: models.User }]
		})
	});
});

app.get("/task", async (req, res) => {
	//go to the DB using the model, get all the tasks...
	const tasks = await models.Todo.findAll({
		order: [["completionTime", "DESC"]],
		include: [{ model: models.User }]
	});

	/////then send them back using JSON
	res.send({ tasks }); //note, {tasks} is the equivalent of {tasks: tasks}
});

app.post("/user", async (req, res) => {
	try {
		const newUser = await models.User.create({
			name: req.body.name
		});

		res.send({ users: await models.User.findAll(), newUser });
	} catch (e) {
		res.send({ error: "Name already exists. Please create another one." });
	}
});

app.get("/user", async (req, res) => {
	res.send({ users: await models.User.findAll() });
});

//tell the server to listen on port 8080 on any IP address
app.listen(8080, "0.0.0.0", () => {
	//add a callback so we know there were no errors turning on
	console.log("Server is running");
});
