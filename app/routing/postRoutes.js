var connection = require("../config/connection")


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
    app.post("/api/users", function (req, res) {
        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var username = req.body.username;
        var userEmail = req.body.email;
        var userPhone = req.body.phone;
        var userPass = req.body.password;

        console.log("54 " + firstName);
        console.log("55 " + lastName);
        console.log("55 " + username);
        console.log("56 " + userEmail);
        console.log("57 " + userPhone);
        // console.log("58 " + userPass);

        connection.query("INSERT INTO users SET ? ",
            {
                first_name: firstName,
                last_name: lastName,
                phone_number: userPhone,
                email_add: userEmail,
                user_name: username,
                user_password: userPass
            },

            function (err, data) {
                console.log("line 73");
                if (err) throw err;
                console.log("User was successfully added to the database.")
                res.json(data)
            }
        )
    })

}

module.exports = {
    updateDB: updateDB,
    displayDB: displayDB,
    newUser: newUser
}
