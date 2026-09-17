const express=require("express");
const app=express();
const main=require("./database");
const user=require("./model/users");
app.use(express.json());
app.get("/info",async(req,res)=>{
    try{
       const result= await user.find({});
       res.send(result);

    }
    catch(err){
        res.send("Error"+err.message);

    }
})
app.get("/user/:id",async(req,res)=>{
    try{
        const result=await user.findById(req.params.id);
        res.send(result);

    }
    catch(err){
        res.send("Error"+err.message);


    }
})
app.post("/register",async (req,res)=>{
    try{
        await user.create(req.body);
        res.send("user register sucessfully");

    }
    catch(err){
        res.send("Error"+err.message);

    }

})
app.delete("/user/:id",async(req,res)=>{
    try{
        await user.findByIdAndDelete(req.params.id);
        res.send("delete data sucessfully")
    }
    catch(err){
        res.send("Error"+err.message);

    }
})
app.patch("/user",async (req,res)=>{
    try{
        const{_id,...update}=req.body
        await user.findByIdAndUpdate(_id,update);
        res.send("upadte sucessfully");

    }
    catch(err){
        res.send("Error"+err.message);

    }
})
main()
.then(()=>{console.log("connected to db")
app.listen(4000,()=>{
    console.log("listen port no at 4000 ");
})
})
.catch((err)=>console.log(err));
