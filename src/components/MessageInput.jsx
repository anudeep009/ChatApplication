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

  return (
    <div className={`flex items-center p-4 border-t ${isDarkMode ? 'bg-[#2d2d2d] border-gray-600' : 'bg-white border-gray-300'}`}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className={`flex-1 px-3 py-2 rounded-md border ${isDarkMode ? 'bg-[#1e1e1e] text-white border-gray-600' : 'bg-gray-100 text-black border-gray-300'}`}
      />
      <button
        onClick={handleSendMessage}
        className={`ml-2 px-4 py-2 rounded-md ${isDarkMode ? 'bg-[#4f4f4f] text-white hover:bg-[#393939]' : 'bg-[#6366f1] text-white hover:bg-[#5A7BC4]'}`}
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;
