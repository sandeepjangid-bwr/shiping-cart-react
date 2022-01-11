const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');

//Route 1 : Show Product Details using : Get : http://localhost:5000/api/product/showproduct
router.get('/showproduct', fetchuser, async (req, res) => {
    try {
        const product = await Product.find({ user: req.user.id })
        res.json(product); 
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
})

//Route 2 : Add Product using : Post : http://localhost:5000/api/product/addproduct
router.post('/addproduct', fetchuser, async (req, res) => {
    try {
        const { productname, description, price } = req.body

        const product = new Product({
            productname, description, price, user: req.user.id
        })

        const setProduct = await product.save();

        res.json(setProduct);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
})


module.exports = router;