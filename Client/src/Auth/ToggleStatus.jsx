import React, { useEffect, useState } from 'react';
import UserProfile from './UserProfile';
import AuthForm from './AuthForm';

const ToggleStatus = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const userid = localStorage.getItem('userid');

    // If any of the user information exists, set isAuthenticated to true
    if (username || email || userid) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="app-container">
      {isAuthenticated ? <UserProfile /> : <AuthForm onClose={() => setIsAuthenticated(true)} />}
    </div>
  );
};

export default ToggleStatus;
