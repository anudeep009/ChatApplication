import React, { useState, useEffect } from 'react';

export default function UserRegistration() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load the Google Identity Services script
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleGoogleSignIn = () => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID',
        callback: handleCredentialResponse
      });
      window.google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
          // Try to render the popup manually
          window.google.accounts.id.renderButton(
            document.getElementById('googleSignInButton'),
            { theme: 'outline', size: 'large' }
          );
        }
      });
    }
  };

  const handleCredentialResponse = (response) => {
    // Typically, you would send the response.credential to your server to verify the token and get user info
    console.log('Encoded JWT ID token: ' + response.credential);
    // For demonstration, decode the JWT locally
    const decodedToken = JSON.parse(atob(response.credential.split('.')[1]));
    setUser(decodedToken);
  };

  return (
    <div className="w-[350px] mx-auto p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Sign In / Sign Up</h2>
      </div>
      <div>
        {user ? (
          <div className="text-center">
            <img 
              src={user.picture} 
              alt={user.name} 
              className="w-16 h-16 rounded-full mx-auto mb-2" 
            />
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        ) : (
          <div className="flex justify-center">
            <button 
              id="googleSignInButton" 
              onClick={handleGoogleSignIn}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Sign in with Google
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
