const CryptoJS = require("crypto-js");

const User = require("../model/user.model");

const signUpHandle = async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      number: req.body.number,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_PASSWORD
      ).toString(),
    });

    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: "Error Creating User" });
  }
};

module.exports = signUpHandle;
