const adaptionSchema = require("../../models/adoption/adoption")
const petSchema = require("../../models/pet/pets")


// post request for pet
const petsPost= async(req,res)=>{
let data=req.body
let email=req.email
    const result = await petSchema.create({...data,AddedBy:email})
    res.send(result)
    }

    // Get Request for Single Pet
    const petGet= async(req,res)=>{
        let id= req.params.id
        let query = {_id:id}
        const result = await petSchema.findOne(query)
        res.send(result)
        }



// Update single pet Details
const UpdatePet=async(req,res)=>{
    let id= req.params.id
let data=req.body
let updated={  image: data.image,
    name: data.name,
    age: data.age,
    category: data.category,
    location: data.location,
    short_description: data.short_description,
    long_description:data.long_description,}
    let query = {_id:id}
    
    const result = await petSchema.findOneAndUpdate(query,data)
    console.log(result)
    res.send(result)
}
// Adopted pet
let AdoptPet=async(req,res)=>{
    let id=req.params.id
    let query = {_id:id}
    let deleteQuery = {petId:id}
   await petSchema.updateOne(query,{adopted:true})
    let result= await adaptionSchema.deleteMany(deleteQuery)
    console.log(result)
    res.send(result)
}
// Delete pet
let DeletePet=async(req,res)=>{
    let id=req.params.id
    let query = {_id:id}
    let result = await petSchema.deleteOne(query)
    console.log(result)
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
    let category
    if(data.category==='all'){
     category=''
    }else{
     category=data.category
    }
    let query;
    data.name &&category? query={adopted:false,name: { "$regex": `${data.name}`, "$options": "i" },category:category}:category?query={adopted:false,category:category}:data.name?query={adopted:false,name: { "$regex": `${data.name}`, "$options": "i" }}:query={adopted:false}
    const result =await petSchema.find(query).countDocuments()
        res.send({total:result})
    
    }


const petAvailableBySort=async(req,res)=>{
  
let data=req.query
let {perPage,page} =data

let query;
let category
if(data.category==='all'){
 category=''
}else{
 category=data.category
}
    data.name &&category? query={adopted:false,name: { "$regex": `${data.name}`, "$options": "i" },category:category}:category?query={adopted:false,category:category}:data.name?query={adopted:false,name: { "$regex": `${data.name}`, "$options": "i" }}:query={adopted:false}

let sort=data.sort
console.log(sort)
let result =await petSchema.find(query).limit(perPage).skip(perPage * page).sort({AddedDate:sort==='true'?-1:1})
res.send(result)
}



module.exports={petGet,petsPost,myPetsPost,petCount,petAvailableBySort,mypetCount,UpdatePet,AdoptPet,DeletePet}