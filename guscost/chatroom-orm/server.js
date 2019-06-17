const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const moment = require('moment');
const fs = require('fs');

const Sequelize = require('sequelize');

const db = new Sequelize('postgres', 'postgres', 'cic', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

const User = db.define('user', {
  name: Sequelize.STRING,
  email: { type: Sequelize.STRING, unique: true, allowNull: false },
  state: Sequelize.STRING,
  birthday: Sequelize.DATEONLY
});

const Message = db.define('message', {
  text: { type: Sequelize.STRING, allowNull: false },
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
      key: 'id'
    }
  }
});


