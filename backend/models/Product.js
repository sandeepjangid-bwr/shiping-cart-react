const mongoose = require('mongoose')
const { Schema } = mongoose;

const ProductSchema = new Schema({
    proname: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    disprice: {
        type: Number
    }
});

module.exports = mongoose.model('product',ProductSchema);