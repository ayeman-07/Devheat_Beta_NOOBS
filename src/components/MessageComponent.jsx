// MessagingPage.jsx

import React from 'react';
import '../Sass/MessageComponent.scss';

const MessagingPage = () => {
  return (
    <div className="messaging-container">
      <div className="chat-area">
        <div className="message other">Hello! How are you?</div>
        <div className="message user">Hi! I'm good, thanks.</div>
        <div className="message other">That's great to hear!</div>
      </div>
      <div className="input-container">
        <input type="text" placeholder="Type your message..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default MessagingPage;
