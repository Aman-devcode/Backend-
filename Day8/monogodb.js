// const url="mongodb+srv://Amanserver4555:aman@45550603@cluster0.sa1sqdf.mongodb.net/"
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
//user name(Amanserver4555),password(aman@45550603),custer(@cluster0.sa1sqdf.mongodb.net)
const url = 'mongodb+srv://Amanserver4555:aman%4045550603@cluster0.sa1sqdf.mongodb.net/';
const client = new MongoClient(url);//it is client jb bhi new keyword use hota hai to wo mujhe ek object deta hain
// here mongoclient is my class
// Database Name
const dbName = 'coderArmy';

async function main() {
  // Use connect method to connect to the server
  await client.connect();//database ke saath connect kiya
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());