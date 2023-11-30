const paymentSchema = require("../../models/Payment/payment")

let topDonations=async(req,res)=>{
    let result=await paymentSchema.find().sort({price:-1}).skip(0).limit(10)
    res.send(result)
}

let donationsById=async(req,res)=>{
    id=req.params.id
    let query={donationCampaign:id}
    let result=await paymentSchema.find({query})
}

module.exports={topDonations,donationsById}