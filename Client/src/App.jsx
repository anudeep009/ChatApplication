import React, { useState } from 'react';
import { UserList, Header, MessageWindow } from '../exports';
import { useDarkMode } from './contexts/DarkModeContext';

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([
    // sample messages...
  ]);

  const handleChatSelection = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div
      className={`flex flex-col h-screen ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
      } transition-colors duration-300 ease-in-out`}
    >
      <Header toggleDarkMode={toggleDarkMode} />

     
      <div className="flex flex-1 flex-col md:flex-row overflow-hidden pt-16">
        
        <UserList
          isDarkMode={isDarkMode}
          selectChat={handleChatSelection}
          className="w-full md:w-1/4 h-full md:h-auto overflow-auto"
        />

       
        <MessageWindow
          selectedChat={selectedChat}
          messages={messages}
          className="w-full md:w-3/4 h-full md:h-auto overflow-auto"
        />
      </div>
    </div>
  );
}

export default App;
