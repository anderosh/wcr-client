import React from 'react';

const Message = ({ msg }) => (
  <div className="message-container">
    <h4>{msg.username}</h4>
    <div>{msg.text}</div>
    <span>{msg.date}</span>
  </div>
);

export default Message;
