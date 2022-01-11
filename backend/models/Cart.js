const mongoose = require('mongoose')
const { Schema } = mongoose;

const CartSchema = new Schema({
    proid: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    discount: {
        type: Number
    },
    quantity: {
        type: Number,
        default: 1
    },
    date: {
        type: Date,
    }
});

module.exports = mongoose.model('cart',CartSchema);