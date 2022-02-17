import React from "react";
import "./Messenger.css";

function Messenger() {
  return (
    <div className="messenger-container">
      <div className="messenger">
        <div className="messenger-header">
          <div className="messenger-header-title-container">
            <span className="messenger-header-title-dot"></span>
            <span className="messenger-header-title">WASD</span>
          </div>
          <div className="messenger-header-close">X</div>
        </div>

        <div className="messenger-messages">MESSAGES</div>

        <form className="messenger-input" action="">
          <input type="text" placeholder="Type a message..." />
          <input type="submit" value="SEND MESSAGE" />
        </form>
      </div>
    </div>
  );
}

export default Messenger;
