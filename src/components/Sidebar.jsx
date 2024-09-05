import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../contexts/DarkModeContext';

function Sidebar({ selectChat }) {
  const { isDarkMode } = useDarkMode();

  const recentChats = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Mike Johnson' },
    { id: 4, name: 'Alice Cooper' },
    { id: 5, name: 'Bob Brown' },
    { id: 6, name: 'Carol Davis' },
    { id: 7, name: 'David Evans' },
    { id: 8, name: 'Eve Fisher' },
    { id: 9, name: 'Frank Green' },
    { id: 10, name: 'Grace Hill' },
    { id: 11, name: 'John Doe' },
    { id: 12, name: 'Jane Smith' },
    { id: 13, name: 'Mike Johnson' },
    { id: 14, name: 'Alice Cooper' },
    { id: 15, name: 'Bob Brown' },
    { id: 16, name: 'Carol Davis' },
    { id: 17, name: 'David Evans' },
    { id: 18, name: 'Eve Fisher' },
    { id: 19, name: 'Frank Green' },
    { id: 20, name: 'Grace Hill' },
    // More chat items...
  ];

  return (
    <div
      className={`w-1/4 h-full ${isDarkMode ? 'bg-[#1e1e1e] text-white' : 'bg-gray-100 text-black'} p-4 shadow-lg overflow-y-auto`}
      style={{ height: '100vh', scrollbarWidth: 'none' }}
    >
      <div className="text-lg font-semibold mb-4">Recent Chats</div>
      <ul className="space-y-2">
        {recentChats.map((chat) => (
          <li
            key={chat.id}
            className={`flex items-center space-x-3 p-2 rounded-md cursor-pointer ${isDarkMode ? 'bg-[#2d2d2d] text-white hover:bg-[#393939]' : 'bg-[#6987C9] hover:bg-[#5A7BC4]'}`}
            onClick={() => selectChat(chat)}
            aria-label={`Chat with ${chat.name}`}
          >
            <FontAwesomeIcon icon={faUserCircle} className="w-8 h-8" />
            <span>{chat.name}</span>
          </li>
        ))}
      </ul>
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .w-1/4::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .w-1/4 {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
}

export default Sidebar;
