import React from 'react';
import MessageInput from './MessageInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../contexts/DarkModeContext';
import MessageDisplayArea from './MessageDisplayArea';

function MessageWindow({ selectedChat, messages }) {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`flex-1 p-4 border-l ${isDarkMode ? 'border-gray-600 bg-[#2d2d2d]' : 'border-gray-200 bg-white'}`}>
      {selectedChat ? (
        <>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faUserCircle} className={`w-8 h-8 mr-2 ${isDarkMode ? 'text-white' : 'text-black'}`} />
            <div className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
              {selectedChat.name}
            </div>
          </div>
          <MessageDisplayArea messages={messages} />
          <MessageInput />
        </>
      ) : (
        <div className="text-gray-500">Select a chat to start messaging.</div>
      )}
    </div>
  );
}

export default MessageWindow;
