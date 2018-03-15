// Download the Node helper library from twilio.com/docs/node/install
// These consts are your accountSid and authToken from https://www.twilio.com/console
const accountSid = 'AC098085aa798af1740ddae4887c12d468';
const authToken = '916d4a5195ba666b936ec6cf070c2f62';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    messagingServiceSid: 'MG9752274e9e519418a7406176694466fa',
    to: '+7735435117',
    body: 'Phantom Menace was clearly the best of the prequel trilogy.',
  })
  .then(message => console.log(message));