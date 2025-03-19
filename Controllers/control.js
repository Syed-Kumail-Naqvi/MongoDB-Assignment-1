const {Products, Brands} = require('../DB-Collections/collections');
console.log('Products', Products);

// STORING DATA IN MONGO DB

const storeData = async (req,res)=> {

    console.log(req.body);

    const {brand, pName, pPrice, pColor} = req.body;

    if (!brand || !pName || !pPrice || !pColor) {
        return res.status(403).json('Fill all Required Details!')
    }

    try {

        const product = await Products.create({

            brand,
            pName,
            pColor, 
            pPrice,

        })

        console.log('Product Added Successfully!!');
        console.log(product);
        res.status(200).json({
            
            yourStatus : req.yourStatus,
            message : 'Product Added Successfully!!',
            details : product 
        })

    } catch (err) {

        console.log(err);
        res.status(404).json(err.errors)
    }
    
}

// FOR GETTING ALL THE PRODUCTS
const getProducts = async (req,res) => {


    try{

        let data = await Products.find();

        console.log(data);
    
        res.status(200).json({
            Message : 'All Product data',
            Products : data,
            
        })

    }catch(err) {
        console.log(err);
        res.status(403).json('Product Not Found!')
    }
}

// FOR GETTING ALL THE BRANDS
const getBrands = async (req,res) => {

    try{

        let data = await Brands.find();

        console.log(data);
    
        res.status(200).json({
            message : 'All Brands',
            brands : data,
            
        })

    }
    
    catch(err) {
        console.log(err);
        res.status(403).json('Brand not found')
    }
}

module.exports = {storeData,getProducts,getBrands}