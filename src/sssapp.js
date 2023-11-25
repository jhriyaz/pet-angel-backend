const express=require('express')
const cors=require('cors')
const app = express()
const port = process.env.PORT ||6999
app.use(cors())

const { Schema, model } = require("mongoose");
const connectDb = require('./db/ConnecttoDB')

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
        required: true
        }
    
    
})

let Category = model('Category',PetCategorySchema)

let Categories=async(req, res)=>{
  
    let result=await Category.find()
  
    res.send(result)
}
const router=express.Router()

let dadad=router.get('/categories',Categories)
app.use(dadad)
const main=async()=>{
    await connectDb()
    app.listen(port, (req,res)=>{
        console.log('Server is running on port: ',port)
    })
 }
 main()