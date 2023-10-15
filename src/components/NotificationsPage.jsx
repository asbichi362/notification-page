import React, { useState } from 'react';

const NotificationsPage = () => {
  const [unreadCount, setUnreadCount] = useState(5); // Initial unread message count
  const [messages, setMessages] = useState([
    {
      id: 1,
      user:'Aliyu',
      title: 'Important Update',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isRead: false,
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      user:'Musa',
      title: 'New Message',
      content: 'A new message has been received from John Doe.',
      isRead: false,
      timestamp: '3 hours ago',
    },
    {
      id: 3,
      user:'Ummi',
      title: 'Event Reminder',
      content: 'Reminder: Upcoming team meeting at 2:00 PM.',
      isRead: false,
      timestamp: 'Yesterday',
    },
    {
      id: 4,
      user:'Mami',
      title: 'Payment Confirmation',
      content: 'Your payment of $50 has been successfully processed.',
      isRead: false,
      timestamp: '2 days ago',
    },
    {
      id: 5,
      user:'Bilkisu',
      title: 'Feedback Request',
      content: 'Please take a moment to provide feedback on our service.',
      isRead: false,
      timestamp: '3 days ago',
    },
  ]);

  const handleMarkAsRead = (messageId) => {
    const updatedMessages = messages.map((message) =>
      message.id === messageId ? { ...message, isRead: true } : message
    );
    setMessages(updatedMessages);

    // Decrease the unread count if the message was unread
    if (!messages.find((message) => message.id === messageId).isRead) {
      setUnreadCount(unreadCount - 1);
    }
  };

  const handleMarkAllAsRead = () => {
    const updatedMessages = messages.map((message) => ({
      ...message,
      isRead: true,
    }));
    setMessages(updatedMessages);
    setUnreadCount(0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notification Messages</h1>
      <div className="mb-4">
        <button
          onClick={handleMarkAllAsRead}
          className="px-4 py-2 rounded-md bg-sky-500/75"
        >
          Mark All as Read
        </button>
        <p className="mb-2">Unread Messages: {unreadCount}</p>
      </div>
      <div className="bg-gray-200 p-4 rounded-md">

        <div className="border-b border-gray-300 mb-4" />
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${
              message.isRead ? 'bg-gray-300' : 'bg-white'
            } p-2 rounded-md mb-2 cursor-pointer`}
            onClick={() => handleMarkAsRead(message.id)}
          >
            <div  class=" block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className='text-blue-500 hover:underline cursor-pointer focus:text-red-500'>
              <div className="text-gray-700">{message.user}</div>
                <div className="font-bold">{message.title}</div>
                <div className="text-gray-700">{message.content}</div>
                <div className="text-gray-700">{message.timestamp}</div>
              </div>
             
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default NotificationsPage;