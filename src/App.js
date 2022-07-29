import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Logo from "./logo.svg";
import sound from "./Censor Beep Sound Effect (1).mp3";

function App() {
  const [displayTime, setDisplayTime] = useState(1 * 60);
  const [timerActive, setTimerActive] = useState(false);
  // const [soundAudio, setSoundAudio] = useState(new Audio(sound));

  const playSoundAudio = () => {
    new Audio(sound).play();
  };

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return (
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    );
  };

  useEffect(() => {
    if (timerActive) {
      const id = setInterval(() => {
        if (displayTime > 0) {
          setDisplayTime((displayTime) => displayTime - 1);
        } else {
          playSoundAudio();
          setDisplayTime((displayTime) => null);
          setTimerActive((timer) => (timer = false));
          setDisplayTime((displayTime) => 25 * 60);
        }
      }, 1000);
      return () => clearInterval(id);
    }
  }, [timerActive, displayTime]);

  //reset logic: on click, setDisplay time == 25* 60
  //reset button only to appear if clock stopped (timer active is false)

  return (
    <div className="App">
      <div className="titleAndLogo">
        <h1>GroupSoup</h1>
        <img className="logo" src={Logo} alt="logo" />
      </div>

      <div className="timer">
        <div className="clock-container">{formatTime(displayTime)}</div>
        {timerActive === false ? (
          <button className="timer-btn" onClick={() => setTimerActive(true)}>
            START
          </button>
        ) : (
          <button className="timer-btn" onClick={() => setTimerActive(false)}>
            STOP
          </button>
        )}
      </div>
      {timerActive === false ? (
        <button
          className="reset-btn"
          onClick={() => {
            setDisplayTime((displayTime) => 25 * 60);
          }}
        >
          reset
        </button>
      ) : null}
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
