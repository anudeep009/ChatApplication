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

const registerUser = async (req, res) => {
  const { username, email, password, profilepicture } = req.body;

  if (!email || !password || !username) {
    return res
      .status(400)
      .json({ message: "Email, password, and username are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const hashedPassword = await hashPassword(password);

      const newUser = await User.create({
        username,
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

const signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      message: "User signed in successfully",
      token,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const getUserProfile = async (req, res) => {
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
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.error("Error fetching user profile:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const findUser = async (req, res) => {
  const { username } = req.query;
  const token = req.cookies.token;

  try {
    const finduser = await User.findOne({ username });

    if (!finduser) {
      return res
        .status(404)
        .json({ message: "User not found. Enter a correct username." });
    }

    res.status(200).json({ user: finduser });
  } catch (error) {
    console.error("Error while finding user:", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export { registerUser, signin, getUserProfile, findUser };
