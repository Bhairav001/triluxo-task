const express = require("express");

const bookRoutes = express.Router();



bookRoutes.post("/books",(req,res)=>{
    console.log({msg:"book added succesfully"})
})


bookRoutes.get("/",(req,res)=>{
    console.log({msg:"all books"})
})


bookRoutes.patch("/books/:id",(req,res)=>{
    console.log({msg:"book updated sucessfully"})
})

bookRoutes.delete("/books/:id",(req,res)=>{
    console.log({msg:"book deleted sucessfully"})
})

module.exports={
    bookRoutes
}