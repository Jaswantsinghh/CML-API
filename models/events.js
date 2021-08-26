const mongoose = require('mongoose');
const event_schema =  mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
	event_title:{
		type:String,
		required:true
	},
    event_about:{
        type:String,
        required:true
    },
    event_date:{
        type:String,
        required:true
    },
    event_time:{
        type:String,
        required:true
    },
    event_status:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Events',event_schema );