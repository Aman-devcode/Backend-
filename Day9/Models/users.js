const mongoose = require('mongoose');
const{schema}=mongoose;
const userSchema=new mongoose.Schema({
    //schema create kiya
    name:String,
    age:Number,
    city:String,
    gender:String
 })
//   const User=new user({
//    name:"aman",
//    age:22,
//    city:"nodida",
//    gender:"male"
//  })
  const user=mongoose.model("User",userSchema);
  module.exports=user;  