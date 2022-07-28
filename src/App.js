import React from 'react'
import Header from './conponents/Header'
import Navbar from './conponents/Navbar'
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="container">
    <Header/>
    <Navbar/>
     
    </div>
    </Router>
  );
}

export default App;
