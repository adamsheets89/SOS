require('dotenv').config({path: __dirname + '/.env'})

const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: "430a0ec3",
  apiSecret: "3Gp7OFe35mbC3y8D"
});

//function with for loop to run through allies and send a message to each phone number
nexmo.message.sendSms(
    12092694056, '17735435117', 'yo',
      (err, responseData) => {
        if (err) {
          console.log(err);
        } else {
          console.dir(responseData);
        }
      }
   );
   