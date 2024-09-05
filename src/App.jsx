import React, { useState } from 'react';
import { Sidebar, Header, MessageWindow } from '../exports';
import { useDarkMode } from './contexts/DarkModeContext';

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([
    { text: 'Hello!', timestamp: '10:00 AM' },
    { text: 'Hi there!', timestamp: '10:01 AM' },
    { text: 'Hello!', timestamp: '10:00 AM' },
    { text: 'Hi there!', timestamp: '10:01 AM' },
    { text: 'Hello!', timestamp: '10:00 AM' },
    { text: 'Hi there!', timestamp: '10:01 AM' },
    { text: 'Hello!', timestamp: '10:00 AM' },
    // sample messages...
  ]);

  const handleChatSelection = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-[#1e1e1e]' : 'bg-[#f9fafb]'} transition-colors duration-300 ease-in-out`}>
      <Header toggleDarkMode={toggleDarkMode} />
      <div className="flex-1 flex flex-col">
        <div className="flex flex-row w-full h-1/6 md:h-1/5">
          <Sidebar isDarkMode={isDarkMode} selectChat={handleChatSelection} />
        </div>
        <div className="flex-1 flex">
          <MessageWindow selectedChat={selectedChat} messages={messages} />
        </div>
      </div>
    </div>
  );
}

export default App;
