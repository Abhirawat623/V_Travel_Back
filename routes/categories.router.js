const express= require("express");

const categoriesRouter = express.Router();

const Category = require('../model/category.model');

categoriesRouter.route("/").
get( async (req,res)=>{

try{
    const categories = await Category.find({});
     res.json(categories)
}

catch(err){
    res.status(404).json({message:"Cant Find Category"})

}

})

module.exports = categoriesRouter; 