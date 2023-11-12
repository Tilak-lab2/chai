import  express  from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
const app=express()
app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true,

    }
))
app.use(cookieParser())//To use users cookie and perform CRUD operation
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true}))//For getting the url data
app.use(express.static("public"))


export {app}