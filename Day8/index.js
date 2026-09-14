const express=require("express");
const app=express();
const{Auth}=require("./middleware/auth")
app.use(express.json());// json file ko java script ke object mein convert kiya
const foodItems = [
  { id: 1, foodname: "Pizza", category: "Fast Food", price: 250 },
  { id: 2, foodname: "Burger", category: "Fast Food", price: 120 },
  { id: 3, foodname: "Pasta", category: "Italian", price: 200 },
  { id: 4, foodname: "Biryani", category: "Indian", price: 180 },
  { id: 5, foodname: "Dosa", category: "South Indian", price: 90 },
  { id: 6, foodname: "Paneer Tikka", category: "Indian", price: 220 },
  { id: 7, foodname: "Fried Rice", category: "Chinese", price: 150 },
  { id: 8, foodname: "Noodles", category: "Chinese", price: 140 },
  { id: 9, foodname: "Sandwich", category: "Snack", price: 80 },
  { id: 10, foodname: "Ice Cream", category: "Dessert", price: 100 },
  { id: 11, foodname: "Momos", category: "Street Food", price: 70 },
  { id: 12, foodname: "Chole Bhature", category: "Indian", price: 110 },
  { id: 13, foodname: "Samosa", category: "Snack", price: 30 },
  { id: 14, foodname: "Milkshake", category: "Beverage", price: 130 },
  { id: 15, foodname: "Coffee", category: "Beverage", price: 60 }
];
const AddToCart=[];
// user ka jo bhi food add hoga wo idhar jayega
app.get("/food",(req,res)=>{
    res.status(200).send(foodItems);
})
app.post("/admin",(req,res)=>{
    foodItems.push(req.body);
    res.status(201).send("Item Added Successfully");
}
)
app.delete("/admin/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = foodItems.findIndex(item => item.id === id);
    if (index === -1) {
        return res.status(404).send("Item not found");
    }

    foodItems.splice(index, 1);

    res.send("Item deleted successfully");
});
//Authentication admin here 
app.use("/admin",Auth) 
app.patch("/admin/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const item = foodItems.find(item => item.id === id);// id ka access liya selectkiya

    if (!item) {
        return res.status(404).send("Item not found");
    }

    // 🔥 Update only given fields
    Object.assign(item, req.body);

    res.send("Item updated successfully");
});

app.listen(4000,()=>{
    console.log("listen port no at 4000 ");
})