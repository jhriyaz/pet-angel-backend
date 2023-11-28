const petSchema = require("../../models/pet/pets")

const petsGet= async(req,res)=>{
const result = await petSchema.find()
res.send(result)
}
// post request for pet
const petsPost= async(req,res)=>{
let data=req.body
let email=req.email
    const result = await petSchema.create({...data,AddedBy:email})
    res.send(result)
    }


// pet get request by email
const myPetsPost= async(req,res)=>{
let email=req.email
let admin=req.admin
let data=req.query
let {perPage,page} =data
let sort =data.sort
let query;
if(!admin){
    query={
        AddedBy:email
    }
}
const result = await petSchema.find(query).limit(perPage).skip(perPage * page).sort({name:sort==='true'?-1:1})

    res.send(result)
    }



const mypetCount=async(req,res)=>{
let email=req.email
let admin=req.admin

let query;
if(!admin){
    query={
        AddedBy:email
    }
}
const result =await petSchema.find(query).countDocuments()
res.send({total:result})

}
const petCount=async(req,res)=>{
    let data=req.query
   
    let query;
    data.name &&data.category? query={adopted:false,name: { "$regex": `${data.name}`, "$options": "i" },category:data.category}:data.category?query={adopted:false,category:data.category}:data.name?query={adopted:false,name: { "$regex": `${data.name}`, "$options": "i" }}:query={adopted:false}
    const result =await petSchema.find(query).countDocuments()
        res.send({total:result})
    
    }


const petAvailableBySort=async(req,res)=>{
  
let data=req.query
let {perPage,page} =data

let query;

    data.name &&data.category? query={adopted:false,name: { "$regex": `${data.name}`, "$options": "i" },category:data.category}:data.category?query={adopted:false,category:data.category}:data.name?query={adopted:false,name: { "$regex": `${data.name}`, "$options": "i" }}:query={adopted:false}

let sort=data.sort
console.log(sort)
let result =await petSchema.find(query).limit(perPage).skip(perPage * page).sort({AddedDate:sort==='true'?-1:1})
res.send(result)
}



module.exports={petsGet,petsPost,myPetsPost,petCount,petAvailableBySort,mypetCount}