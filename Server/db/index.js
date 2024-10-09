import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async () => {
  try {
    console.log(`Connecting to DB: ${process.env.MONGO_URI}`);
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB connected successfully`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
