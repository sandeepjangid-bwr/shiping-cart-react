const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/shopcart?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Sucessfully")
    })
}

module.exports = connectMongo;