var mysql = require("mysql");
var app = require("../server");

if (app.settings.env == 'development') {
    var connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "",
        database: "SOS_db"
    });
} else {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
}

connection.connect(function (err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as ID: " + connection.threadId);
});

module.exports = connection;