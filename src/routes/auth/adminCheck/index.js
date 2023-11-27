const express=require('express')
const verifyToken = require('../../../middleware/auth/VerifyToken')
const checkAdmin = require('../../../api/auth/checkAdmin')
const router=express.Router()


router.get('/auth/checkadmin',verifyToken,checkAdmin)
module.exports=router