const mongoose = require('mongoose');
const{schema}=mongoose;
const userSchema=new mongoose.Schema({
    //schema create kiya
   firstname:{
    type:String,
    required:true,
    minLenth:3,
    maxLength:13
   },
   lastname:{
    type:String
   },
   age:{
    type:Number,
    min:14,
    max:70
   },
   gender:{
    type:String,
    enum:["male","female","others"]
   },
   emailid:{
    type:String,
     unique:true,
    required:true,
    // unique:true
   },
   photo:{
    type:String,
    default:"this is the default photo"
   }
 } ,{timestamps:true})
   const user=mongoose.model("User",userSchema);
   module.exports=user;