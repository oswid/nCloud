const express = require("express")
const User = require("./../models/User.js")
const router = express.Router()


router.post("registration",async (req, res)=>{
  try{
    const {email, password} = req.body

    const candidate = await User.findOne({email})

    if(candidate){
      return res.status(400).json({message: "this user already exist"})
    }

    const user = new User({email, password})
    await user.save()
    return res.json({message: "user was created"})
   
  }catch(e){
    console.log(e)
    res.send({message:"server error"})
  }
})

module.exports = router
