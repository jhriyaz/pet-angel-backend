const { Schema, model } = require("mongoose");

let PetCategorySchema = new Schema({
    category:{
        type: String,
        required: true
    },
        details:{
            type: String,
        required: true
        },
        image:{
            type: String,
            default: 'user'
        }
    
    
})
let Category = model('Category',PetCategorySchema)
module.exports=Category