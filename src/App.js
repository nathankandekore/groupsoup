import React from "react";
import "./App.css";
import Logo from "./logo.svg";
// import Logo2 from "./logo2.svg";

function App() {
  return (
    <div className="App">
      <div className="titleAndLogo">
        <h1>GroupSoup</h1>
        <img className="logo" src={Logo} alt="logo" />
      </div>

      <div className="timer">timer</div>
      <div className="textbox-container">
        <textarea
          className="case-presentation textbox-sizing"
          placeholder="case presentation"
        ></textarea>
        <textarea
          className="clarifying-questions textbox-sizing"
          placeholder="clarifying questions"
        ></textarea>
        <textarea
          className="hypothesizing textbox-sizing"
          placeholder="hypothesizing"
        ></textarea>
        <textarea
          className="reflection textbox-sizing"
          placeholder="reflection"
        ></textarea>
      </div>
      <button>finish</button>
    </div>
  );
}

export default App;
