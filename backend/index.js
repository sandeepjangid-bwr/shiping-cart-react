const connectMongo = require('./db')
const express = require('express')

connectMongo();
const app = express()
const port = 5000

app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/product', require('./routes/product'))

app.listen(port,() => {
    console.log(`Shop Cart Running on http://localhost:${port}`)
})