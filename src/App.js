import React from "react";
//import logo from "./Ala.JPG";
import "./App.css";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
             <li>
               <Link to="/">Home</Link>
             </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/contact">
            <Contact/>
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
   
     
    
  );
}

export default App;
  {/* <header className="App-header">
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
  */}