import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faUser, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../contexts/DarkModeContext';
import UserRegistration from './UserRegistration';

function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showUserRegistration, setShowUserRegistration] = useState(false);

  const handleToggleUserRegistration = () => {
    setShowUserRegistration(!showUserRegistration);
  };

  return (
    <header className={`bg-[#2d2d2d] bg-opacity-80 fixed w-full top-0 z-20 backdrop-filter backdrop-blur-sm shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-white">Chat Box</div>
          </div>
          
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search chats..."
                className={`px-3 py-2 rounded-md border ${isDarkMode ? 'bg-[#2d2d2d] text-white border-gray-600' : 'bg-gray-100 text-black border-gray-300'}`}
              />
              <FontAwesomeIcon icon={faSearch} className="absolute top-2.5 right-3 text-gray-400" />
            </div>
            <button
              className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-white text-[#6366f1] hover:bg-gray-200' : 'bg-[#6366f1] text-white hover:bg-indigo-500'}`}
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <FontAwesomeIcon icon={faSun} className="w-5 h-5 text-black" /> : <FontAwesomeIcon icon={faMoon} className="w-5 h-5" />}
            </button>
            <button onClick={handleToggleUserRegistration}>
              <FontAwesomeIcon icon={faUser} className="w-6 h-6 text-gray-300 hover:text-white" />
            </button>
          </div>

          
          <div className="md:hidden flex items-center">
            <button className="p-2" onClick={() => setMenuOpen(!menuOpen)}>
              <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-gray-300" />
            </button>
          </div>
        </div>

        
        {menuOpen && (
          <div className="md:hidden flex flex-col mt-2 space-y-2">
            <div className="flex items-center justify-between">
              <input
                type="text"
                placeholder="Search chats..."
                className={`w-full px-3 py-2 rounded-md border ${isDarkMode ? 'bg-[#2d2d2d] text-white border-gray-600' : 'bg-gray-100 text-black border-gray-300'}`}
              />
              <button onClick={handleToggleUserRegistration}>
                <FontAwesomeIcon icon={faUser} className="w-6 h-6 text-gray-300" />
              </button>
            </div>
          </div>
        )}
      </div>

      
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
