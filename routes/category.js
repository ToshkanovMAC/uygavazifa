const express = require('express')
const Category = require('./../models/category')
const { model } = require('mongoose')
const fltrNpagn = require('./../filter_pagination')

const router = express.Router()

router.get("/", async(req, res)=>{
    let filter = fltrNpagn(req.params)
    console.log(filter)
    try{
    const data = await Category.find()
    res.json(data)
    }
    catch(e){res.status(400).json(e.message);}
})

router.post("/", async(req, res)=>{
    const data = req.body
    try{
        const newPrd = new Category(data)
        await newPrd.save()
        res.json(data)
    }
    catch(e){res.status(400).json(e)}
})

module.exports = router