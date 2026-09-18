require("dotenv").config();
console.log(process.env.PORT);
console.log(process.env.MONGO_URI);

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log("MongoDB connection failed");
        console.log(err);
    });
const User = require("./models/User");

async function startServer() {

    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI is missing");
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    const user = new User({
        name: "Aman",
        email: "aman@gmail.com",
        age: 22
    });
    await user.save();

    console.log(user.getProfile());

    const existingUser = await User.findByEmail("aman@gmail.com");

    console.log(existingUser);
}

startServer()
    .catch(err => {
        console.error(err);
    });