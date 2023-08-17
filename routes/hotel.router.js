const express = require("express");

const hotelRouter = express.Router();

const hotelHandle = require('../controllers/hotelController')

hotelRouter.route("/").get(hotelHandle);

module.exports = hotelRouter;
