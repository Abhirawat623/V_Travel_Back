const express= require('express');

const signUpRouter= express.Router();

const User = require('../model/user.model');

signUpRouter.route("/register").
post(  async(req,res)=>{

    try{
        const newUser = new User({
            username: req.body.username,
            number : req.body.number,
            email: req.body.email,
            password: req.body.password
        });

        const savedUser = await newUser.save();
        res.status(200).json(savedUser)

    }
   
    catch(err){
        res.status(500).json({message:"Error Creating User"})

    }

});

module.exports = signUpRouter