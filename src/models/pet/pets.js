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
    },AddedBy:{
        type: String,
        required: true
    },AddedDate:{
        type: Date,
        default: new Date()
    }
})
const petSchema =model('pets',pet)
module.exports=petSchema