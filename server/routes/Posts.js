const express = require("express")
const router= express.Router()
const {Users}= require("../models")
router.get("/", async(req,res)=>{
    
    const listofpost= await  Users.findAll()
    res.json(listofpost)
    

})

router.post("/", async(req, res) =>{

    const post= req.body
    await Users.create(post)
    res.json(post)
})



// router.post()/

module.exports=router