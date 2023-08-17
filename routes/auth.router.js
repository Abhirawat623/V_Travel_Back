const express = require("express");

const signUpRouter = express.Router();

const logInRouter = express.Router();

const signUpHandle = require('../controllers/signUpController');

const loginHandle = require('../controllers/loginController')

signUpRouter.route("/register").post( signUpHandle);

logInRouter.route("/login").post(loginHandle);

module.exports = { signUpRouter, logInRouter };
