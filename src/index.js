//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server started on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGODB db connection failed!!",err);
})



















/*import express from "express"
const app = express()

(async () => {
    try{        //jab bhi database se connect kro, try and catch lagao
        await mongoose.connect('${process.env.MONGO_URI}')
        app.on("error",()  => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT,() => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    }catch (error){
        console.log("Error:" , error)
        throw error
    }
}) ()*/