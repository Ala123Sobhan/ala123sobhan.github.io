import React from 'react'
import About from "./About"
import Projects from "./Projects"
import Home from "./Home"
import Contact from "./Contact"
import {Switch, Route} from "react-router-dom"
function PageInfo() {
    return (
        <div>
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
    )
}

export default PageInfo
