const UsersCollection = require("../../models/auth/usersModel")

const verifyAdmin=async(req,res,next)=>{
    let email=req.email
    let query={email:email}
    let result =await UsersCollection.findOne(query)

  
    if (result?.role==='admin'){
        req.admin=true
    }else{
        req.admin=false
    }
    next()
}
module.exports=verifyAdmin