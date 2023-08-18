
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
const connectDB = async () => {
  try {

    await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;