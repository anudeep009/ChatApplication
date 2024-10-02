import { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

function AuthForm({ onClose }) {  // Accept the onClose prop
  const [activeTab, setActiveTab] = useState("signup");

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-30">
      <Toaster />
      <div className="relative bg-white/10 border border-white/20 rounded-xl p-8 w-full max-w-md shadow-lg md:max-w-lg backdrop-filter backdrop-blur-lg">
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-white text-2xl font-bold"
          onClick={onClose}  // Use the onClose function passed from parent
        >
          &times;
        </button>
        
        {/* Tabs */}
        <div className="flex justify-between mb-6 text-white">
          <button
            className={`w-1/2 text-center py-2 transition-colors ${
              activeTab === "signup" ? "border-b-2 border-blue-300" : ""
            }`}
            onClick={() => toggleTab("signup")}
          >
            Sign-up
          </button>
          <button
            className={`w-1/2 text-center py-2 transition-colors ${
              activeTab === "signin" ? "border-b-2 border-blue-300" : ""
            }`}
            onClick={() => toggleTab("signin")}
          >
            Sign-in
          </button>
        </div>

        {/* Render the active form */}
        {activeTab === "signup" ? <Signup /> : <Signin />}
      </div>
    </div>
  );
}

function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
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

      const loadingToast = toast.loading("Saving data...");

      setIsLoading(true);

      try {
        const response = await axios.post("http://localhost:8080/api/signup", {
          fullname: formData.fullname,
          email: formData.email,
          password: formData.password,
        });

        if (response.status === 201) {
          toast.success("Signup successful!");
          setFormError(null);
          navigate("/signin");
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
        <label htmlFor="fullname" className="block text-white font-medium">
          Full Name
        </label>
        <input
          id="fullname"
          type="text"
          placeholder="Enter Fullname"
          required
          value={formData.fullname}
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
      <button type="submit" disabled={isLoading} className={buttonClasses}>
        {isLoading ? "Submitting..." : "Sign Up"}
      </button>
    </form>
  );
}

function Signin() {
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
          navigate("/dashboard");
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

export default AuthForm;
