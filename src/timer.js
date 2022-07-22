import React from "react";
// import { useState } from "react";

export default function Timer(props) {
  let minutes = 20;
  let seconds = 0;

  return (
    <div className="timer">
      <div className="clock-container">
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <button className="timer-btn" onClick={() => console.log("clicked")}>
        start
      </button>
    </div>
  );
}
