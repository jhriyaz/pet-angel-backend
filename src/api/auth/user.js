const UsersCollection = require("../../models/auth/usersModel")
const usersPost=async (req,res)=>{
let data=req.body
let result=await UsersCollection.create(data)
res.send(result)

}
const usersGet=async (req,res)=>{
    let admin=req.admin
let result=await UsersCollection.find()
res.send(result)
}



const MakeAdmin=async (req, res)=>{

var id = req.params.id;
    let query={_id:id}
    let user=await UsersCollection.findOne(query)
    let newData={role:'admin'}
  await user.updateOne(newData)
    res.send({result:'success'})
}
const users={usersGet,usersPost,MakeAdmin}
module.exports=users