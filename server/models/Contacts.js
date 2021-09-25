const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    Contact:{
        type:String,
        require:true,
    }
})
const getContactDB=(userId)=>{
    const userContact = mongoose.model(`${userId}`,contactSchema);
    return userContact;
}

module.exports = getContactDB;