const Router = require("express")
const User = require("./../models/User")
const router =  new Router()
const bcrypt = require("bcryptjs")
const {check, validationResult} = require("express-validator")
const jwt = require("jsonwebtoken")
const config = require("config")

router.post("/reg",
            [
              check("email", "uncorrect e-mail").isEmail(),
              check("password", "password must be longer then 4").isLength({min:4})
            ],
async (req, res)=>{
  try{
    const errors = validationResult(req)
    if (!errors.isEmpty()){
      res.status(400).json({message: "uncorrect request "})
    }
    const {email, password} = req.body

    const candidate = await User.findOne({email})

    if(candidate){
      return res.status(400).json({message: "this user already exist"})
    }
    const hashPassword = await bcrypt.hash(password, 4)
    const user = new User({email,password:hashPassword})
    await user.save()
    return res.json({message: "user was created"})
   
  }catch(e){
    console.log(e)
    res.send({message:"server error"})
  }
})

router.post("/login",
            [
              check("email", "uncorrect e-mail").isEmail(),
              check("password", "password must be longer then 4").isLength({min:4})
            ],
async (req, res)=>{
  try{
    const errors = validationResult(req)
    if (!errors.isEmpty()){
      res.status(400).json({message: "uncorrect request "})
    }
    const {email, password} = req.body

    const user = await User.findOne({email})
    const isPassValid = bcrypt.compareSync(password, user.password)
    if (!isPassValid){
      return res.status(400).json({message: "invalid password"})
    }
    const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})    
    return res.json({
      token,
        user: {
            id: user.id,
            email: email,
            diskSpace: user.diskSpace,
            avatar: user.avatar
        }})
   
  }catch(e){
    console.log(e)
    res.send({message:"server error"})
  }
})
module.exports = router

