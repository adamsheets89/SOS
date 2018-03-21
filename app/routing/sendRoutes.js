var connection = require("../config/connection")
require('dotenv').config({ path: __dirname + '/.env' })

const Nexmo = require('nexmo');


//this one will need to display the call buttons for the user to select 
var sendMessage = function (app) {
  app.post("/text", function (req, res) {
    // res.render("call")
    console.log("this is the body", req.body)

    const nexmo = new Nexmo({
      apiKey: "430a0ec3",
      apiSecret: "3Gp7OFe35mbC3y8D"
    });

    //function with for loop to run through allies and send a message to each phone number
    connection.query('SELECT * FROM allies WHERE user_id = ?', [req.session.user_id], function (err, thingsFromDb) {

      for (var i = 0; i < thingsFromDb.length; i++) {
        var phoneNumber = thingsFromDb[i].phone_number;
        console.log("23 - phone: " + phoneNumber);

        nexmo.message.sendSms(
          12092694056, phoneNumber, req.body.message,
          (err, responseData) => {
            if (err) {
              console.log(err);
            } else {
              console.dir(responseData);
            }
          }
        );
      }
    });



  })
};


module.exports = {
  message: sendMessage
};
