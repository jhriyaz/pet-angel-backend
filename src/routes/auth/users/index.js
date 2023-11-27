const express=require('express')
const { usersGet, usersPost, MakeAdmin } = require('../../../api/auth/user')
const verifyToken = require('../../../middleware/auth/VerifyToken')
const verifyAdmin = require('../../../middleware/auth/VerifyAdmin')

const router=express.Router()

router.post('/auth/users',usersPost)
router.get('/auth/users',verifyToken,verifyAdmin, usersGet)
router.patch('/auth/users/:id',verifyToken,verifyAdmin, MakeAdmin)
module.exports=router