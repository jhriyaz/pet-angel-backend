const paymentSchema = require("../../models/Payment/payment");

const stripe = require("stripe")(process.env.PAYMENT_SECRET_KEY)



let StripePayment=async (req, res) => {
    const price = req.body.price;

    
  const amountInCents = parseInt(price)*100;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: "usd",
   amount:amountInCents,
     payment_method_types:['card']
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  }




  const AfterPayment=async (req, res)=>{
   let data= req.body
   let result=await paymentSchema.create(data)
   res.send(result)
  }
module.exports={StripePayment,AfterPayment}
