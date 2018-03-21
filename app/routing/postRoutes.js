var connection = require("../config/connection");
var express = require("express");
var app = express();

var displayAllies = function (app) {
    app.get("/display", function (req, res) {
        connection.query("SELECT * FROM allies WHERE user_id = ?", [req.session.user_id], function (err, results) {
            res.render("allies", {"data" : results});

        })
    })
}

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
                user_id: req.session.user_id,
            },

            function (err, data) {
                console.log("line 35");
                if (err) throw err;
                console.log("Ally was successfully added to the database.")
            }
        );
        connection.query("SELECT * FROM allies WHERE user_id = ?", [req.session.user_id], function (err, results) {
            console.log("43 , results: " + JSON.stringify(results));
            res.send(results);

        })
    })
}

var login = function (app) {
    app.post('/api/login', function (req, res) {
        console.log("youve hit /api/login")
        var query = "SELECT * FROM users WHERE user_name = ?";

        connection.query(query, [req.body.username], function (err, response) {
            if (response.length == 0) {
                res.redirect('/')
            }
            console.log("response: " + JSON.stringify(response));
            console.log(req.body.password === response[0].user_password)

            if (req.body.password === response[0].user_password) {
                console.log("line 61");
                req.session.logged_in = true;
                req.session.user_id = response[0].user_id;
                req.session.email_add = response[0].email_add;
                req.session.phone_number = response[0].phone_number;
                req.session.user_name = response[0].user_name;
                console.log("line 67");
                res.redirect('/display');
                console.log("here too");
            } else {
                console.log("line 71");
                res.redirect('/')
            }
        });
    });
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
        res.redirect("../allies")
    });
}

module.exports = {
    displayAllies: displayAllies,
    updateDB: updateDB,
    login: login,
    newUser: newUser
}

