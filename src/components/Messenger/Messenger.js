import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import "./Messenger.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Messenger() {
  const connect = "https://chattie-xelyfer.herokuapp.com";
  const [room, setRoom] = useState("");
  const [chatterState, setChatterState] = useState({ name: "", message: "" });
  const [chat, setChat] = useState([]);

  const location = useLocation();
  const socketRef = useRef();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const qName = params.get("name");
    const qRoom = params.get("room");

    setChatterState({ name: qName, message: "" });
    setRoom(qRoom);
  }, []);

  useEffect(() => {
    socketRef.current = io.connect(connect);
    socketRef.current.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
    return () => socketRef.current.disconnect();
  }, [chat]);

  function handleSubmit(e) {
    e.preventDefault();

    if (chatterState.message === "") {
      return;
    }

    const { name, message } = chatterState;

    socketRef.current.emit("message", { name, message });
    setChatterState({ name, message: "" });
  }

  function renderChat() {
    return chat.map(({ name, message }, index) => {
      return (
        <div key={index}>
          <h3>
            {name}: <span>{message}</span>
          </h3>
        </div>
      );
    });
  }

  return (
    <div className="messenger-container">
      <div className="messenger">
        <div className="messenger-header">
          <div className="messenger-header-title-container">
            <span className="messenger-header-title-dot"></span>
            <span className="messenger-header-title">{room}</span>
          </div>
          <Link to="/">
            <span className="messenger-header-close">X</span>
          </Link>
        </div>

        <div className="messenger-messages">{renderChat()}</div>

        <form
          className="messenger-input"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <input
            type="text"
            placeholder="Type a message..."
            value={chatterState.message}
            name="message_input"
            onChange={(e) =>
              setChatterState({
                name: chatterState.name,
                message: e.target.value,
              })
            }
          />
          <input type="submit" value="SEND MESSAGE" />
        </form>
      </div>
    </div>
  );
}

export default Messenger;
