import React from 'react';
import MessageInput from './MessageInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../contexts/DarkModeContext';
import MessageDisplayArea from './MessageDisplayArea';

function MessageWindow({ selectedChat, messages }) {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`flex-1 p-2 md:p-4 border-l ${isDarkMode ? 'border-gray-600 bg-[#2d2d2d]' : 'border-gray-200 bg-white'} max-h-[calc(100vh-50px)] overflow-hidden`}
    >
      {selectedChat ? (
        <>
          <div className="flex items-center mb-2 md:mb-4 space-x-3">
            <FontAwesomeIcon
              icon={faUserCircle}
              className={`w-10 h-10 md:w-8 md:h-8 ${isDarkMode ? 'text-white' : 'text-black'}`}
            />
            <div
              className={`text-base md:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}
            >
              {selectedChat.name}
            </div>
          </div>
          <MessageDisplayArea messages={messages} />
          <MessageInput />
        </>
      ) : (
        <div className="text-gray-500 text-center">Select a chat to start messaging.</div>
      )}
    </div>
  );
}

export default MessageWindow;
