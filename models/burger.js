// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
	all: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		});
	},
	create: function(cols, vals, cb) {
		orm.create("burgers", cols, vals, function(cb) {
			cb(res);
		});
	},
	update: function(objColVals, condition, cb) {
		orm.delete("burgers", cols, vals, function(cb) {
			cb(res);
		});
	}
};

module.exports = burger;