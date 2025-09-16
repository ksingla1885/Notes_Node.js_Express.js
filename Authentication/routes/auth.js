const router = require('express').Router();
const bcrypt = require('bcryptjs');   // for password hashing
const jwt = require('jsonwebtoken');
const User = require("../model/User");
const { registerValidation, loginValidation } = require("../validation");


// REGISTER
router.post("/register", async (req, res) => {
    // VALIDATE DATA BEFORE CREATING A USER
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);


    // CHECK IF THE USER IS ALREADY IN THE DATABASE
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) {
        return res.status(400).send("Email already exists");
    }


    //HASHING THE PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // CREATE A NEW USER
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });

    try {
        const savedUser = await user.save();
        res.send({user: user._id});
    } catch (error) {
        res.status(400).send(error);
    }
});




// LOGIN
router.post("/login", async(req, res)=>{
    // VALIDATE DATA BEFORE LOGGING IN
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // CHECK IF THE EMAIL EXISTS
    const user = await User.findOne({email: req.body.email});   //user schema
    if(!user) return res.status(400).send("Email not found");

    // PASSWORD IS CORRECT
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send("Invalid Password");


    // CREATE AND ASSIGN A TOKEN
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);   //ketansecretekey123
    res.header('auth-token', token).send(token); //we are saving user id here in token to verify user

    return res.status(200).send("Logged in!");

})



module.exports = router;
