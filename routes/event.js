const express = require('express');
const app = express();
const router = express.Router();
const path=require('path');
const resolve = path.resolve;

router.get('/create-event',(req,res)=>{
    res.sendFile(path.join(__dirname,'/../public/event.html'));
})
router.post('/create-event',(req,res,next)=>{
    console.log(req.body);
})

module.exports = router;