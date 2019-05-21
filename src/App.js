import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from './Pages/Home'

function App() {
  return (
    <div className="App">
      <div className="top__bar">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="linksContainer">
          <a href="#" className="top__bar__link">
            Home
          </a>
          <a href="#" className="top__bar__link">
            Projects
          </a>
          <a href="#" className="top__bar__link">
            Blog
          </a>
          <a href="#" className="top__bar__link">
            Social
          </a>
        </div>
      </div>
        <Home></Home>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}

      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
