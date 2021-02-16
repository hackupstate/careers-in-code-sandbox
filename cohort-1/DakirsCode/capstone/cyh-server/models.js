/*models-3tables
products- includes merch and artwork with foreign key to other products in the table.
id,name,size,type,category,price,url ,quantity avaliable

line items - 

orders- every checkout transaction creates an order

request could send to mailchimp*/

module.exports = () => {
	const Sequelize = require("sequelize");

	const db = new Sequelize("canvasyourhome", "dakirthompson", "", {
		host: "127.0.0.1",
		dialect: "postgres",
		logging: false
	});

	return {
		db,
		Product: db.define("Product", {
			id: {
				type: Sequelize.INTEGER.UNSIGNED,
				autoIncrement: true,
				primaryKey: true
			},

			size: Sequelize.STRING,
			type: Sequelize.STRING,
			category: Sequelize.STRING,
			url: Sequelize.TEXT,
			price: Sequelize.DECIMAL,
			avaliable: Sequelize.BOOLEAN,
			productname: Sequelize.STRING
		}),
		Customer: db.define("Customer", {
			customername: Sequelize.STRING,
			email: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: false,
				validate: {isEmail: true}
			},
			customeraddress: Sequelize.STRING
			//WOULD LIKE TO ADD REQUEST IMAGE HERE
			//WOULD LIKE TO ADD ADDRESS HERE AS WELL
		}),
		init: function() {
			// If "force" is "true", this will tear down &
			// recreate all tables (including the data!)
			db.sync({force: false});
			this.Product.create({
				type: "canvas",
				category: "popular movie",
				productname: "lepercon",
				avaliable: false,
				url:
					"https://s3.us-east-2.amazonaws.com/canvasyourhome.art/images/lepercon.jpg"
			});
		}
	};
};

// const User = db.define("user", {
//     email: {
//         type: Sequelize.STRING,
//         unique: true,
//         allowNull: false,
//         validate: { isEmail: true }
//     },
//     name: Sequelize.STRING,
//     state: {
//         type: Sequelize.STRING,
//         validate: { is: /^[A-Z]{2}$/i }
//     },
//     birthday: {
//         type: Sequelize.DATEONLY,
//         validate: {
//             isOldEnough: function (value) {
//                 if (moment(value).add(18, "years") > moment()) {
//                     throw new Error("Please be older before using the app");
//                 }
//             },
//             isNotTooOld: function (value) {
//                 if (moment(value).add(118, "years") < moment()) {
//                     throw new Error("Please be younger?");
//                 }
//             }
//         }

// User.prototype.sendMessage = function (text) {
//             return Message.create({ user_id: this.id, text: text });
//         };

//         const Message = db.define("message", {
//             text: { type: Sequelize.STRING, allowNull: false },
//             timestamp: {
//                 type: Sequelize.DATE,
//                 allowNull: false,
//                 defaultValue: Sequelize.NOW // NOW()
//             },
//             user_id: {
//                 type: Sequelize.INTEGER,
//                 allowNull: false,
//                 references: {
//                     model: User,
//                     key: "id"
//                 }
//             }
//         });

//         // If "force" is "true", this will tear down &
//         // recreate all tables (including the data!)
//         db.sync({ force: true });
