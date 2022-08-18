import React, { useEffect } from "react";
import { useState } from "react";

import generatePDF from "./functionality/CreatePDF";
import "./App.css";
import Logo from "./logo.svg";
import sound from "./Censor Beep Sound Effect (1).mp3";
// import ReactToPrint from "react-to-print";
// import { ComponentToPrint } from "./Components/ComponentToPrint";
// import { useReactToPrint } from "react-to-print";

function App() {
  const [displayTime, setDisplayTime] = useState(10 * 60);
  const [timerActive, setTimerActive] = useState(false);
  const [casePresentation, setCasePresentation] = useState("");
  const [clarifyingQuestions, setClarifyingQuestions] = useState("");
  const [hypothesizing, setHypothesizing] = useState("");
  const [reflection, setReflection] = useState("");
  const [email, setEmail] = useState("");
  const [emailString, setEmailString] = useState("");
  const [contentSaved, setContentSaved] = useState(false);

  const playSoundAudio = (cb) => {
    new Audio(sound).play();
    cb();
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
          playSoundAudio(() => {
            setDisplayTime((displayTime) => null);
            setTimeout(() => {
              setTimerActive((timer) => (timer = false));
              setDisplayTime((displayTime) => 10 * 60);
            }, 1000);
          });
        }
      }, 1000);
      return () => clearInterval(id);
    }
  }, [timerActive, displayTime]);

  const savePDF = (e) => {
    e.preventDefault();
    generatePDF({
      casePresentation,
      clarifyingQuestions,
      hypothesizing,
      reflection
    })
  }

  const updateEmail = (e) => {
    e.preventDefault();
    setEmailString(
      `mailto:${email}?subject=Mail from Our Site&body=Case Presentation:${casePresentation},
      Clarifying Questions: ${clarifyingQuestions}, 
      Hypothosis: ${hypothesizing},
      Reflection: ${reflection}`
    );
    setContentSaved(!contentSaved);
  };

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
            setDisplayTime((displayTime) => 10 * 60);
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
      </form>
      <div className="email-submit">
        <input
          className="email-input"
          placeholder="enter email address"
          type="email"
          value={email}
          // className="reflection textbox-sizing"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        {contentSaved ? (
          <a href={emailString} className="send-email">
            click AGAIN to send to email address
          </a>
        ) : (
          <button onClick={savePDF} className="save-btn">
            SAVE
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
