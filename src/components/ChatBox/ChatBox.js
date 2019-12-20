import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getMessages, newMessage } from './ChatAPI';
import Message from '../Message/Message';

const ChatBox = ({ messages, getMessages, newMessage }) => {
  const [msgText, setMsgText] = useState('');

  useEffect(() => {
    getMessages();
  }, []);

  const handleText = event => {
    setMsgText(event.target.value);
  };

  const handelSubmit = event => {
    event.preventDefault();
    newMessage(msgText);
  };

  return (
    <div className="chat-box-container">
      <div>Users</div>
      <div>
        <h3>Messages</h3>
        <div>
          {messages.length > 0 &&
            messages.map(msg => <Message msg={msg} key={msg._id} />)}
        </div>
      </div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="New message"
          onChange={handleText}
        ></input>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  messages: state.messages
});

const mapDispatchToProps = {
  getMessages,
  newMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
