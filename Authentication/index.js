const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");




// IMPORT ROUTES
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');


// CONNECT TO DB
dotenv.config();

async function connectDB() {
    try {
        await mongoose.connect(process.env.CONNECT_DB);
        console.log('✅ Connected to DB');
    } catch (err) {
        console.error('❌ Error connecting to DB:', err.message);
    }
}
connectDB();


//MIDDLEWARE
app.use(express.json());


// ROUTES MIDDLEWARE
app.use("/api/user", authRoute);
app.use("/api/post", postRoute);



//SERVER HITTING POINT
const port = 5000;
app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
