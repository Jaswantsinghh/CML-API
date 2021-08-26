const express = require("express");
const app = express();

app.use("/events",(req,res)=>{
    res.send("Working");
});
app.listen("5000", () => {
    console.log("listening on localhost:5000");
});