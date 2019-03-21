const express=require('express');
const route=express.Router();
const{
    Vendors
}=require('../db');

route.get('/',async(req,res)=>{


    const vendors= await Vendors.findAll();
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
