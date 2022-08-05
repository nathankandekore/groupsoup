import React, { useEffect } from "react";
import { useState, useRef } from "react";
import "./App.css";
import Logo from "./logo.svg";
import sound from "./Censor Beep Sound Effect (1).mp3";
import ReactToPrint from "react-to-print";
import { ComponentToPrint } from "./Components/ComponentToPrint";

function App() {
  const [displayTime, setDisplayTime] = useState(25 * 60);
  const [timerActive, setTimerActive] = useState(false);
  const [casePresentation, setCasePresentation] = useState("");
  const [clarifyingQuestions, setClarifyingQuestions] = useState("");
  const [hypothesizing, setHypothesizing] = useState("");
  const [reflection, setReflection] = useState("");
  const componentRef = useRef(ComponentToPrint.ref);
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
      <form className="textbox-container">
        <textarea
          type="text"
          value={casePresentation}
          onChange={(e) => setCasePresentation(e.target.value)}
          className="case-presentation textbox-sizing"
          placeholder="case presentation"
          spellCheck="false"
        ></textarea>
        <textarea
          type="text"
          value={clarifyingQuestions}
          onChange={(e) => setClarifyingQuestions(e.target.value)}
          className="clarifying-questions textbox-sizing"
          placeholder="clarifying questions"
          spellCheck="false"
        ></textarea>
        <textarea
          type="text"
          value={hypothesizing}
          onChange={(e) => setHypothesizing(e.target.value)}
          className="hypothesizing textbox-sizing"
          placeholder="hypothesizing"
          spellCheck="false"
        ></textarea>
        <textarea
          type="text"
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          className="reflection textbox-sizing"
          placeholder="reflection"
          spellCheck="false"
        ></textarea>
        <div>
          <ReactToPrint
            trigger={
              () => <button>PRINT me</button>
              //can return a React component or element
            }
            //returns the reference value of the component you want to print
            content={() => componentRef.current}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
