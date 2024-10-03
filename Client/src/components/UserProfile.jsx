import React from 'react';

const UserProfile = ({ username, email, notifications }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-5">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">User Profile</h2>
        <p className="text-gray-700">
          <span className="font-bold">Username:</span> {username}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Email:</span> {email}
        </p>
        <h3 className="text-xl font-semibold mt-4">Notifications</h3>
        {notifications.length > 0 ? (
          <ul className="list-disc list-inside mt-2">
            {notifications.map((notification, index) => (
              <li key={index} className="text-gray-600">
                {notification}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No notifications</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
