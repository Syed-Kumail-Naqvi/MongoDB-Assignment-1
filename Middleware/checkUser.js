const { Brands } = require("../DB-Collections/collections");

const checker = async (req, res, next) => {

  const { email, owner, brand } = req.body;

  if (!email || !brand || !owner) {
    return res.status(400).json("[Brand, Email & Owner] Is Required!!");
  }

  if (email) {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const isValid = regex.test(email);

    if (!isValid) {
      return res.status(402).json("Email Address is Invalid");
    }
  }

  try {
    let allBrands = await Brands.find();

    if (allBrands.length < 1) {

      let myBrand = await Brands.create({
        brand,
        email,
        owner,
      });

      console.log(myBrand);
      console.log('Congratulations! On Creating New Brand');
      req.yourStatus = `Congratulation! ${owner} You Created a New Brand`;

      next();

    } else {

      var brandIs = 'new';
      var emailIs = 'new';

        allBrands.forEach((i)=> {

            if(i.email == email){
                emailIs = 'old';
            } 

            if(i.brand == brand) {
                brandIs = 'old';
            }             
        })
    }

    console.log("Brand Is:", brandIs);
    console.log("Email Is:", emailIs);

    if (emailIs == 'new' && brandIs == 'new') {
      let myBrand = await Brands.create({
        brand,
        email,
        owner,
      });

      console.log(myBrand);
      console.log('Congratulation On Your New Brand');
      req.yourStatus = `Congratulation! ${owner} You Created a New Brand!!`;

      next();
    } else if (emailIs == 'old' && brandIs == 'new') {
      let myBrand = await Brands.create({
        brand,
        email,
        owner,
      });

      console.log(myBrand);
      console.log('congratulation on Creating Another Brand');
      req.yourStatus = `Congratulation! ${owner} You Created Another Brand!`;

      next();
    } else if (emailIs == 'old' && brandIs == 'old') {
      req.yourStatus = `${owner}, You Are Using Your Old Brand!`;
      next();
    }else if (emailIs == 'new' && brandIs == 'old') {
        return res.status(402).json(`${owner} This Brand Name is Already in Use!`);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { checker };