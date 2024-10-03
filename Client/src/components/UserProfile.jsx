import React from 'react';

const UserProfile = ({ userInfo, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="relative bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-lg p-6 text-white max-w-sm mx-auto">
        <button 
          className="absolute top-3 right-3 text-white hover:text-gray-400" 
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
        <p className="mb-2">
          <span className="font-bold">Username:</span> {userInfo.username}
        </p>
        <p className="mb-2">
          <span className="font-bold">UserID:</span> {userInfo.userid}
        </p>
        <p className="mb-2">
          <span className="font-bold">Email:</span> {userInfo.email}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
