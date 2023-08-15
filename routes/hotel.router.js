const express = require("express");

const hotelRouter = express.Router();

const Hotel = require("../routes/hotelDataImport.router");

hotelRouter.route("/").get(async (req, res) => {
  const hotelCategory = req.query.hotelCategory;
  try {
    let hotels;

    if (hotelCategory) {
      hotels = await Hotel.find({ cateory: hotelCategory });
    } else {
      hotels = await Hotel.find({});
    }
    hotels
      ? res.json(hotels)
      : res.status(404).json({ messae: "no data found" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = hotelRouter;
