module.exports = () => {
    const Sequelize = require("sequelize");

    const db = new Sequelize("timothyliles", "timothyliles", "", {
        host: "127.0.0.1",
        dialect: "postgres"
    });

    return {
        db,
        User: db.define("User", {
            id: {
                type: Sequelize.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            username: Sequelize.STRING,
            password: Sequelize.STRING,
            salt: Sequelize.STRING(3)
        }),
        init: function() {
            db.sync();
        }
    };
};