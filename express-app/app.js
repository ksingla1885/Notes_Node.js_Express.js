import express from 'express';
import { connectDB } from './config/db.js';
import { Person } from './models/person.js';


// import mongoose from 'mongoose';
// import multer from 'multer';
// import { storage } from './config/multer.js';
// import router from './routes.js'; 



// const upload = multer({
//     storage,
//     limits:{
//         filesize: 1024 * 1024 * 1 // 1 MB
//     }
// });
const app = express();
const port = 9001;



app.use("/public", express.static("public"));
app.use("/images", express.static("images"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json);

//app.use(upload.array()); //easily parse the multiform data
// app.use(upload.single("image"));


await connectDB();
app.use(express.json());


app.post("/person", async (req, res) => {
    try {
        const { email, name, age } = req.body;
        const newPerson = new Person({
            name, age, email
        })
        await newPerson.save();
        console.log("Person data:", newPerson);

        res.send("Person data received ✅");
    } catch (error) {
        res.send(error.message);
    }
})



//updating data
app.put("/person", async (req, res) => {
    const { email } = req.body;
    const personData = await Person.findOneAndUpdate({ age: 30 });

    res.send("Person data updated ✅");
})


//deleting data
app.delete("/person/:id", async (req, res) => {
    const { id } = req.params;
    await Person.findByIdAndDelete(id);
    res.send("User deleted");
})


app.get("/", (req, res) => {
    res.send("Hello Ketan");
})


// app.post("/form", (req, res) => {
//     console.log("Form data:", req.body);
//     res.send("Form submitted successfully ✅");
// });


// set ejs as view engine
// app.set("view engine", "ejs");

// app.get("/", (req, res)=>{
//     const userName = "Ketan Singla";
//     res.render("index", {userName});
// })

// app.use("/welcome", (req, res, next)=>{
//     console.log("A new received at" + Date.now());
//     next();
// })


// app.use((req,res,next) => {
//     console.log("Start");
//     res.on("finish", () => {
//         console.log("End");
//     })
//     next();
// })




// app.get("/error", (req,res) =>{
//     throw new Error("This is a forced tested error");
// })


// app.use((err,req,res,next) => {
//     console.error(err.message);
//     res.status(500).send("Internal Server Error")
// })

// it acts as middleware as well as route handler
// app.get("/welcome", (req, res) =>{
//     res.send("Welcome to express");
// })

// app.get("/things/:name/:id([0-9]){5}", (req, res) =>{
//     const {name, id} = req.params;
//     res.json({
//         id, name
//     });
// })

// catch all invalid routes
// app.get("*", (req, res) =>{
//     res.status(404).send("Invalid route")
// })

// app.use("/user", router);

// app.post("/users", express.json(), (req, res) =>{
//     const {name, email} = req.body;
//     res.json({
//         message: `User ${name} with ${email} created successfully`
//     })
// })


// app.put("/users/:id", express.json(), (req, res) =>{
//     const userId = req.params.id;
//     const {name, email} = req.body;
//     res.json({
//         message: `User ${userId} updated successfully with name ${name} and email ${email}`
//     })
// })



// app.delete("/users/:id", (req, res) =>{
//     const userId = req.params.id;
//     res.json({
//         message: `User ${userId} deleted successfully`
//     })
// })






app.listen(port, () => {
    console.log(`Server is hitting on http://localhost:${port}`);
})