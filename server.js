const express = require("express")
const mongoose = require('mongoose');
const app = express();

const PORT =3000;

app.use(express.json());

const connectDB = require('./config/dbconfig');

const hotelRouter = require("./routes/hotel.router");

const categoriesRouter = require('./routes/categories.router');

const hotelDbRouter= require('./routes/hotelDataImport.router');

const hotelCategoryRouter = require("./routes/hotelCategoryDataImport.route")

connectDB();

app.get("/",(req,res)=>{
    res.send("hello users")
})

app.use('/api/hotels',hotelRouter);

app.use('/api/hoteldata',hotelDbRouter);

app.use('/api/categorydata',hotelCategoryRouter);

app.use('/api/categories',categoriesRouter);


mongoose.connection.once("open",()=>{
    console.log('connected to DB');
    app.listen(process.env.PORT || PORT,()=>{
        console.log("server is running")
    })
    
})

