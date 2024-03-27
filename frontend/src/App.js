import React from 'react'
import Home from './components/home.js'
import {Routes,Route} from 'react-router-dom'
import Portfolio from './components/portfolio.js'
import Login from './components/login.js'
import Signup from './components/signup.js'

const App = () => {
  return(
    <Routes>
    <Route path="/" element= {<Home/>}/>;
    <Route path="/portfolio" element= {<Portfolio/>}/>;
    <Route path="/login" element= {<Login/>}/>;
    <Route path="/signup" element= {<Signup/>}/>;
    </Routes>
  )
}

export default App
