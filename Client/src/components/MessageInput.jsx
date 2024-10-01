import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../contexts/DarkModeContext';

function MessageInput() {
  const [message, setMessage] = useState('');
  const { isDarkMode } = useDarkMode();

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <div
      className={`p-2 flex items-center sticky bottom-0 w-full ${
        isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
      } transition-colors duration-300 ease-in-out`}
    >
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className={`flex-1 p-2 rounded-md outline-none transition-colors duration-300 ease-in-out ${
          isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'
        }`}
      />
      <button
        onClick={handleSendMessage}
        className={`ml-2 p-2 rounded-md flex-shrink-0 transition-colors duration-300 ease-in-out ${
          isDarkMode ? 'bg-blue-600' : 'bg-blue-500'
        } hover:bg-blue-700`}
      >
        <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
      </button>
    </div>
  );
}

export default MessageInput;
