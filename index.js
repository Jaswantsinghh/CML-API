const express = require("express");
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const createEvent=require('./routes/event');

const app = express();

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/', createEvent);
app.get('*',function(req, res){
  res.status(400).send('Oops!! This page do not exist :(');
});

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true,useUnifiedTopology: true },() =>{
    console.log("DB connected");
});
app.listen(process.env.PORT || 8080);