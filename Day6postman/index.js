const express=require('express');
const app=express();
const BookStore=[
    {id:1,name:"Harry Pootter ",author:"DevFlux"},
    {id:2,name:"Harry mootter ",author:"Alex"},
    {id:3,name:"Akami ",author:"yansh"},
]
app.use(express.json());
app.get("/book",(req,res)=>{
    res.send(BookStore);
})
app.get("/book/:id",(req ,res)=>{
    const id=parseInt(req.params.id);//id ko sabse phle integer ke form mein store kiya isliye use kiya Parseint
    const Book=BookStore.find(info=>info.id===id);
    res.send(Book);
})
app.post("/book",(req,res)=>{
    BookStore.push(req.body);
    res.send("Data is saved Successfully")
})
app.patch("/book",(req,res)=>{
    console.log(req.body);
    const id=parseInt(req.params.id);
    const Book=BookStore.find(info=>info.id===req.body.id);// bookstore sein id ka access liya ek ek krke ayega
    Book.author=req.body.author;
    res.send("patch update")
})
app.put("/book",(req,res)=>{
    const Book=BookStore.find(info=>info.id===req.body.id);
    Book.author=req.body.author;
    Book.name=req.body.name;
    res.send("Changes put method sucessfully");
})
app.delete("/book/:id",(req,res)=>{
    const id=parseInt(req.params.id);//define id
    const index=BookStore.findIndex(info=>info.id===id)// ye jo id aata hai wo string ke formate mein aata hain
    BookStore.splice(index,1);
    res.send("Successfully deleted");


})

// app.use(express.json);
// app.get("/user",(req,res)=>{
   
//     res.send({"name":"aman","age":21})
// })

// app.post("/user",(req,res)=>{
//     console.log(req.body);
//    console.log("data is successfully saved");
//    res.send("data is successfully saved ");
// })
app.listen(4000,()=>{
    console.log("Listen port number 4000");
})
