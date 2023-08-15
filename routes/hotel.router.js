const express = require('express');

const hotelRouter = express.Router();

const hotels = require("../database/hotels")
hotelRouter.route("/").
get((req,res)=>{
    res.json(hotels.data)
})

module.exports= hotelRouter;