const express = require("express");
const router = express.Router();
const Contact=require("../models/Contacts")

router.post("/add",async(req,res)=>{
    const{name,email,phone}=req.body
    try{
const newContact= new Contact({name,email,phone})
const contact=await newContact.save()
res.send({msg:"contact added",contact})
    }
    catch(error){
        console.log(error)

    }
})
module.exports=router