const adaptionSchema = require("../../models/adoption/adoption")
const petSchema = require("../../models/pet/pets")

const adoptionPost=async(req,res)=>{
    let data=req.body
    const result=await adaptionSchema.create(data)

    res.send(result)
}
const myadoptionRequest=async(req,res)=>{
   let email= req.email
   let id= req.params.id
   let query = {email:email,petId:id}
const result=await adaptionSchema.findOne(query)
if(result){
   return res.send({requested:true})
}
res.send({requested:false})

}


const adoptionRequested=async(req,res)=>{
let email=req.email
    let result=await adaptionSchema.find({postedBy:email}).populate('petId',['AddedBy','adopted','name','image'])
  res.send(result)
}


// Delete adopt request
let Deleterequest=async(req,res)=>{
    let id=req.params.id
    let query = {_id:id}
    let result = await adaptionSchema.deleteOne(query)
    console.log(result)
    res.send(result)
}


module.exports={adoptionPost,myadoptionRequest,adoptionRequested,Deleterequest}