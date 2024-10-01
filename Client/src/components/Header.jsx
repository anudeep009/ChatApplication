import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../contexts/DarkModeContext';

function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`fixed w-full top-0 z-20 backdrop-filter backdrop-blur-sm shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-blue-600 text-white'} transition-colors`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="text-2xl font-bold">Chat Box</div>
        
        <div className="hidden md:flex items-center space-x-4">
          <button onClick={toggleDarkMode}>
            {isDarkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
          </button>
          <FontAwesomeIcon icon={faUser} className="text-gray-300" />
        </div>

        
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={faBars} className="text-gray-300" />
        </button>
      </div>

      
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2 px-4">
          <button onClick={toggleDarkMode}>
            {isDarkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
