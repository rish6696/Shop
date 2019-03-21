const express=require('express');
const route=express.Router();

const{
    Users
}=require('../db')

route.get('/',async(req,res)=>{

 const users= await Users.findAll(); 
 res.send(users);

})

route.post('/',async (req,res)=>{
    try{

    const user=await Users.create({
        name:req.body.name,
        city:req.body.city
    })
    res.status(200).send(user)
   }
   catch(err)
   {
       res.status(400).send(
           {
               message:err.message


           }
       )
   }
})

module.exports=route;
