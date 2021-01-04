const express = require("express")
const mongoose = require("mongoose")
const port = 5000

const app = express()

const start = () =>{
  try{
    app.listen(port, ()=>{
      console.log("server started on port:  ", port)
    })    
  }catch(e){
    console.log(e)
  }
}

start()
