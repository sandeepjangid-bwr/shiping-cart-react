const mongoose = require('mongoose')
const { Schema } = mongoose;

const CartSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    product_name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('cart',CartSchema);