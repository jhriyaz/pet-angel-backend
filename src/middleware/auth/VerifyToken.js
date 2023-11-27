var jwt = require('jsonwebtoken');

let verifyToken=(req,res,next)=>{
let token = req.cookies.token
console.log(token)
if(!token){
    return res.status(401).send({message:'401 Unauthorized request'})
}
jwt.verify(token,process.env.SECRET_TOKEN_KEY,function(err,decoded){
if(err){
    return res.status(401).send({message:'401 Unauthorized request'})
}
req.email =decoded.token.email

next()
})
}
module.exports=verifyToken