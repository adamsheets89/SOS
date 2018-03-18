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

        console.log('You sent the name "' + req.body.user_name+'".\n');
        console.log('You sent the Email "' + req.body.email_add+'".\n');
        console.log('You sent the Phone number "' + req.body.phone_number+'".\n');
        console.log('You sent the Password "' + req.body.user_password+'".\n');
        res.end()
        
        connection.query("INSERT INTO users (user_name, email_add, phone_number, user_password) VALUES ('"+req.body.user_name+"','"+req.body.email_add+"','"+req.body.phone_number+"','"+req.body.user_password+"')",function(err, result)      
        {                                                      
          if (err)
             throw err.stack;
        });
        });

    module.exports = {
        // updateDB: updateDB,
        displayDB: displayDB,
        newUser: newUser
    }
}