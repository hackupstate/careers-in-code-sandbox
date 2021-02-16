module.exports = ( ) => {
const Sequelize = require("sequelize");
const db = new Sequelize("postgres","postgres","cic",
{
  host:"127.0.0.1",
  dialect:"postgres",
  port:5432,
  pool:
  {
    max:5,
    min:0,
    idle:10000
  }
});

return {
    db,
    User: db.define("User", {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: Sequelize.STRING
    }),
    Todo: db.define("Todo",{
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: Sequelize.STRING,
        createdAt: Sequelize.DATE,
        completationTime: Sequelize.DATE,
        dueTime: Sequelize.DATE,
        userId: Sequelize.INTEGER.UNSIGNED
    }),//end of object
    init: () => {
    db.sync();
       }
    }//end of return
}//end of export