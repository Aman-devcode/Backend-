const express=require("express");
const app=express();
app.use("/about",(req,res,next)=>{ //this is middlewarwe first
    console.log("first");
    // res.send("hellow aman");
    next();
    console.log("fourth");
   
},
(req,res,next)=>{//This is middleware second
    console.log("second");
    // res.send("hellow i am second");
    next();
    console.log("fifth")
    
},// note:-Ek time pe multiple requests handle ho sakti hain
// Node.js asynchronous + event loop based hai
// ✔️ Isliye server fast hota hai
(req,res)=>{// This is request handeler
    console.log("Third");
    res.send("hellow i am second");
    console.log("six")
// 🧠 Confusion clear karte hain
// Tu soch raha hai:
// 👉 “output ulta aa raha hai → shayad async chal raha hai”
// ❌ Galat assumption
// 🔥 Real reason kya hai?
// 👉 Ye behavior aata hai:
// ✅ Function call stack (LIFO - Last In First Out)

})
app.listen(4000,()=>{
    console.log("server listen carefully ")

})