var connection = require("../config/connection");
var express = require("express");

var app =express();
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


    app.post("/new-user", function (req, res) {

        var username = req.body.user_name;
        var email = req.body.email_add;
        var phone = req.body.phone_number;
        var password = req.body.user_password;
        var queryInsert = "INSERT INTO users (user_id, email_add, user_password, phone_number)VALUES ("+ username +", "+ email +", "+ phone +", "+ password +")"

        connection.query(queryInsert, function(err, result){
            if (err) throw err;
            console.log("One record inserted");
        });
        res.send("IDK BUT IT WORKS")
    });





// var newUser = function (app) {
// app.get("/new-user", function(req, res) {
//     // findAll returns all entries for a table when used with no options
//     db.User.findAll({}).then(function(SOS_db)) {
//       //We have access to the user as an argument inside of the callback function
//       res.json(SOS_db);
//     });
//   });



    module.exports = {
        // updateDB: updateDB,
        displayDB: displayDB,
        // newUser: newUser
    }

