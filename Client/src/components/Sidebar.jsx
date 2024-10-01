import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../contexts/DarkModeContext';

function Sidebar({ selectChat }) {
  const { isDarkMode } = useDarkMode();

  const recentChats = [
    // More chat items...
  ];

  return (
    <div
      className={`w-full h-full ${isDarkMode ? 'bg-[#1e1e1e] text-white' : 'bg-gray-100 text-black'} p-2 shadow-lg overflow-x-auto md:overflow-x-hidden`}
      style={{ height: '100%' }}
    >
      <ul className="flex space-x-2">
        {recentChats.map((chat) => (
          <li
            key={chat.id}
            className={`flex flex-col items-center space-y-1 p-2 rounded-md cursor-pointer ${isDarkMode ? 'bg-[#2d2d2d] text-white hover:bg-[#393939]' : 'bg-[#6987C9] hover:bg-[#5A7BC4]'}`}
            onClick={() => selectChat(chat)}
            aria-label={`Chat with ${chat.name}`}
          >
            <FontAwesomeIcon icon={faUserCircle} className="w-8 h-8 md:w-10 md:h-10" />
            <span className="hidden md:block text-sm md:text-base lg:text-lg">{chat.name}</span>
          </li>
        ))}
      </ul>

      <style jsx>{`
        /* Hide scrollbar for larger screens */
        @media (min-width: 768px) {
          .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
          .overflow-x-auto {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        }
      `}</style>
    </div>
  );
}

export default Sidebar;
