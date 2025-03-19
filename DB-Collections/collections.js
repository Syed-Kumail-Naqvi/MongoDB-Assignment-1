const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Syed-Kumail-Naqvi:kumailnaqvi123@cluster0.xsida.mongodb.net');

// SCHEMA FOR PRODUCTS
const productSchema = mongoose.Schema({
    
    brand : String,
    pName : String,
    pPrice : Number,
    pColor : String,

});

// SCHEMA FOR BRANDS
const brandSchema = mongoose.Schema({
    brand : String,
    owner : String,
    email : String
})

let Brands = mongoose.model('Brands:', brandSchema)
let Products = mongoose.model('Products:', productSchema);

module.exports = {Products, Brands};