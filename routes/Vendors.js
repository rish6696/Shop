const express=require('express');
const route=express.Router();
const{
    Vendors,Products
}=require('../db');

route.get('/',async(req,res)=>{
    let includes = []
    if (req.query.include === 'products') {
      includes.push({
        model: Products,
        attributes: ['id', 'name']
      })
    }


    const vendors= await Vendors.findAll({
        include:includes
    });
    res.send(vendors);



})

route.post('/',async (req,res)=>{


      
     const newvendor = await Vendors.create({
          name:req.body.name
      })
      console.log("got back")
    
    res.send(newvendor)
    console.log("send ventor");

})

module.exports=route
