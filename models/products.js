const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Syed-Kumail-Naqvi:kumailnaqvi123@cluster0.xsida.mongodb.net')

let productSchema = mongoose.Schema({
    productName: String,
    productPrice: Number,
    productColor: String
});

let Products = mongoose.model("Products", productSchema)
module.exports = {Products};