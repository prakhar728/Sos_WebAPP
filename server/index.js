const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const HomeRoute = require('./routes/Home.js');
const contactRoute = require('./routes/Contact.js');
dotenv.config();
const app =express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI,()=>{
  console.log(('CONNECTED TO DB'));
})
app.use('/',HomeRoute);
app.use('/contacts',contactRoute);
app.listen(5000,()=>{
  console.log("Port Running on 5000!");
})
