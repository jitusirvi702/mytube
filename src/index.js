import dotenv from "dotenv"

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express"
dotenv.config({
    path: './env'
})
const app = express()

;(async () => {
    try {
        // Connect to the database
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
           console.log("APP is listening") 
        })
    }
    catch (error) {
        console.error(error);
        throw error
    }
})
()
.then(() => {
    app.listen(process.env.PORT || 3000)
    console.log(`server is running at port : ${process.env.PORT}`)
})
.catch((err) =>{
    console.log("Connection is failed", err);
}) 