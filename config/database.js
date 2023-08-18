import mongoose, { mongo } from "mongoose";

mongoose.connect("mongodb+srv://User:TlIBhd7QvQuwXHnA@cluster0.yeuizg4.mongodb.net/")
.then(()=> {
    console.log("Database connected");
})
.catch(()=> {
    console.log("Database connection failed");
})