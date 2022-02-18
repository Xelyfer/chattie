import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [disableJoin, setDisableJoin] = useState(true);

  useEffect(() => {
    if (name && room) {
      setDisableJoin(false);
    } else {
      setDisableJoin(true);
    }
  }, [name, room]);

  return (
    <div className="home-container">
      <div className="home">
        <h1>Join a chat room!</h1>
        <hr></hr>
        <form className="home-form" autoComplete="off">
          <input
            type="text"
            placeholder="Name"
            name="name_input"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room"
            name="room_input"
            value={room}
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
          {disableJoin ? (
            <button disabled={true} className="join-button">
              Input a name and room to join
            </button>
          ) : (
            <Link to={`/chat?name=${name}&room=${room}`}>
              <button className="join-button" type="submit">
                Join Room
              </button>
            </Link>
          )}
        </form>
      </div>
    </div>
  );
}

export default Home;
