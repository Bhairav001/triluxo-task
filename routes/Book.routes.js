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
    const bookID = req.params.id;
    const payload = (req.body)
    try {
        if(bookID){
            const book = await BookModel.findById({_id:bookID});
            if (book) {
                res.send(book);
                console.log({ msg: "Book found by ID" });
            } else {
                res.status(404).json({ msg: "Book not found" });
            }
        }else{
            const books = await BookModel.find(payload);
            res.send(books);
            console.log({msg:"all books"})
        }
    } catch (error) {
        console.log({error:error.message})
    }
})


bookRoutes.put("/update/:id",async(req,res)=>{
    const payload = req.body;
    const bookID = req.params.id;
    try {
        await BookModel.findByIdAndUpdate({_id:bookID},payload);
        res.send({msg:"book updated sucessfully"})
        console.log({msg:"book updated sucessfully"})
    } catch (error) {
        console.log(error.message)
    }
})

bookRoutes.delete("/delete/:id",async(req,res)=>{
    
    const payload = req.body;
    const bookID = req.params.id;
    try {
        await BookModel.findByIdAndDelete({_id:bookID},payload);
        res.send({msg:"book deleted sucessfully"})
        console.log({msg:"book deleted sucessfully"})
    } catch (error) {
        console.log(error.message)
    }
})

module.exports={
    bookRoutes
}