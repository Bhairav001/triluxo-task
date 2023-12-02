const express = require("express");
const { BookModel } = require("../model/Book.model");

const bookRoutes = express.Router();



bookRoutes.post("/createBook",async(req,res)=>{
    const payload = req.body;
    try {
        const book = new BookModel(payload);
        await book.save()
        console.log({msg:"book added succesfully"})
        res.send({msg:"book added succesfully"})
    } catch (error) {
        console.log({error:error.message})
    }
})


bookRoutes.get("/",async(req,res)=>{
    const payload = (req.body)
    try {
        const books = await BookModel.find(payload);
        res.send(books);
        console.log({msg:"all books"})
    } catch (error) {
        console.log({error:error.message})
    }
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