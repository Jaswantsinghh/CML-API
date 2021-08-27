const express = require("express");
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const createEvent=require('./routes/create-event');
const indexPage=require('./routes/index');
const eventsPage=require('./routes/events');
const aboutPage=require('./routes/about');
const contactPage=require('./routes/contact');
const auth=require('./routes/auth');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname+'/public')));
app.use('/', indexPage);
app.use('/', aboutPage);
app.use('/', eventsPage);
app.use('/', createEvent);
app.use('/', contactPage);
app.use('/', auth);
app.get('*',function(req, res){
  res.status(400).send('Oops!! This page does not exist :(');
});

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true,useUnifiedTopology: true },() =>{
    console.log("DB connected");
});
app.listen(process.env.PORT || 8080);