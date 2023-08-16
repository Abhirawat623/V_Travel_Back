const express = require('express');

const Category = require('../model/category.model');

const categories =require('../database/categories');

const hotelCategoryRouter= express.Router();


hotelCategoryRouter.route("/").
post( async(req,res)=>{

    try{
       const hotelCategoryInDb = await Category.insertMany(categories.data)
       res.json(hotelCategoryInDb)    }
   catch(err){
    console.log(err);
    res.json({message:"Hotel Categories data can't be added"})
   }

})

module.exports = hotelCategoryRouter;