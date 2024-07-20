const mongoose = require("mongoose");

const bookSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    Title:String
})
const Book = mongoose.model("Book",bookSchema);
module.exports = Book;
