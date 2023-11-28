const UsersCollection = require("../../models/auth/usersModel")

const checkAdmin=async(req,res)=>{
   let email= req.email
   let query={email:email}
   let user =await UsersCollection.findOne(query)
if(user?.role==='admin'){
  return  res.send(true)
}
res.send(false)
}
module.exports=checkAdmin