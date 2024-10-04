import React, { useState, useEffect } from 'react';

const UserProfile = ({ onLogout }) => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: ''
  });

  // Fetch user information from localStorage (or an API)
  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedUsername = localStorage.getItem('username'); // Assuming username is also stored
    setUserInfo({
      username: storedUsername || 'Anonymous', // Fallback if username is not stored
      email: storedEmail || 'Not available',
    });
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="relative bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-lg p-6 text-white max-w-sm mx-auto">
        {/* Close Button */}
        <button 
          className="absolute top-3 right-3 text-white hover:text-gray-400" 
          onClick={onLogout}
        >
          &times;
        </button>

        {/* Profile Information */}
        <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
        <p className="mb-2">
          <span className="font-bold">Username:</span> {userInfo.username}
        </p>
        <p className="mb-2">
          <span className="font-bold">Email:</span> {userInfo.email}
        </p>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="mt-4 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
