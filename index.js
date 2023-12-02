const express = require("express");

const app = express()

app.get("/",(req,res)=>{
    res.send({msg:"Book Library Service"})
})



app.listen(8080,()=>{
    console.log({msg:"server is running on port 8080"})
})