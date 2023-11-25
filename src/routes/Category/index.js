const express=require('express')
const CategoriesGet = require('../../api/Category/Categories')
const router=express.Router()

router.get('/api/categories',CategoriesGet)

module.exports=router