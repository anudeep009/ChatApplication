import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../contexts/DarkModeContext';

function UserList({ selectChat }) {
  const { isDarkMode } = useDarkMode();

  const recentChats = [
    { id: 1, name: 'santhosh' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Doe' },
    { id: 4, name: 'Anudeep' },
    { id: 5, name: 'John' },
    { id: 6, name: 'Doe' },
  ];

  return (
    <>

      <div className={`w-full md:w-64 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} overflow-hidden`}>
        
       
        <div className="relative p-4">
       
          <input
            type="text"
            placeholder="Search Username"
            className={`w-full px-10 py-2 rounded-md ${
              isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
            } transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>

   
        <div
          className="overflow-y-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
        >
          <ul className="space-y-2 px-4 pb-4">
            {recentChats.map((chat) => (
              <li
                key={chat.id}
                onClick={() => selectChat(chat)}
                className={`p-2 rounded-md cursor-pointer flex items-center ${
                  isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'
                }`}
              >
              
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
          
                <span className="ml-2 hidden md:inline">{chat.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default UserList;
