const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const { ResultWithContext } = require('express-validator/src/chain');


// Route 1 : Add Products to Cart Using : Post http://localhost:5000/api/cart/addcart/:id
router.post('/addcart/:id', fetchuser, async (req, res) => {
   try {
      const product = await Product.findById(req.params.id);

      if (!product) { return res.status(404).send("Not Found") }

      if (product.user.toString() !== req.user.id) {
         return res.status(401).send("Access Denied")
      }

      const newProduct = new Cart({
         product_name: product.productname, productid: product.id, price: product.price, user: req.user.id
      })

      const setProduct = await newProduct.save();

      res.json(setProduct);
   } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured")
   }
})

// Route 2 : show Cart Items Using : Get http://localhost:5000/api/cart/cartitem
router.get('/cartitem/', fetchuser, async (req, res) => {
   try {
      const product = await Cart.find({ user: req.user.id })
      res.json(product);
   } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured")
   }
})

// Route 2 : show Cart Items Using : Get http://localhost:5000/api/cart/deletecartitem/:id
router.delete('/deletecartitem/:id', fetchuser, async (req, res) => {
   try {
      let product = await Cart.findById(req.params.id);

      if (!product) { return res.status(404).send("Not Found") }

      if (product.user.toString() !== req.user.id) {
         return res.status(401).send("Access Denied")
      }

      product = await Cart.findByIdAndDelete(req.params.id)
      res.send("Success Cart Item Deleted Succesfully")
   } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured")
   }

})


module.exports = router;