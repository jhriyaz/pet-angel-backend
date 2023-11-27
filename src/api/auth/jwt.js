var jwt = require('jsonwebtoken');


let jwtToken=(req,res)=>{
    let data=req.body
    let token =jwt.sign({token:data},process.env.SECRET_TOKEN_KEY, { expiresIn: '1h' })
res.cookie('token', token,{
    httpOnly: true,secure:true,sameSite:'none'
}).send({message:'success'});
}
module.exports=jwtToken