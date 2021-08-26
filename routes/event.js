const express = require('express');
const app = express();
const router = express.Router();
const path=require('path');
const Event = require('../models/events');
const mongoose = require('mongoose');

const resolve = path.resolve;

router.get('/create-event',(req,res)=>{
    res.sendFile(path.join(__dirname,'/../public/event.html'));
})
router.post('/create-event',(req,res,next)=>{
    const event = new Event({
        _id:new mongoose.Types.ObjectId,
        event_title:req.body.event_title,
        event_about:req.body.event_about,
        event_date:req.body.event_date,
        event_time:req.body.event_time,
        event_status:req.body.event_status
    })
    event.save()
    .then(result=>{
    console.log(result);
    res.status(200).json({
        newEvent:result
       })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })

    })

})

module.exports = router;