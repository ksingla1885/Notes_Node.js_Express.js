const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Getting all
router.get("/", async(req, res)=> {
    try {
        const users = await User.find();
        res.json(users)
    } catch (error) {
        res.status(500).json({message: error.message});  //500 internal server error
    }
})


// Getting one
router.get("/:id", getUser, (req, res)=> {
    res.json(res.user);
})


// Creating one
router.post("/", async (req, res)=>{
    const user = new User({
        name: req.body.name,
        subscriberToChannel: req.body.subscriberToChannel
    })

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);  //201 object created successfully
    } catch (error) {
        res.status(400).json({message: error.message}); //400 user fail to give all data
    }
})


// Updating one
router.patch("/:id", getUser, async (req, res)=> {
    if(req.body.name != null){
        res.user.name = req.body.name;
    }
    if(req.body.subscriberToChannel != null){
        res.user.subscriberToChannel = req.body.subscriberToChannel;
    }
    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})


// Deleting one
router.delete("/:id", getUser, async (req, res)=>{
    try {
        await res.user.remove();
        res.json({message: "Deleted user"});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
})



// Middleware function
async function getUser(req, res, next){
    let user;
    try {
        user = await user.findById(req.params.id);
        if(user == null){
            return res.status(404).json({message: "Cannot find user"})
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    res.user = user;
    next();
}

module.exports = router;