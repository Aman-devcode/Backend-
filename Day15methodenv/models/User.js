const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    age: Number
});

userSchema.methods.getProfile = function () {
    return {
        name: this.name,
        email: this.email,
        age: this.age
    };
};

userSchema.statics.findByEmail = function (email) {
    return this.findOne({ email });
};

const User = mongoose.model("User", userSchema);

module.exports = User;