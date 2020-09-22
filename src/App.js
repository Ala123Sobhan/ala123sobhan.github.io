import React from "react";
import logo from "./Ala.JPG";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ala Sobhan</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>My name is Ala Sobhan and I'm going to master React!</p>
        <a
          className="App-link"
          href="https://github.com/Ala123Sobhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
