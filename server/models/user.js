const mongoose = require('mongoose')
const { Schema } = mongoose;

 
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        // unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    telephone: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    postalCode: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    references: {
        type: String,
        required: true,
    },
}, {timestamps: true});

const User = mongoose.model('user', userSchema);
module.exports = User;
