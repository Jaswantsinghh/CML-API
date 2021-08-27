const express = require('express');
const router = express.Router();
const path=require('path');

router.get('/events',(req,res)=>{
    res.sendFile(path.join(__dirname,'/../public/events.html'));
})

module.exports = router;