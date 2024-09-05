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
    { text: 'Hi there!', timestamp: '10:01 AM' },
    { text: 'Hello!', timestamp: '10:00 AM' },
    { text: 'Hi there!', timestamp: '10:01 AM' },
    { text: 'Hello!', timestamp: '10:00 AM' },
    { text: 'Hi there!', timestamp: '10:01 AM' },
    { text: 'Hello!', timestamp: '10:00 AM' },
    { text: 'Hi there!', timestamp: '10:01 AM' },
    // More messages...
  ]);

  const handleChatSelection = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-[#1e1e1e]' : 'bg-[#f9fafb]'} transition-colors duration-300 ease-in-out`}>
      <Header toggleDarkMode={toggleDarkMode} />
      <div className="flex flex-1">
        <Sidebar isDarkMode={isDarkMode} selectChat={handleChatSelection} />
        <MessageWindow selectedChat={selectedChat} messages={messages} />
      </div>
    </div>
  );
}

export default App;
