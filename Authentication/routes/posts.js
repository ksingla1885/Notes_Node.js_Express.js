
// PRIVATE ROUTE MAKING

const router = require('express').Router();
const User = require('../model/User');
const verify = require('./verifyToken');

router.get("/", verify, (req, res) => {

    res.send(req.user);
    User.findOne({_id: req.user})
    // res.json({
    //     posts:{
    //         title: "My first post",
    //         message: "Random data that you can access only if you are logged in"
    //     }
    // })
})



module.exports = router;