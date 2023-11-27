const { Schema, model } = require("mongoose");

let userSchema =new Schema({
    email:{
    type:String ,
    required: true,
    },
    name:{
    type:String ,
    required: true
        },photo:{
            type: String ,
            required: true
        },
    role:{
            type: String ,
            default: 'user'
        }
})

let UsersCollection=model('users',userSchema)
module.exports=UsersCollection