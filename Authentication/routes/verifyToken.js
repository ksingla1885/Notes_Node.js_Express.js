const jwt = require('jsonwebtoken');

module.exports = function (req, res, next){
    const token = req.header('auth-token');
    if(!token) return res.status(401).send("Access Denied");



    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);//if the user is verified then we will get user id here and save it in req.user
        req.user = verified;
        next(); //if verification is successful then it will call next function whatever it is
    } catch (error) {
        res.status(400).send("Invalid Token");
    }
}