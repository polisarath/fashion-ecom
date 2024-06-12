const mongoose = require("mongoose")
require('dotenv').config();
const mongoDbUrl=process.env.DbUrl
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}