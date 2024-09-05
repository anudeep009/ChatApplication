import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../contexts/DarkModeContext';

function MessageInput() {
  const { isDarkMode } = useDarkMode();
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div
      className={`flex items-center p-2 md:p-4 border-t ${isDarkMode ? 'bg-[#2d2d2d] border-gray-600' : 'bg-white border-gray-300'}`}
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
        className={`flex-1 px-2 py-1 md:px-3 md:py-2 rounded-md border focus:outline-none focus:ring-2 ${
          isDarkMode
            ? 'bg-[#1e1e1e] text-white border-gray-600 focus:ring-[#6366f1]'
            : 'bg-gray-100 text-black border-gray-300 focus:ring-[#6366f1]'
        }`}
      />
      <button
        onClick={handleSendMessage}
        aria-label="Send message"
        className={`ml-2 px-3 py-1 md:px-4 md:py-2 flex items-center justify-center rounded-md transition-colors duration-200 ${
          isDarkMode
            ? 'bg-[#4f4f4f] text-white hover:bg-[#393939]'
            : 'bg-[#6366f1] text-white hover:bg-[#5A7BC4]'
        }`}
      >
        <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
      </button>
    </div>
  );
}

export default MessageInput;
