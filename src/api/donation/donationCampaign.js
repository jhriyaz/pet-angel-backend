const donationCampaignSchema = require("../../models/donation/donation")

let postDonationCampaign=async (req, res) => {
    let data=req.body
    let result=await donationCampaignSchema.create(data)
    console.log(result)
    res.send(result)
}
let getDonationCampaigns=async (req, res) => {
    let email=req.email
    let query={postedBy:email}
    let result=await donationCampaignSchema.find(query)
    res.send(result)
}
// get all data 

let getAllDonationCampaigns=async (req, res) => {
let load=req.query
    let result=await donationCampaignSchema.find().sort({publishDate: -1})
    res.send({data:result,time:new Date()})

}



let getDonationCampaign=async (req, res) => {

   
    let id=req.params.id
    let query={_id:id}
    let result=await donationCampaignSchema.findOne(query)
    res.send(result)
    console.log(result)
}
let updateDonationCampaign=async (req, res) => {
    let id=req.params.id
    let email=req.email
   let data= req.body
    let query={_id:id,postedBy:email}
    let result=await donationCampaignSchema.updateOne(query,data)
    res.send(result)
}
let updateDonationCampaignStatus=async (req, res) => {
    let id=req.params.id
    let email=req.email
  
     let query={_id:id,postedBy:email}
    let oldData=await donationCampaignSchema.findOne(query)
 let result=await oldData.updateOne({open:!oldData.open})

    res.send(result)
}

module.exports={postDonationCampaign,getDonationCampaigns,getDonationCampaign,updateDonationCampaign,updateDonationCampaignStatus,getAllDonationCampaigns}