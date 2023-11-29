const express=require('express')
const { adoptionPost, myadoptionRequest, adoptionRequested, Deleterequest } = require('../../api/adoption/adoption')
const verifyToken = require('../../middleware/auth/VerifyToken')
const router=express.Router()




router.post('/api/adoption',adoptionPost)
router.get('/api/my-adoption-request/:id',verifyToken, myadoptionRequest)
router.get('/api/my-adoption',verifyToken, adoptionRequested)
router.delete('/api/my-adoption/:id',verifyToken, Deleterequest)
module.exports=router