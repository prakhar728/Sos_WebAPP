const express = require('express');
const router = express.Router();
const getModel= require('../models/Contacts');
router.get('/getContacts',async (req,res)=>{
  
    const userId = req.headers.userid;
    const contactModel = getModel(userId);
    const data = await contactModel.find({});
    console.log(data);
    res.send('here data')
})

router.post('/postContacts',async (req,res)=>{
    const userId= req.body.userId;
    const contactModel = getModel(userId);
    const contact = new contactModel({
        Name:req.body.Name,
        Contact:req.body.Contact
    })
    try {
        await contact.save();
        res.send('Saved Contact!');
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;