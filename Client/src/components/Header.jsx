import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../contexts/DarkModeContext';
import AuthForm from '../Auth/AuthForm';
import { Link } from 'react-router-dom';

function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);

  const handleAuthFormToggle = () => {
    setShowAuthForm(!showAuthForm);
  };

  return (
    <>
      <header className={`fixed w-full top-0 z-20 backdrop-filter backdrop-blur-sm shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-[#086788] text-white'} transition-colors`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            <Link to="/" className="hover:text-gray-300">Chat Box</Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            <button onClick={toggleDarkMode}>
              {isDarkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
            </button>
            <button onClick={handleAuthFormToggle}>
              <FontAwesomeIcon icon={faUser} className="text-gray-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={faBars} className="text-gray-300" />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#086788] flex flex-col space-y-4 mt-2 px-4 py-4 rounded-b-lg shadow-lg">
            <button
              onClick={toggleDarkMode}
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-300"
            >
              {isDarkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            <button
              onClick={handleAuthFormToggle}
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faUser} />
              <span>Login / Signup</span>
            </button>
          </div>
        )}
      </header>

      {/* Auth Form Overlay */}
      {showAuthForm && (
        <AuthForm onClose={handleAuthFormToggle} />
      )}
    </>
  );
}

export default Header;
