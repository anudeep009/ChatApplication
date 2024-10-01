import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faUser, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../contexts/DarkModeContext';
import UserRegistration from './UserRegistration';

function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showUserRegistration, setShowUserRegistration] = useState(false); // State to toggle UserRegistration

  const handleToggleUserRegistration = () => {
    setShowUserRegistration(!showUserRegistration);
  };

  return (
    <header className={`w-full px-4 py-3 shadow ${isDarkMode ? 'bg-[#1e1e1e] text-white' : 'bg-[#6366f1] text-white'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">Chat Box</div>
          <nav className="hidden md:flex space-x-4">
            {/* Add navigation items if needed */}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search chats..."
              className={`px-3 py-2 rounded-md border ${isDarkMode ? 'bg-[#2d2d2d] text-white border-gray-600' : 'bg-gray-100 text-black border-gray-300'}`}
            />
            <FontAwesomeIcon icon={faSearch} className="absolute top-2.5 right-3 text-gray-400" />
          </div>
          <button
            className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-white text-[#6366f1] hover:bg-gray-200' : 'bg-[#6366f1] text-white hover:bg-[#6366f1]/80'}`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <FontAwesomeIcon icon={faSun} className="w-5 h-5 text-black" /> : <FontAwesomeIcon icon={faMoon} className="w-5 h-5" />}
          </button>
          <button onClick={handleToggleUserRegistration}>
            <FontAwesomeIcon icon={faUser} className="w-6 h-6 hidden md:block" />
          </button>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="flex flex-col mt-2 space-y-2 md:hidden">
          <div className="flex items-center justify-between">
            <nav className="flex flex-col space-y-2">
              {/* Add mobile navigation items if needed */}
            </nav>
            <button onClick={handleToggleUserRegistration}>
              <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
            </button>
          </div>
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="Search chats..."
              className={`w-full px-3 py-2 rounded-md border ${isDarkMode ? 'bg-[#2d2d2d] text-white border-gray-600' : 'bg-gray-100 text-black border-gray-300'}`}
            />
            <FontAwesomeIcon icon={faSearch} className="absolute top-2.5 right-3 text-gray-400" />
          </div>
        </div>
      )}
      {/* Conditionally render UserRegistration */}
      {showUserRegistration && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <UserRegistration />
          <button onClick={handleToggleUserRegistration} className="absolute top-4 right-4 p-2 bg-white rounded-full shadow">
            Close
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
