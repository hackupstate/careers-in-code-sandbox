'use strict';

const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { isEmail: true }
    },
    name: DataTypes.STRING,
    state: {
      type: DataTypes.STRING,
      validate: { is: /^[A-Z]{2}$/i }
    },
    birthday: {
      type: DataTypes.DATEONLY,
      validate: {
        isOldEnough: function(value) {
          if (moment(value).add(18, 'years') > moment()) {
            throw new Error('Please be older before using the app');
          }
        },
        isNotTooOld: function(value) {
          if (moment(value).add(118, 'years') < moment()) {
            throw new Error('Please be younger?');
          }
        }
      }
    },
    favoriteColor: {
      type: DataTypes.STRING,
      validate: { is: /^[a-z]+$/ }
    }
  }, {});
  return User;
};