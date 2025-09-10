import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type: String,
        unique:true,
        required:true
    },
    userOrders:{
        type:Object,
        default:{}
    }
}, {timestamps:true, minimize:false})    //minimize is used if we want to send any object that is to be empty by default

export const Person = mongoose.model("Person", personSchema);