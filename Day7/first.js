const express=require("express");
const app=express();
app.use("/about1",(req,res,next)=>{
    console.log(`${Date.now()} ${req.method} ${req.url}`);
    next();
})
app.get("/about1",(req,res)=>{
    res.send("Info about user")

})
app.post("/about1",(req,res)=>{
    res.send("Info saved")

})
app.delete("/about1",(req,res)=>{
    res.send("info delete")

})
app.listen(4000,()=>{
    console.log("listining at port 4000")

})
