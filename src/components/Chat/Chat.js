import React from "react";
import "./Chat.css";

import Messenger from "../Messenger/Messenger";

function Chat() {
  return (
    <div className="chat-container">
      <div className="chat">
        <div className="chat-room">
          <Messenger />
        </div>
        <div className="chat-message">
          <h2>Real-Time Chatting Application.</h2>
          <p>Talk to yourself or with another person!</p>
          <p>
            Created using React and <div className=""></div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
