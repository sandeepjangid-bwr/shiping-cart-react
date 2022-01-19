const connectMongo = require('./db')
const express = require('express')
var cors = require('cors')

connectMongo();
const app = express()
app.use(cors())
const port = 5000

app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/product', require('./routes/product'))
app.use('/api/cart', require('./routes/cart'))

app.listen(port,() => {
    console.log(`Shop Cart Running on http://localhost:${port}`)
})