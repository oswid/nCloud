const Router = require("express")
const User = require("./../models/User")
const router =  new Router()

router.post("/reg",async (req, res)=>{
  try{
    console.log(req.body)
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
