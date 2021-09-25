const dotenv = require('dotenv')
dotenv.config();
const SID = process.env.TWILIO_SID;
const API = process.env.TWILIO_API;

const client = require('twilio')(SID,API);

const sendSMS = (message,toWho) =>{
    client.messages.create({
        to:toWho,
        from:'+16154995410',
        body:"This sms thing really works Wow"
    })
    .then(message=>{
        console.log(message.sid);
    })
}

module.exports = sendSMS;
