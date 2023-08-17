const Wishlist = require("../model/wishlist.model");

const wishlistCreateHandle= async (req, res) => {
    const newWishlist = new Wishlist(req.body);
    try {
      const savedWishist = await newWishlist.save();
      res.status(201).json(savedWishist);
    } catch (err) {
      res.json(500).json({ message: "failed To Create Wishlist" });
    }
  };

  const wishlistDeleteHandle =  async (req, res) => {
    try {
      await Wishlist.findByIdAndDelete(req.params.id);
      res.json({ message: "hotel deleted form wishlist" });
    } catch {
      res.status(500).json({ message: "can't delete hotel from wishlist" });
    }
  };

  const wishlistGetHandle =  async (req, res) => {
    try {
      const wishlist = await Wishlist.find({});
      wishlist
        ? res.status(200).json(wishlist)
        : res.json({ message: "No items in wishlist found" });
    } catch (err) {
      res.status(500).json(err);
    }
  };

  module.exports= {wishlistCreateHandle,wishlistDeleteHandle,wishlistGetHandle};