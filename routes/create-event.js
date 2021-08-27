const express = require('express');
const fs = require('fs');
const router = express.Router();
const path=require('path');
const Event = require('../models/events');
const mongoose = require('mongoose');
const multer = require('multer');

router.get('/create-event',(req,res)=>{
    res.sendFile(path.join(__dirname,'/../public/create-event.html'));
})

const Storage = multer.diskStorage({
    destination:"./public/uploads/",
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
});

const upload = multer({
    storage:Storage,
    limits:{
        fileSize: 1024*1024*1
    }
}).single('event_image');

router.post('/create-event',upload,(req,res,next)=>{
    const event = new Event({
        _id:new mongoose.Types.ObjectId,
        event_title:req.body.event_title,
        event_about:req.body.event_about,
        event_date:req.body.event_date,
        event_time:req.body.event_time,
        event_image:req.file.filename,
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