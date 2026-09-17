const mongoose = require('mongoose');
async function main(){//cluster sein connect kiya
await mongoose.connect(process.env.mongo_url)//yaha pr Bookstore name ka database automaticaly create ho jayega
 // code write here 
}
module.exports=main;