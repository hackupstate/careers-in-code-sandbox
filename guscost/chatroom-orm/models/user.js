'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: { isEmail: true }
    },
    name: Sequelize.STRING,
    state: {
      type: Sequelize.STRING,
      validate: { is: /^[A-Z]{2}$/i }
    },
    birthday: {
      type: Sequelize.DATEONLY,
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
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};