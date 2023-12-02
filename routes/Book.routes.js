const express = require("express");

const bookRoutes = express.Router();



bookRoutes.post("/createBook",(req,res)=>{
    console.log({msg:"book added succesfully"})
})


bookRoutes.get("/",(req,res)=>{
    console.log({msg:"all books"})
})


bookRoutes.patch("/update/:id",(req,res)=>{
    console.log({msg:"book updated sucessfully"})
})

bookRoutes.delete("/delete/:id",(req,res)=>{
    console.log({msg:"book deleted sucessfully"})
})

module.exports={
    bookRoutes
}