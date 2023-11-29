const express=require('express');
const { petGet, petsPost, myPetsPost, petCount, petAvailableBySort, mypetCount, UpdatePet, AdoptPet, DeletePet } = require('../../api/pets/pets');
const verifyToken = require('../../middleware/auth/VerifyToken');
const verifyAdmin = require('../../middleware/auth/VerifyAdmin');
const router=express.Router()


router.get('/api/petget/:id',petGet)
router.post('/api/pets',verifyToken,petsPost)
router.patch('/api/pets/:id',verifyToken,UpdatePet)
router.get('/api/mypets',verifyToken,verifyAdmin, myPetsPost)
router.patch('/api/adopt/:id',verifyToken,AdoptPet)
router.delete('/api/delete/:id',verifyToken,DeletePet)
router.get('/api/petcount',verifyToken,verifyAdmin,petCount)
router.get('/api/mypetcount',verifyToken,verifyAdmin,mypetCount)
router.get('/api/petsavailable',verifyToken,petAvailableBySort)
module.exports=router;