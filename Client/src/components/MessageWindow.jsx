import React from 'react';
import MessageInput from './MessageInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import MessageDisplayArea from './MessageDisplayArea';
import { useDarkMode } from '../contexts/DarkModeContext';

function MessageWindow({ selectedChat, messages }) {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`flex flex-col h-full flex-1`}>
      {selectedChat ? (
        <>
          
          <div className={`flex items-center p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <FontAwesomeIcon icon={faUserCircle} className="w-8 h-8" />
            <div className="ml-4 text-lg font-semibold">
              {selectedChat.name}
            </div>
          </div>

         
          <div className="flex-1 overflow-y-auto p-4">
            <MessageDisplayArea messages={messages} />
          </div>

        
          <div className="p-4 ">
            <MessageInput />
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center text-center text-gray-500 dark:text-gray-400 p-4 h-full">
          Select a chat to start messaging
        </div>
      )}
    </div>
  );
}

export default MessageWindow;
