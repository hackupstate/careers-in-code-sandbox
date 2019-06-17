const express = require('express');
const cors = requre('cors');
const bodyparser = require('body-parser');

const moment = require('moment');
const fs= require('fs');

const Sequelize = require('sequelize');

const db = new Sequalize('posgres','postgres','cic',{host: 'localhost',dialect:'postgres',
pool:
{
max:5,
min:0,
idle:10000
}
})

const Messages = db.define('messages',{
    text:{type: Sequelize.STRING,allowNull:false},
    type:Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW//NOW()
},
user)