import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getMessages, newMessage, youTubeBot } from './ChatAPI';
import Message from '../Message/Message';

const ChatBox = ({
  messages,
  newMessage,
  videoId,
  getMessages,
  youTubeBot
}) => {
  const [msgText, setMsgText] = useState('');

  useEffect(() => {
    getMessages();
  }, []);

  const handleText = event => {
    setMsgText(event.target.value);
  };

  const handelSubmit = event => {
    event.preventDefault();
    msgText.startsWith('/youtube')
      ? youTubeBot(msgText.substr(9, msgText.length))
      : newMessage(msgText);
  };

  return (
    <div className="chat-box-container">
      <div>Users</div>
      <div>
        <h3>Messages</h3>
        <div>
          {messages.length > 0 &&
            messages.map(msg => <Message msg={msg} key={msg._id} />)}
          {videoId.length > 0 && messages.map(id => <p key={id}>{id}</p>)}
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
  messages: state.messages,
  videoId: state.videoId
});

const mapDispatchToProps = {
  getMessages,
  newMessage,
  youTubeBot
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
