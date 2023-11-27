const express=require('express')
const CategoriesGet = require('../../api/Category/Categories')
const verifyToken = require('../../middleware/auth/VerifyToken')
const router=express.Router()

router.get('/api/categories',CategoriesGet)

module.exports=router