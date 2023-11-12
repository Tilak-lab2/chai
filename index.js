// require('dotenv').config()
import dotenv from "dotenv"
import mongoose from "mongoose";
import db from "./db/mongoose.js"
 import { DB_NAME } from "./constants.js";



// {async()=>{
//     try {
//      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log("Connected");
        
//     } catch (error) {
//         console.error("error",error)
//         throw error
//     }
// }}{}