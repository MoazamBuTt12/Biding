const mongoose = require('mongoose');
const { Schema } = mongoose;


const bidSchema = new mongoose.Schema({
    bidd: {
        type: String,
        required: true,
    },
})

const Bidding = mongoose.model('bid', bidSchema);
module.exports = Bidding;

