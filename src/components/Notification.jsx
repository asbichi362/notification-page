import React from 'react';

const Notification = ({ title, content, isRead, onMarkAsRead }) => {
  return (
    <div
      className={`notification p-4 border ${
        isRead ? 'bg-gray-100' : 'bg-yellow-100'
      }`}
      onClick={onMarkAsRead}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Notification;
