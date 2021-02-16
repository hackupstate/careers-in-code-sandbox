module.exports = () => {
    const Sequelize = require('sequelize');
    const db = new Sequelize('postgres', 'postgres', 'cic', {
        host: "127.0.0.1",
        dialect: "postgres"
    });

    return {
        db,
        User: db.define("User", {
            id: {
                type: Sequelize.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
            },
            name: Sequelize.STRING,
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
            //userID: Sequelize.INTEGER.UNSIGNED
            userName: Sequelize.STRING

        }),
        init: () => {
            db.sync
                //({ force: true })
                ;
        }
    };
};