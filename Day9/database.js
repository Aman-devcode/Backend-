const mongoose = require('mongoose');
async function main(){//cluster sein connect kiya
 await mongoose.connect("mongodb+srv://Amanserver4555:aman%4045550603@cluster0.sa1sqdf.mongodb.net/Bookstore")//yaha pr Bookstore name ka database automaticaly create ho jayega
 // code write here 
//  const userSchema=new mongoose.Schema({
//     //schema create kiya
//  // name:String,
//     age:Number,
//     city:String,
//     gender:String
//  })

 //model ko create === collection create karna(Table ko cretae karna)
//  const user=mongoose.model("User",userSchema)
 //document create kiya
//  const User=new user({
//    name:"aman",
//    age:22,
//    city:"nodida",
//    gender:"male"
//  })
//  await User.save();//database mein insert kiya
//  console.log(User);

}
// main()
// .then(()=>console.log("connected to db"))
// .catch((err)=>console.log(err));
module.exports=main;
