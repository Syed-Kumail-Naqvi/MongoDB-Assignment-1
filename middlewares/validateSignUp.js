const mongoose = require('mongoose')

 let schema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    address : String,
 })

 let model = mongoose.model('Users', schema)


module.exports = {model}