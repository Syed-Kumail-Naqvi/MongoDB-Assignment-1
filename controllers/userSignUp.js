const {model} = require('../middlewares/validateSignUp')
const signUp = async (req, res) => {
    let {name, email, password, address} = req.body

    try {
       let newUser = new model({
        name,
        email,
        password,
        address
       }
    )
    
    console.log("UserAddReturn", newUser);

     await userAdd.save()

     res.status(200).json({serverMessage : "SignUp SucessFull", user : userAdd})
    
    } catch (error) {
        console.log('error', error);
        
    }

}

module.exports = {signUp};