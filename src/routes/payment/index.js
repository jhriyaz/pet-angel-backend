const express=require('express')
const { StripePayment, AfterPayment } = require('../../api/payment/payment')

const router=express.Router()


router.post("/create-payment-intent", StripePayment)
router.post('/api/donations',AfterPayment)


module.exports=router