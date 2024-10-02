import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    profilepicture: {
      type: String,
      required: true,
      default: "https://example.com/default-profile-pic.jpg",
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
