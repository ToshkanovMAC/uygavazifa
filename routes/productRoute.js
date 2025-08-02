const express = require('express')
const Product = require('./../models/product')
const { model } = require('mongoose')
const fltrNpagn = require('./../filter_pagination')

const router = express.Router()

router.get("/", async(req, res)=>{
    let filter = fltrNpagn(req.query)
    try{
    const data = await Product.find(filter)
    res.json(data)
    }
    catch(e){res.status(400).json(e.message);}
})

router.post("/", async(req, res)=>{
    const data = req.body
    try{
        const newPrd = new Product(data)
        await newPrd.save()
        res.json(data)
    }
    catch(e){res.status(400).json(e)}
})

module.exports = router
//joi +filter + pagination