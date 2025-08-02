const express = require('express')
const mongoose = require('mongoose')
const productRouter = require('./routes/productRoute')
const categoryRouter = require("./routes/category")

const app = express()
mongoose.connect('mongodb://127.0.0.1:27017/crud')
.then(()=>{console.log('connected to db');})
.catch((e)=>{console.log(e);})

app.use(express.json())
app.use('/product', productRouter)
app.use('/category', categoryRouter)

app.listen(3000, ()=>{console.log('server started');})