import React, { useEffect, useRef } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';

function MessageDisplayArea({ messages }) {
  const { isDarkMode } = useDarkMode();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div
      className={`flex-1 p-2 md:p-4 overflow-y-auto ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
      style={{ height: 'calc(100vh - 200px)', scrollbarWidth: 'none' }}
    >
      {messages.length === 0 ? (
        <div className="text-gray-500">No messages yet.</div>
      ) : (
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded-md max-w-lg mx-auto md:max-w-2xl lg:max-w-3xl ${
                isDarkMode ? 'bg-[#3b3b3b]' : 'bg-gray-100'
              } ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
            >
              <p className="text-sm md:text-base">{message.text}</p>
              <span className="text-xs text-gray-500">{message.timestamp}</span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      )}
      <style jsx>{`
        .flex-1::-webkit-scrollbar {
          display: none;
        }
        .flex-1 {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default MessageDisplayArea;
