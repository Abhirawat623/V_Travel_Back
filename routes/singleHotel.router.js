const express= require("express");

const Hotel = require('../model/hotel.model');

const singleHotelRouter = express.Router();


singleHotelRouter.route('/:id').
get( async (req,res)=>{
try{
 const { id }= req.params;
 const singleHotel= await Hotel.findById(id);
 res.json(singleHotel)
}
catch(err){
    res.json(404),json({message:"No Hotel Found"})
}
})

module.exports= singleHotelRouter;