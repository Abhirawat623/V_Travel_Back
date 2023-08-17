const express = require("express");

const {wishlistCreateHandle,wishlistDeleteHandle,wishlistGetHandle} = require("../controllers/wishlistController")

const wishlistRouter = express.Router();

const verifyUser = require("../middleware/verify.user");

wishlistRouter.route("/").post(verifyUser,wishlistCreateHandle );

wishlistRouter.route("/").delete(verifyUser,wishlistDeleteHandle);

wishlistRouter.route("/").get(verifyUser,wishlistGetHandle);

module.exports = wishlistRouter;
