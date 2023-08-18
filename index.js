const dotenv = require("dotenv");
const connectDB = require("./config/dbconfig");

dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const Port = 8080;

const cors = require("cors");

app.use(cors());

app.use(express.json());


connectDB();


const hotelRouter = require("./routes/hotel.router");

const categoriesRouter = require("./routes/categories.router");

const hotelDbRouter = require("./routes/hotelDataImport.router");

const hotelCategoryRouter = require("./routes/hotelCategoryDataImport.route");

const singleHotelRouter = require("./routes/singleHotel.router");

const { signUpRouter, logInRouter } = require("./routes/auth.router");

const wishlistRouter = require("./routes/wishlist.router");


app.get("/", (req, res) => {
  res.send("hello users");
});

app.use("/api/hotels", hotelRouter);

app.use("/api/hoteldata", hotelDbRouter);

app.use("/api/categorydata", hotelCategoryRouter);

app.use("/api/categories", categoriesRouter);

app.use("/api/hotels", singleHotelRouter);

app.use("/auth", signUpRouter);

app.use("/auth", logInRouter);

app.use("/api/wishlist", wishlistRouter);

mongoose.connection.once("open", ()=> {
    console.log("connected to DB");
    app.listen(process.env.PORT || Port, ()=> {
        console.log("Server is running")
    })
})