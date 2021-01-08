const Router = require("express")
const User = require("./../models/User")
const router =  new Router()
const bcrypt = require("bcrypt")

router.post("/reg",async (req, res)=>{
  try{
    const {email, password} = req.body

    const candidate = await User.findOne({email})

    if(candidate){
      return res.status(400).json({message: "this user already exist"})
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const user = new User({email, hashPassword})
    await user.save()
    return res.json({message: "user was created"})
   
  }catch(e){
    console.log(e)
    res.send({message:"server error"})
  }
})

module.exports = router
