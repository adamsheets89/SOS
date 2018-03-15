var connection = require("../../config/connection")

var updateDB = function (app) {
    app.post("/allies", function (req, res) {
        var allyName = req.body.name;
        var allyPhone = req.body.phone;
        var allyEmail = req.body.email;
        connection.query("INSERT INTO allies SET ?",
            {
                ally_name: allyName,
                phone_number: req.body.phone,
                email_add: req.body.email,
            },
            function (err) {
                if (err) throw err;
                console.log("Ally was successfully added to the database.")
            }
        );
    })
}

module.exports = {updateDB: updateDB}