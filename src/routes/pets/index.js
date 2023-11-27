const express=require('express');
const { petsGet, petsPost, myPetsPost, petCount } = require('../../api/pets/pets');
const verifyToken = require('../../middleware/auth/VerifyToken');
const verifyAdmin = require('../../middleware/auth/VerifyAdmin');
const router=express.Router()


router.get('/api/pets',petsGet)
router.post('/api/pets',verifyToken,petsPost)
router.get('/api/mypets',verifyToken,verifyAdmin, myPetsPost)
router.get('/api/petcount',verifyToken,verifyAdmin,petCount)
module.exports=router;