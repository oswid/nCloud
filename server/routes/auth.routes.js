const Router = require("express")
const User = require("./../models/User")
const router =  new Router()
const bcrypt = require("bcryptjs")
const {check, validationResult} = require("express-validator")

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
    const hashPassword = await bcrypt.hash(password, 15)
    const user = new User({email,password:hashPassword})
    await user.save()
    return res.json({message: "user was created"})
   
  }catch(e){
    console.log(e)
    res.send({message:"server error"})
  }
})

module.exports = router

