import mongoose from "mongoose";

export const connectDB = async () => {
    const MONGODB_URL = "mongodb+srv://chillmodeon123:restapi@cluster0.ov5ejxn.mongodb.net/express-app";

    await mongoose.connect(MONGODB_URL).then(() => {
        console.log("Connected to MongoDB");
    });
}