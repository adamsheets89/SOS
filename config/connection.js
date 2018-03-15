var mysql = require("mysql");
var app = require("../server");

var connection = mysql.createConnection({
    host: "localhost",
    port: 4040,
    user: "root",
    password: "",
    database: "SOS_db"
});

connection.connect(function (err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as ID: " + connection.threadId);
});

module.exports = connection;