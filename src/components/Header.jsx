import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faUser, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../contexts/DarkModeContext';

function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);  

  return (
    <header className={` w-full px-4 py-3 shadow ${isDarkMode ? 'bg-[#1e1e1e] text-white' : 'bg-[#6366f1] text-white'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">Chat Box</div>
          <nav className="hidden md:flex space-x-4">
            {/* <a href="#">Chats</a>
            <a href="#">Contacts</a> */}
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
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? 'bg-white text-[#6366f1] hover:bg-gray-200'
                : 'bg-[#6366f1] text-white hover:bg-[#6366f1]/80'
            }`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <FontAwesomeIcon icon={faSun} className="w-5 h-5 text-black" /> : <FontAwesomeIcon icon={faMoon} className="w-5 h-5" />}
          </button>
          <FontAwesomeIcon icon={faUser} className="w-6 h-6 hidden md:block" />
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="flex flex-col mt-2 space-y-2 md:hidden">
          <div className="flex justify-between items-center">
            <nav className="flex space-x-4">
              {/* <a href="#">Chats</a>
              <a href="#">Contacts</a> */}
            </nav>
            <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
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
    </header>
  );
}

export default Header;
