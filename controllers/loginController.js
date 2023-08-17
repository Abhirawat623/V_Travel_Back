const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const User = require("../model/user.model");

const loginHandle = async (req, res) => {
    try {
      const user = await User.findOne({
        number: req.body.number,
      });
  
      !user && res.status(401).json({ message: "Incorrect Mobile Number" });
  
      const decodedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.SECRET_PASSWORD
      ).toString(CryptoJS.enc.Utf8);
  
      console.log(decodedPassword);
  
      decodedPassword !== req.body.password &&
        res.status(401).json({ message: "Incorrect Password" });
  
      const { password, ...rest } = user._doc;
  
      const accessToken = jwt.sign(
        { username: user.username },
        process.env.ACCESS_TOKEN
      );
  
      res.json({ ...rest, accessToken });
    } catch (err) {
      res.status(500).json(err);
    }
  };

module.exports = loginHandle;