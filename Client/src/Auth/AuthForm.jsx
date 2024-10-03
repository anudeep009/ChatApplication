import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { Signin } from "./Signin";
import { Signup } from "./Signup";

function AuthForm({ onClose }) {  
  const [activeTab, setActiveTab] = useState("signup");

  const toggleTab = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-30">
      <div className="relative bg-white/10 border border-white/20 rounded-xl p-8 w-full max-w-md shadow-lg md:max-w-lg backdrop-filter backdrop-blur-lg">
        <button
          className="absolute top-3 right-4 text-white text-2xl font-bold"
          onClick={onClose}
          tabIndex="0"
        >
          &times;
        </button>
        
        <div className="flex justify-between mb-6 text-white">
          <button
            className={`w-1/2 text-center py-2 transition-colors hover:text-blue-300 ${
              activeTab === "signup" ? "border-b-2 border-blue-300" : ""
            }`}
            onClick={() => toggleTab("signup")}
          >
            Sign-up
          </button>
          <button
            className={`w-1/2 text-center py-2 transition-colors hover:text-blue-300 ${
              activeTab === "signin" ? "border-b-2 border-blue-300" : ""
            }`}
            onClick={() => toggleTab("signin")}
          >
            Sign-in
          </button>
        </div>
        {activeTab === "signup" ? <Signup /> : <Signin />}
      </div>
    </div>
  );
}

export default AuthForm;