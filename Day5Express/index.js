const express=require("express");// exprees ko laya 
const app=express();// server create kiya // yahi mera server hai

// app.use((req,res)=>{ // Route handle karta hai (GET request)
//     res.send({"name":"aman","age":22}); 
// })
//? char becomes optinal
//+ char repeat multiple times
//* char any number of char is come or arrives
app.use("/contact",(req,res)=>{
    res.send({"name":"aman kumar pandit","mobile-number":62039})
})
app.use("/About/:id",(req,res)=>{
    console.log(req.params);
    res.send("hellow bhai")
})

app.use("/Profile",(req,res)=>{
    res.send("hi")

})

app.use("/",(req,res)=>{
    res.send({"name":"bittu"})

})

app.listen(4000,()=>{// ye kuch listen bhi krega // ye server start karta hai
    console.log("listen at port number 4000");
})
