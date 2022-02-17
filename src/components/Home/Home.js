import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home">
        <h1>Join</h1>
        <hr></hr>
        <form className="home-form" action="">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Room" />
          <button type="submit">Join Room</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
