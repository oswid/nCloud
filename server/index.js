const express = require("express")
const mongoose = require("mongoose")
const config = require("config")



const PORT = config.get("PORT")

const app = express()


const start = async () =>{
  try{
    await mongoose.connect(config.get("dbUrl"),
                           {useNewUrlParser: true,
                           useUnifiedTopology: true})
    
    app.listen(PORT, ()=>{
      console.log("server started on port:  ", PORT)
    })    
  }catch(e){
    console.log(e)
  }
}

start()
