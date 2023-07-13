import React from "react"
import Navbar from "./components/navBar/Navbar"
import Home from "./components/home/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Services from "./components/Services"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css'


function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' compoent={Home} exact>
            <Home />
          </Route>
          <Route path='/about' compoent={About} exact>
            <About />
          </Route>
          <Route path='/contact' compoent={Contact} exact>
            <Contact />
          </Route>
          <Route path='/services' compoent={Services} exact>
            <Services />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
