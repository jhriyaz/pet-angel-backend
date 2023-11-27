const { Schema, model } = require("mongoose");


const pet=new Schema({
    image:{
        type: String,
        required: true
    }, name:{
        type: String,
        required: true
    },age:{
        type: Number,
        required: true
    },category:{
        type: String,
            required: true
    },location:{
        type: String,
        required: true
    },short_description:{
        type: String,
        required: true
    },long_description:{
        type: String,
        required: true
    },adopted:{
        type: Boolean,
        default: false
    },Added:{
        type: String,
        required: true
    }
})
const petSchema =model('pets',pet)
module.exports=petSchema