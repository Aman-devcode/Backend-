const express=require("express");
const app=express();
const main=require("./database");
const user=require("./Models/users")
app.use(express.json());// json file ko java script ke object mein convert kiya
app.get("/info",async(req,res)=>{
    const ans=await user.find({});
    res.send(ans);
})
app.post("/info",async(req,res)=>{
    const ans=new user(req.body)
    await ans.save();
    res.send("Succesfully updated");
    
})
app.delete("/info",async(req,res)=>{
    await user.deleteOne({name:"Aman kumar pandit"})
    res.send("sucessfully delete");

})
main()
.then(()=>{console.log("connected to db")
app.listen(4000,()=>{
    console.log("listen port no at 4000 ");
})
})
.catch((err)=>console.log(err));
