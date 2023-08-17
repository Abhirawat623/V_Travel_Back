const express= require('express');
const jwt = require('jsonwebtoken');

const CryptoJS = require('crypto-js');

const signUpRouter= express.Router();

const logInRouter = express.Router();

const User = require('../model/user.model');

signUpRouter.route("/register").
post(  async (req,res)=>{

    try{
        const newUser = new User({
            username: req.body.username,
            number : req.body.number,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_PASSWORD).toString()
            
        });

        const savedUser = await newUser.save();
        res.status(200).json(savedUser)

    }
   
    catch(err){
        res.status(500).json({message:"Error Creating User"})

    }

});


logInRouter.route("/login").
post( async(req,res)=>{


try{
const user = await User.findOne({
    number:req.body.number
});

!user && res.status(401).json({message:"Incorrect Mobile Number"});


const decodedPassword = CryptoJS.AES.decrypt(user.password,process.env.SECRET_PASSWORD).toString(CryptoJS.enc.Utf8)

console.log(decodedPassword);

decodedPassword!== req.body.password && res.status(401).json({message:"Incorrect Password"});

const { password,...rest}= user._doc;

const accessToken = jwt.sign({username:user.username}, process.env.ACCESS_TOKEN)

res.json({...rest,accessToken})
}

catch(err){
res.status(500).json(err)

}


})












module.exports = {signUpRouter, logInRouter}