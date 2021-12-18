
/*  NAVBAR
import React  from "react";
import './App.css'
import Home from "./navigationBar/Home";
import Services from "./navigationBar/Services";
import Contact from "./navigationBar/Contact";
import Projects from "./navigationBar/Projects";
import Navbar from "./navigationBar/Navbar";
import { BrowserRouter as Router,Route ,Routes} from "react-router-dom";

const App = () => {

  return (
    
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/projects" element = {<Projects />} />
          <Route path="/services" element = {<Services />} />
          <Route path="/contact" element = {<Contact />} />
        </Routes>
      </Router>  
    </div>

   
  )
}

export default App */




/* CALCULATOR
import React from 'react'
import Calculator from './components/Calculator'
function App() {
  return (
    <div>
      <Calculator />
    </div>
  )
}

export default App */



import React from 'react'
import Employees from './addEmployeeQ3/Employees'
import './App.css'

function App() {
  return (
    <div>
      <Employees />
      
    </div>
  )
}

export default App    

/* Q2
import React from 'react'
import Question2 from './Question2/Question2'
import './App.css';

function App() {
  return (
    <div>
      <Question2 />
    </div>
  )
}

export default App  */


/* Q7
import React from 'react'
import WeatherApp from './weatherApp/WeatherApp'

function App() {
  return (
    <div>
      <WeatherApp />
    </div>
  )
}

export default App  */


/* Q5 CLOCK
import React from 'react'
import Time from './time/Time'
import './App.css'
function App() {
  return (
    <div>
      <Time />
    </div>
  )
}

export default App   */

/*

import React from 'react'
import {connect} from 'react-redux';
import { IncAction } from './redux/actions';
import { DecAction } from './redux/actions';
const App = ({local_variable}) => {
  return(
    <div>
      <center>
        <h2>{local_variable}</h2> <br/>
        <button onClick={IncAction}>Increment</button>
        <button onClick={DecAction}>Decrement</button>
      </center>
      
    </div>)
}

    
  

const mapStateToProps = state => ({
  local_variable : state
})
export default connect(mapStateToProps,{IncAction,DecAction})(App);


*/
