const express = require("express");

const singleHotelRouter = express.Router();
const singleHotelHandle = require("../controllers/singleHotelController");

singleHotelRouter.route("/:id").get(singleHotelHandle);

module.exports = singleHotelRouter;
