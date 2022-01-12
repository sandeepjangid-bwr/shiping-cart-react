const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');


// Route 1 : Add Products to Cart Using : Post http://localhost:5000/api/cart/addcart
router.post('/addcart', fetchuser, async (req, res) => {
    try {

        
        const cart = new Cart({
            user: req.user.id
        })

        res.send(cart)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
})



module.exports = router;