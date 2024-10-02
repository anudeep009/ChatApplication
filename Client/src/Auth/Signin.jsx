import React, { useState,useCallback,useMemo } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

export const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      const loadingToast = toast.loading("Logging in...");

      setIsLoading(true);

      try {
        const response = await axios.post("http://localhost:8080/api/signin", {
          email: formData.email,
          password: formData.password,
        });

        if (response.status === 200) {
          toast.success("Login successful!");
          setFormError(null);
          navigate("/");
        }
      } catch (error) {
        console.error("Login error:", error);
        setFormError("Invalid credentials. Please try again.");
        toast.error("Login failed. Please try again.");
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
      <button type="submit" disabled={isLoading} className={buttonClasses}>
        {isLoading ? "Logging in..." : "Sign In"}
      </button>
    </form>
  );
}