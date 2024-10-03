import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    userid:'',
  });

  useEffect(() => {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email'); 
    const userid = localStorage.getItem('userid'); 

    setUserInfo({
      username: username || 'Guest',
      email: email || 'No email provided',
      userid : userid || 'No username provided'
    });
  }, []);

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-5">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">User Profile</h2>
        <p className="text-gray-700">
          <span className="font-bold">Username:</span> {userInfo.username}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">UserID:</span> {userInfo.userid}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Email:</span> {userInfo.email}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
