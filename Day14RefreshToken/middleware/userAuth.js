const jwt = require('jsonwebtoken');
const userAuth= async(req,res,next)=>{
    try{
        
                // code likhna padege, user ko authenticate kar paauon
                const {token}=req.cookies;
                if(!token){
                    throw new Error("Token Dosent exsits");
                }
                const payload =  jwt.verify(token,"Rohit@13412$");
                // console.log(payload);
                const{_id}=payload;
                if(!_id){
                    throw new Error("Id is missing")
                }
                const result = await User.findById(_id);
                if(!_result){
                    throw new Error("result is not found ")
                }
                res.send(result);
    }
    catch{
        res.send("Error:"+err.message)
    }
}