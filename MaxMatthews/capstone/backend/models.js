module.exports = () => {
	const Sequelize = require("sequelize");

	const db = new Sequelize("maxmatthews", "maxmatthews", "", {
		host: "127.0.0.1",
		dialect: "postgres"
	});

	return {
		db,
		User: db.define("User", { name: Sequelize.STRING }),
		init: function() {
			db.sync();
		}
	};
};
