import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import React, { useState, useCallback, useMemo } from "react";

export const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    profilePicture: null, 
  });
  const [formError, setFormError] = useState(null);
  const navigate = useNavigate();

  const validateForm = useCallback(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError("Please enter a valid email address");
      return false;
    }
    setFormError(null);
    return true;
  }, [formData.email]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "profile") {
      setFormData((prevData) => ({ ...prevData, profilePicture: e.target.files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [id]: value }));
    }
  };

  const uploadToCloudinary = async (file) => {
    const cloudinaryData = new FormData();
    cloudinaryData.append("file", file);
    cloudinaryData.append("upload_preset", "bs0p8pfy");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dbdq4twu1/image/upload",
        cloudinaryData
      );
      return res.data.secure_url;
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      throw new Error("Failed to upload image to Cloudinary.");
    }
  };

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      const loadingToast = toast.loading("Saving data...");

      setIsLoading(true);

      try {
        let profileImageUrl = null;

        if (formData.profilePicture) {
          profileImageUrl = await uploadToCloudinary(formData.profilePicture);
        }

        const formDataToSend = {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          profilePictureUrl: profileImageUrl,
        };
        console.log(profileImageUrl);

        const response = await axios.post("http://localhost:8080/api/signup", formDataToSend);

        if (response.status === 201) {
          toast.success("Signup successful!");
          setFormData({ username: "", email: "", password: "", profilePicture: null });
          setFormError(null);
          navigate("/authentication"); 
        }
      } catch (error) {
        console.error("Signup error:", error);
        setFormError("An error occurred during signup. Please try again.");
        toast.error("Signup failed. Please try again.");
      } finally {
        toast.dismiss(loadingToast);
        setIsLoading(false);
      }
    },
    [formData, validateForm, navigate]
  );

  const buttonClasses = useMemo(
    () =>
      `w-full py-2 px-4 font-medium text-white rounded transition ${
        isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
      }`,
    [isLoading]
  );

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-white font-medium">
          User Name
        </label>
        <input
          id="username"
          type="text"
          placeholder="Enter username"
          required
          value={formData.username}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded bg-transparent text-white placeholder-gray-300"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-white font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded bg-transparent text-white placeholder-gray-300"
        />
        {formError && <p className="text-red-500 text-sm">{formError}</p>}
      </div>
      <div>
        <label htmlFor="password" className="block text-white font-medium">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded bg-transparent text-white placeholder-gray-300"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-2 text-sm text-gray-400"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>
      <div>
        <label htmlFor="profile" className="block text-white font-medium">
          Profile Picture (Optional)
        </label>
        <input
          id="profile"
          type="file"
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded bg-transparent text-white placeholder-gray-300"
        />
      </div>
      <button type="submit" disabled={isLoading} className={buttonClasses}>
        {isLoading ? "Submitting..." : "Sign Up"}
      </button>
    </form>
  );
};
