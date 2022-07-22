import React from "react";
import { useState } from "react";
import "./App.css";
import Logo from "./logo.svg";

// import Logo2 from "./logo2.svg";
// import Timer from "./timer";

function App() {
  // let minutes = 20;
  // let seconds = 0;

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(20);

  function startTimer(event) {
    if (minutes > 0) {
      setMinutes((minutes) => minutes - 1);
      setSeconds((seconds) => (seconds = 59));
    }
    setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
  }

  return (
    <div className="App">
      <div className="titleAndLogo">
        <h1>GroupSoup</h1>
        <img className="logo" src={Logo} alt="logo" />
      </div>

      <div className="timer">
        <div className="clock-container">
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </div>
        <button className="timer-btn" onClick={() => startTimer()}>
          start
        </button>
      </div>

      <div className="textbox-container">
        <textarea
          className="case-presentation textbox-sizing"
          placeholder="case presentation"
          spellCheck="false"
        ></textarea>
        <textarea
          className="clarifying-questions textbox-sizing"
          placeholder="clarifying questions"
          spellCheck="false"
        ></textarea>
        <textarea
          className="hypothesizing textbox-sizing"
          placeholder="hypothesizing"
          spellCheck="false"
        ></textarea>
        <textarea
          className="reflection textbox-sizing"
          placeholder="reflection"
          spellCheck="false"
        ></textarea>
      </div>
      <button>finish</button>
    </div>
  );
}

export default App;
