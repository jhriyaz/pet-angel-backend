const { Schema, model } = require("mongoose");


let donationCampaign=new Schema({
    image:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    postedBy:{
type: String,
required: true
    },
    campaignEndDate:{
        type:Date,
        required: true
    },

    max_amount:{
        type: Number,
        required: true
    },
    short_description:{
        type: String,
        required: true
    },
      long_description:{
        type: String,
        required: true
      },publishDate:{
        type:Date,
        default:new Date()
      },open:{
type:Boolean,
default:true
      }
})


let donationCampaignSchema = model('donation_campaign',donationCampaign)
module.exports = donationCampaignSchema