const express=require('express')
const { StripePayment } = require('../../api/payment/payment')

const router=express.Router()


router.post("/create-payment-intent", StripePayment)



module.exports=router