
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const connectDB = require("./config/dbconfig");


const hotelRouter = require("./routes/hotel.router");

const categoriesRouter = require("./routes/categories.router");

const hotelDbRouter = require("./routes/hotelDataImport.router");

const hotelCategoryRouter = require("./routes/hotelCategoryDataImport.route");

const singleHotelRouter = require("./routes/singleHotel.router");

const { signUpRouter, logInRouter } = require("./routes/auth.router");

const wishlistRouter = require("./routes/wishlist.router");

const app = express();



app.use(cors());

app.use(express.json());

connectDB();

const PORT = 3500;

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


mongoose.connection.once("open", () => {
  console.log("Connected to DB");
  app.listen(process.env.PORT || PORT, () => {
    console.log("Server is Up and Running");
  });
});