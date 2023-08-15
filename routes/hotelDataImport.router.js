const express = require('express');

const Hotel = require('../model/hotel.model');

const hotels =require('../database/hotels');

const hotelDbRouter= express.Router();


hotelDbRouter.route("/").
post( async(req,res)=>{

    try{
       const hotelInDb = await Hotel.insertMany(hotels.data)
       res.json(hotelInDb)    }
   catch(err){
    console.log(err);
    res.json({message:"Hotel Db can't be added"})
   }

})

module.exports = hotelDbRouter;