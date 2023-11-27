const petSchema = require("../../models/pet/pets")

const petsGet= async(req,res)=>{
const result = await petSchema.find()
res.send(result)
}
// post request for pet
const petsPost= async(req,res)=>{
let data=req.body
let email=req.email
    const result = await petSchema.create({...data,Added:email})
    res.send(result)
    }


// pet get request by email
const myPetsPost= async(req,res)=>{
let email=req.email
let admin=req.admin
let query;
if(!admin){
    query={
        Added:email
    }
}
const result = await petSchema.find(query)
    res.send(result)
    }




const petCount=async(req,res)=>{
let email=req.email
let admin=req.admin
let query;
if(!admin){
    query={
        Added:email
    }
}
const result = (await petSchema.find(query)).countDocuments()
    res.send({total:result})

}
module.exports={petsGet,petsPost,myPetsPost,petCount}