const express=require('express');
const route=express.Router();
const{
    Products
}=require('../db');

route.get('/',async(req,res)=>{

    const products=await Products.findAll();
    res.send(products);


})


route.post('/', async (req, res) => {
    console.log(Products);

    const newProd = await Products.create({
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
      vendorId: req.body.vendorId,
      
    })
  
    res.status(201).send(newProd)
  
  })

module.exports=route;
