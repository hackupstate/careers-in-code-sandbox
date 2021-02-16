const dbConfig = require("./config/config.json");

module.exports = () => {
  const Sequelize = require("sequelize");
  const db = new Sequelize(
    dbConfig.development.database,
    dbConfig.development.username,
    dbConfig.development.password,
    {
      host: dbConfig.development.host,
      dialect: dbConfig.development.dialect,
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    }
  );

  return {
    db,
    User: db.define("User", {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
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
      },
      favoriteColor: {
        type: Sequelize.STRING,
        validate: { is: /^[a-z]+$/ }
      }
    }),
    init: () => {
      db.sync({ force: true });
    }
  };
};
