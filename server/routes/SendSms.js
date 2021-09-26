const dotenv = require('dotenv')
const path = require('path')
dotenv.config({path:path.resolve(__dirname,'../.env')});

const sendSMS = (message, toWho) => {
    const SID = process.env.TWILIO_SID;
    const API = process.env.TWILIO_API;
    const client = require('twilio')(SID, API);
    client.messages.create({
        to: `${toWho}`,
        from: '+16154995410',
        body: `${message}`
    })
        .then(message => {
            console.log(message);
            console.log(message.sid);
            console.log('Messaeg');
        })
        .catch(errr=>console.log(errr))
}

module.exports = sendSMS;