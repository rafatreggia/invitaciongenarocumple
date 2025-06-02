import mongoose, { mongo } from "mongoose";

const url = process.env.MONGODB_URL || "mongodb://localhost:27017/local";
let isConnected = false;


const connectMongoDb = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    await mongoose.connect(url);
    isConnected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed", error);
  }
};

export default connectMongoDb;