import React, { useState } from 'react';
import {Camera} from 'lucide-react';
import SlideNavbar from '../componets/SlideNavbar';
import HeaderNavbar from '../componets/HeaderNavbar';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      text: 'Hi, good morning',
      sender: 'other',
      time: '9:00 AM',
    },
    {
      id: 2,
      text: 'good morning',
      sender: 'me',
      time: '9:02 AM',
    },
  ]);

  const chatList = [
    {
      id: 1,
      name: 'Martin Randolph',
      avatar: '👨‍💼',
      lastMessage: 'Hi, How are you, I want to',
      time: '11/19/19',
      isActive: true,
    },
    {
      id: 2,
      name: 'Andrew Parker',
      avatar: '👨‍🦱',
      lastMessage: 'What kind of strategy is better?',
      time: '11/16/19',
      isActive: false,
    },
    {
      id: 3,
      name: 'Karen Castillo',
      avatar: '👩‍💼',
      lastMessage: 'What kind of strategy is better?',
      time: '11/15/19',
      isActive: false,
    },
    {
      id: 4,
      name: 'Maximilian Jacobson',
      avatar: '👨‍🔬',
      lastMessage: 'Bro, I have a good idea!',
      time: '10/30/19',
      isActive: false,
    },
    {
      id: 5,
      name: 'Martha Craig',
      avatar: '👩‍🦰',
      lastMessage: '📷 Photo',
      time: '10/28/19',
      isActive: false,
    },
    {
      id: 6,
      name: 'Tabitha Potter',
      avatar: '👩‍🦳',
      lastMessage:
        'Actually I wanted to check with you about your online business plan so...',
      time: '8/25/19',
      isActive: false,
    },
    {
      id: 7,
      name: 'Maisy Humphrey',
      avatar: '👩‍🎨',
      lastMessage:
        'Welcome, to make design process faster, look at Pixsellz',
      time: '8/20/19',
      isActive: false,
    },
    {
      id: 8,
      name: 'Kieron Dotson',
      avatar: '👨‍🎤',
      lastMessage: 'Ok, have a good trip',
      time: '7/29/19',
      isActive: false,
    },
  ];

  const handleSend = () => {
    if (message.trim()) {
      setChatMessages([
        ...chatMessages,
        {
          id: Date.now(),
          text: message,
          sender: 'me',
          time: 'Now',
        },
      ]);
      setMessage('');
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <SlideNavbar/>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header Navbar */}
        <HeaderNavbar/>
        
        {/* Chat Interface */}
        <div className="flex-1 bg-gray-50 flex">
          {/* Chat List */}
          <div className="w-80 bg-white">
            <div className="p-6">
              <div className="text-center mb-6">
                <p className="text-sm text-gray-600 font-medium">
                  "I hear you. Your feelings matter."
                </p>
              </div>
            </div>

            <div className="px-6 mb-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Chats</h2>
              <div className="flex space-x-6">
                <span className="text-sm text-gray-500 cursor-pointer">
                  Broadcast Lists
                </span>
                <span className="text-sm text-teal-500 cursor-pointer border-b-2 border-teal-500">
                  New Group
                </span>
              </div>
            </div>

            <div className="overflow-y-auto h-96">
              {chatList.map((chat) => (
                <div
                  key={chat.id}
                  className={`px-6 py-3 cursor-pointer hover:bg-gray-50 ${
                    chat.isActive
                      ? 'bg-teal-50 border-r-[3px] border-r-teal-500'
                      : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-lg flex-shrink-0">
                      {chat.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-medium text-gray-900">
                          {chat.name}
                        </h3>
                        <span className="text-xs text-gray-500">{chat.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">
                        {chat.lastMessage}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col bg-gradient-to-br from-teal-200 to-teal-300">
            {/* Chat Header */}
            <div className="bg-white bg-opacity-80 backdrop-blur-sm p-4 border-b border-white border-opacity-30">
              <div className="flex items-center justify-center">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-lg">
                    👨‍💼
                  </div>
                  <h2 className="text-lg font-medium text-gray-900">
                    Martin Randolph
                  </h2>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-6 space-y-4 overflow-y-auto">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === 'me' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-3 rounded-2xl ${
                      msg.sender === 'me'
                        ? 'bg-white bg-opacity-90 text-gray-800 ml-auto'
                        : 'bg-teal-500 bg-opacity-80 text-white'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4">
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-3">
                <div className="flex items-center space-x-3">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="message"
                      className="w-full bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none"
                    />
                  </div>
                  <div className="flex space-x-2 items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
                      <Camera className="w-4 h-4 text-gray-600" />
                    </div>
                    <button
                      onClick={handleSend}
                      className="bg-teal-500 hover:bg-teal-600 text-white text-sm px-4 py-1 rounded-full"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
