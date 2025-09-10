const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DB_URL, {useNewUrlParser:true});
const db = mongoose.connection;
db.once("error", (error)=> {
    console.log(error);
})
db.once("open", ()=> {
    console.log("Database connected");
})



app.use(express.json());
const userRouter = require("./routes/user");
app.use("/users", userRouter);

app.listen(3000, ()=> {
    console.log("Server is running on 3000");
})