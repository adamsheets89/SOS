var connection = require("../config/connection");
var express = require("express");
// get router
var app = express();
// need another route for pulling up all existing allies
// app.get("/api/allies")
var displayDB = function (app) {
    app.get("/api/allies", function (req, res) {
        connection.query("SELECT * FROM allies", function (err, results) {
            for (var i = 0; i > results.length; i++) {
                var allyName = results[i].ally_name;
                var allyPhone = results[i].phone_number;
                var allyEmail = results[i].email_add;
            }
            console.log("results: " + results);
        })
    })
}

// this is route for adding an ally
var updateDB = function (app) {
    app.post("/api/allies", function (req, res) {
        var allyName = req.body.name;
        var allyPhone = req.body.phone;
        var allyEmail = req.body.email;

        console.log("26" + allyName);
        console.log("27" + allyPhone)
        console.log("28" + allyEmail)
        connection.query("INSERT INTO allies SET ?",
            {
                ally_name: allyName,
                phone_number: allyPhone,
                email_add: allyEmail,
            },

            function (err, data) {
                console.log("line 35");
                if (err) throw err;
                console.log("Ally was successfully added to the database.")
                res.json(data)
            }
        );
    })
}

var newUser = function (app) {
    app.post("/api/new-user", function (req, res) {

        var fullName = req.body.name;
        var username = req.body.user_name;
        var email = req.body.email_add;
        var phone = req.body.phone_number;
        var password = req.body.user_password;
        console.log("name: " + fullName);
        console.log("user: " + username);
        console.log("email: " + email);
        console.log("phone: " + phone);
        console.log("password: " + password);

        connection.query("INSERT INTO users SET ?",
            {
                full_name: fullName,
                phone_number: phone,
                email_add: email,
                user_name: username,
                user_password: password
            },

            function (err, result) {
                if (err) throw err;
                console.log("One record inserted");
            });
        res.send("/allies")
    });
}


module.exports = {
    updateDB: updateDB,
    displayDB: displayDB,
    newUser: newUser
}

