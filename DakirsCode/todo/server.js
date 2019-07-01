const express = require("express"); //import express from npm
const app = express(); 

const cors = require('cors');

const bodyparser = require("body-parser");
app.use(bodyparser());
const moment = require("moment")();

const models = require("./ model")();
models.init();

// const sequelize = require('sequelize');
// const SQL = new sequelize("postgres","postgres","cic",
// {
//   host:"localhost",
//   dialect:"postgres",
//   pool:
//   {
//     max:5,
//     min:0,
//     idle:10000
//   }
// });

app.get("/",(req,res)=>{
    res.send({hello:"world"});
});

app.listen(8082,"0.0.0.0",() =>{
    console.log("Dakirs server is running");
});