const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    bookName:String,
    author:String,
    price:String
})

const BookModel = mongoose.model("book", bookSchema);


module.exports={
    BookModel
}