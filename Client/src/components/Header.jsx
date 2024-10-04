import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faUser, faBars, faBell } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../contexts/DarkModeContext';
import AuthForm from '../Auth/AuthForm';
import { Link } from 'react-router-dom';

function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [showAuthForm, setShowAuthForm] = useState(false); // State to toggle AuthForm

  const handleNotificationClick = () => {
    console.log("Notifications clicked");
  };

  const handleProfileClick = () => {
    setShowAuthForm(!showAuthForm); // Toggle AuthForm visibility
  };

  return (
    <>
      <header className={`fixed w-full top-0 z-20 backdrop-filter backdrop-blur-sm shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-[#086788] text-white'} transition-colors`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            <Link to="/" className="hover:text-gray-300">Chat Box</Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            <button onClick={toggleDarkMode}>
              {isDarkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
            </button>
            <button onClick={handleNotificationClick} className="relative">
              <FontAwesomeIcon icon={faBell} className="text-gray-300" />
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">{notifications.length}</span>
              )}
            </button>
            <button onClick={handleProfileClick}>
              <FontAwesomeIcon icon={faUser} className="text-gray-300" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={faBars} className="text-gray-300" />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className={`md:hidden flex flex-col space-y-4 mt-2 px-4 py-4 rounded-b-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-[#086788] text-white'}`}>
            <button
              onClick={toggleDarkMode}
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-300"
            >
              {isDarkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            <button
              onClick={handleProfileClick}
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faUser} />
              <span>Login / Signup</span>
            </button>
            <button
              onClick={handleNotificationClick}
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faBell} />
              <span>Notifications {notifications.length > 0 && `(${notifications.length})`}</span>
            </button>
          </div>
        )}
      </header>

      {/* Show AuthForm when user icon is clicked */}
      {showAuthForm && (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-black bg-opacity-50">
          <AuthForm onClose={() => setShowAuthForm(false)} />
        </div>
      )}
    </>
  );
}

export default Header;
