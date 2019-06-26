//put all the code in a module.exports so we can access it in another file using require
module.exports = () => {
  //import sequelize like any other npm package
  const Sequelize = require("sequelize");
  //open the connection to the DB using a new sequelize instance
  //the parameters are: database, username, password, host, and dialect (postgres, mysql, mssql, etc)
  const db = new Sequelize("postgres", "postgres", "cic", {
    host: "127.0.0.1",
    dialect: "postgres"
  });

  //anything returned in out module.exports will be accessible in other files
  return {
    db, //we don't use this yet, but we may need access to the raw DB connection down the road
    /*
      Define (using the Sequelize DB connection) a User model. User is both the model 
      object name (before the colon) AND the table name in the database 
      (the first param of the define method). We then pass it the fields (columns) that our model
      (and table in Postgres) will have with their types.
    */
    User: db.define("User", {
      id: {
        //we use ID on almost every model/table. It makes it easier to create keys down the road
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true, //we use autoIncrement to tell postgre that it can create our IDs for us
        primaryKey: true
      },
      name: Sequelize.STRING //we don't pass an object here when defining name because we only need the type
    }),
    Todo: db.define("Todo", {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      name: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      completionTime: Sequelize.DATE,
      dueTime: Sequelize.DATE,
      userName: Sequelize.STRING
      // userID: Sequelize.INTEGER.UNSIGNED //unsigned means it will be a non negative (positive) number
    }),
    init: () => {
      //this code won't run until we call init in another file.
      db
        .sync
        // { force: true }
        (); //sync to copy our model structure to the database
    }
  };
};
