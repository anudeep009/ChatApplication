import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../contexts/DarkModeContext';
import axios from 'axios';

function UserList({ selectChat }) {
  const { isDarkMode } = useDarkMode();
  const [searchTerm, setSearchTerm] = useState('');
  const [recentChats, setRecentChats] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const fetchUser = async () => {
    if (searchTerm.trim() === '') {
      setRecentChats([]);
      return;
    }
    try {
      const response = await axios.get('http://localhost:8080/api/user/finduser', {
        params: { username: searchTerm },
      });
      console.log(searchTerm);
      console.log(response.data.user);
      setRecentChats([response.data.user]);
    } catch (e) {
      console.error('Error while finding user:', e.message);
      setRecentChats([]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchUser();
    }
  };

  const handleSelectChat = async (chat) => {
    await fetchMessagesForChat(chat._id);
    selectChat(chat); 
  };

  const fetchMessagesForChat = async (chatId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/messages/${chatId}`);
      selectChat({ messages: response.data.messages });
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  return (
    <div className={`w-full md:w-64 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} overflow-hidden`}>
      <div className="relative p-4">
        <input
          type="text"
          placeholder="Search Username"
          className={`w-full px-10 py-2 rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'} transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500`}
          onChange={handleSearch}
          onKeyPress={handleKeyPress}
          value={searchTerm}
        />
        <FontAwesomeIcon icon={faSearch} className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <ul className="space-y-2 px-4 pb-4">
          {recentChats.length > 0 ? (
            recentChats.map((chat) => (
              <li
                key={chat._id}
                onClick={() => handleSelectChat(chat)}
                className={`p-2 rounded-md cursor-pointer flex items-center ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'}`}
              >
                <FontAwesomeIcon icon={faUserCircle} className="w-6 h-6 md:w-8 md:h-8" />
                <span className="ml-2 hidden md:inline">{chat.username}</span>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No users found</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default UserList;
