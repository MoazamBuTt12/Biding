const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    try{
        const {email, password, passwordVerify, firstName, lastName, 
            telephone, address, city, postalCode, country, references} = req.body;

        if ( !email || !password || !passwordVerify || !firstName || !lastName ||
            !telephone || !city || !postalCode || !address || !country)
            return res.status(400).send("Plz enter all fields.");
        
        if ( password.length < 6)
            return res.status(400).send("Plz enter a password more than 6 characters")

        if ( password !== passwordVerify)
            return res.status(400).send("Please enter the same passsword twice");
   
        const existUser = await User.findOne({ email });
        if ( existUser )
        return res.status(400).send("This email is already exist" );

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        console.log(passwordHash);

        const user = await User({ email, passwordHash, firstName, lastName, city,
        country, postalCode, address, references, telephone })
        user.save();
        console.log("User Registered: ", user);


    
        // login the user

        const token = jwt.sign({
            user: user._id,
        }, process.env.JWT_SECRET );
        console.log(token)

        res.cookie("token", token, {
          httpOnly: true,
        }).send();
    }

    catch(error){
        console.log(error);
        res.status(500).send("Error in Validation")
    }
});

router.post('/login', async (req, res) => {
    try{
        const { email, password } = req.body;

        if ( !email || !password)
            return res.status(400).send("Plz enter all fields.");
            // return res.status(400).json({errorMessage: "Plz enter all fields."});


        const existUser = await User.findOne({ email });
        if(!existUser)
            return res.status(400).send("Wrong Email and password.")
        
        const comparePassword = await bcrypt.compare(password, existUser.passwordHash);
        if(!comparePassword)
            return res.status(400).send("Wrong Email and password.")

        const token = jwt.sign(
            {
                user: existUser._id,
            }, process.env.JWT_SECRET
        ); console.log(token)

        res.cookie('token', token, {
            httpOnly: true,
        }).send();

    }
    catch(error){
        console.log(error)
        res.status(500).send("Error in Login")
    }
});


router.get('/logout', (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0)
    }).send();
});


router.get('/loggedIn', (req, res) => {
    try {
        const token = req.cookies.token;
        if(!token) return res.json(false);
        jwt.verify(token, process.env.JWT_SECRET);

        res.send(true);
    } catch (error) {
        console.log(error);
        res.json(503);
    }
})


module.exports = router;
