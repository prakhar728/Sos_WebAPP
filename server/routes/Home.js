const { response } = require('express');
const express = require('express');
const router = express.Router();
const getModel= require('../models/Contacts');

router.get('/Home',async (req,res)=>{
    const signal = req.body.signal;
    if(signal=='true')
    {
        const userId = req.headers.userid;
        const contactModel = getModel(userId);
        const data = await contactModel.find({});
        data.map((contact)=>{
            console.log(contact.Name);
            console.log(contact.Contact);
        })
    }
    res.send('Data Done!')
})
module.exports = router;