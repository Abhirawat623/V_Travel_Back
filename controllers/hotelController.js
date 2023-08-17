const Hotel = require("../model/hotel.model");

const hotelHandle= async (req, res) => {
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
        : res.status(404).json({ message: "no data found" });
    } catch (err) {
      console.log(err);
    }
  };

  module.exports = hotelHandle;