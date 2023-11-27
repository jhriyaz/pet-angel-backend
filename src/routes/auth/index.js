const express=require('express')
const jwtToken = require('../../api/auth/jwt')
const router=express.Router()
router.post('/auth/jwt',jwtToken)
module.exports=router