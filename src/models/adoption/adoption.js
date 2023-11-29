const { Schema,  model } = require("mongoose");



const adoption=new Schema({
    name:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    },address:{
        type:String,
        required:true
    },phone:{
        type:String,
        required:true
    },petId:{
        type: Schema.Types.ObjectId,
         ref: 'pets',
        required:true
    },postedBy:{
        type: Schema.Types.String,
        ref: 'AddedBy',
       required:true
    }
})

const adaptionSchema=model('adoptions',adoption)
module.exports=adaptionSchema