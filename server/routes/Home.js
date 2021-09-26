const { response } = require('express');
const express = require('express');
const router = express.Router();
const getModel= require('../models/Contacts');
const sendSMS = require('./SendSms.js');
router.post('/Home',async (req,res)=>{
        const userId = req.headers.userid;
        const contactModel = getModel(userId);
        const data = await contactModel.find({});
        const gpsCord = req.body.gpsCord;
        data.map((contact)=>{
            console.log(contact.Name);
            console.log(contact.Contact);
            console.log(gpsCord);
        })
    res.send('Data Done!')
})
module.exports = router;