const express = require('express');
const router = express.Router();

router.get('/Home',(req,res)=>{
    const signal = req.body.signal;
    if(signal)
    res.send('Send the Signal ASAP!');
})
module.exports = router;