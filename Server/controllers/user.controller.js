import mongoose from "mongoose";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export const registerUser = async (req, res) => {
  const { username, email, password, profilepicture } = req.body;

  if (!email || !password || !username) {
    // Ensure username is included
    return res
      .status(400)
      .json({ message: "Email, password, and username are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const hashedPassword = await hashPassword(password);

      const newUser = await User.create({
        username, // Store the username correctly
        email,
        password: hashedPassword,
        profilepicture:
          profilepicture || "https://example.com/default-profile-pic.jpg",
      });

      return res.status(201).json({ message: "User registered successfully" });
    } else {
      return res
        .status(400)
        .json({ message: "User already exists, please login" });
    }
  } catch (error) {
    console.error("Error while signing up:", error.message);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      message: "User signed in successfully",
      token,
      userId: user._id.toString(),
      username: user.username, // Ensure username is returned correctly
      email: user.email, // Include email
      profilePicture: user.profilepicture, // Include profile picture
    });
  } catch (error) {
    console.error("Error while signing in:", error.message);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      username: user.username, // Ensure correct username is returned
      email: user.email,
      // notifications: user.notifications,
    });
  } catch (error) {
    console.error("Error fetching user profile:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
