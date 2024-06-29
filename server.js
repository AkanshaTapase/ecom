import express from "express";

import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRouter.js"
import cors from "cors";
dotenv.config();

//database config
connectDB();

//rest object
const app=express()


//middleware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))



app.use('/api/v1/auth',authRoutes);
//rest api

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to the server</h1>");
});

//port

const PORT=process.env.PORT|| 8080;
//run listen

app.listen(PORT,()=>{
    console.log(`Server is running in mode ${process.env.DEV_MODE} on port ${PORT}`)
})