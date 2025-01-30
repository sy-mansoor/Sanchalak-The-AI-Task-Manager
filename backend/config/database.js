const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected!'.green);
      } catch (error) {
        console.error("Error: MongoDB connection Failed".red, error);
        process.exit(1);
      }
    };

module.exports = connectDB;
