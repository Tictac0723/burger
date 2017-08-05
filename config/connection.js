//Set up MYSQL connection
var mysql = require("mysql");
var connection; 

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
	connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bubbles.7",
    database: "burgers_db"
});
};


//Make the connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

//export the connection for ORM
module.exports = connection;