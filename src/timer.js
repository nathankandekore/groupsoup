import React from "react";
// import { useState } from "react";

export default function Timer(props) {
  return (
    <div className="timer">
      <div className="clock-container">
        {props.formatTime(props.displayTime)}
      </div>
      <button className="timer-btn" onClick={props.startTimer}>
        start
      </button>
    </div>
  );
}
