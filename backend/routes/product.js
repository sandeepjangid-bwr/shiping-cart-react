const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { body, validationResult } = require('express-validator');

//Route 1 : Show Product Details using : Get : http://localhost:5000/api/product/showproduct
router.get('/showproduct', async (req, res) => {
    try {
        const product = await Product.find({})
        res.json(product);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
})

//Route 2 : Add Product using : Post : http://localhost:5000/api/product/addproduct
router.post('/addproduct', async (req, res) => {
    try {
        const { productname, description, price } = req.body

        const product = new Product({
            productname, description, price
        })

        const setProduct = await product.save();

        res.json(setProduct);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
})

//Route 3 : Update Product using : Put : http://localhost:5000/api/product/updateproduct/:id
router.put('/updateproduct/:id', async (req, res) => {
    const { productname, description, price } = req.body;

    try {
        const newProduct = {};

        if (productname) { newProduct.productname = productname }
        if (description) { newProduct.description = description }
        if (price) { newProduct.price = price }

        let product = await Product.findById(req.params.id)

        if (!product) { return res.status(404).send("Not Found") }

        product = await Product.findByIdAndUpdate(req.params.id, { $set: newProduct }, { new: true })
        res.json({ product });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
})

//Route 4 : Delete Product using : Delete : http://localhost:5000/api/product/deleteproduct/:id
router.delete('/deleteproduct/:id', async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);

        if (!product) { return res.status(404).send("Not Found") }

        product = await Product.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Product Deleted Successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
})

module.exports = router;