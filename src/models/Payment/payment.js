const { Schema, model } = require("mongoose");




const payment=new Schema({
    email:{
        type: String,
        required: true
    },paymentDate:{
        type: Date,
        default: new Date(),
        
    },donationCampaign:{
        type: Schema.Types.ObjectId,
        ref: 'donation_campaign',
       required:true
    },transactionId:{
        type: String,
        required: true
    },price:{
        type: Number,
        require:true
    }
})

const paymentSchema = new  model('payments',payment)
module.exports=paymentSchema