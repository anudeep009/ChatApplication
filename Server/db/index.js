import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.6nzai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log(`DB connected Successfully`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
