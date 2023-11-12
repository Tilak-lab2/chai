// require('dotenv').config()
import dotenv from "dotenv"
// import { config } from "dotenv";
import mongoose from "mongoose";
// import db from "./db/mongoose.js"
 import { DB_NAME } from "../constants.js";
import connectDB from "../db/mongoose.js";
import express  from "express";
// const express=require("express")
// const app=express()
// ;(async()=>{
//     try {
//      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log("Connected");
//         app.on("error",()=>{console.log("Error")})
//         app.listen(8000,()=>{
//             console.log("Listening");
//         })
//     } catch (error) {
//         console.error("error",error)
//         throw error
//     }
// })()
// config();
dotenv.config({
    path:'./env'
})
connectDB()