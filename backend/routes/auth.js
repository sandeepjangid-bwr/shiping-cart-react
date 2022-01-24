const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')
const JWT_SECRET = 'lkjhgfdsa'

// Route: 1 / Createing a User Using : Post : http://localhost:5000/api/auth/createuser
router.post('/signup', [
    body('name', "Please Enter a Valid Name"),
    body('phone', "Please Enter 10 Digit Phone No.").isLength({ min: 10 }),
    body('email', "Please Enter a Valid Email Address").isEmail(),
    body('password', "Password must be Atleast 6 character").isLength({ min: 6 })
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Already this email Exists use another one" })
        }

        const salt = await bcrypt.genSalt(10);
        secPass = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            password: secPass
        });

        const data = {
            user: {
                id: user.id
            }
        }
        console.log(data);

        const authToken = jwt.sign(data, JWT_SECRET);

        res.json({ authToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }

})

// Route 2 : Login the User Using : Post : http://localhost:5000/api/auth/login
router.post('/login', [
    body('email', "Please Enter a Valid Email").isEmail(),
    body('password', "Please connet be Blank").exists()
], async (req, res) => {

    let success = false;
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            success = false;
            return res.status(400).json({ success, "error": "User with this Email doesn't Exist" })
        }

        const passwordCompare = await bcrypt.compare(password, user.password);

        if (!passwordCompare) {
            success = false;
            return res.status(400).json({success, "error": "Please Enter Currect Email or Password" })
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);

        success = true;
        res.json({ success, authToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
})

// Route 3 : Showing the User Data Using : Post : http://localhost:5000/api/auth/getuser
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id
        const user = await User.findById(userId).select('-password')
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
      }
})

module.exports = router;