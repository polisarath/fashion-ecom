const Razorpay = require('razorpay');
require('dotenv').config();
const apiKey=process.env.apiKey
const apiSecret=process.env.apiSecret

 const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;