//import React from 'react'
import Header from './conponents/Header'
import Navbar from './conponents/Navbar'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Home from './conponents/Home'
//import Dogs from './conponents/Dogs'
import React, { useEffect, useState } from "react";

 function useDogs() {
    const [dogs, setDogs] = useState({
      data: {},
    });
  
    useEffect(() => {
      const getData = async () => {
        const resp = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await resp.json();  // <-- this
        setDogs({ data });
        console.log(resp, data);
      };
      getData();
    }, []);
    return [dogs, setDogs];  // <-- this
  }
  
  function App() {
  return (
    <Router>
    <div className="container">
    <Header/>
    <Navbar/>
     
    </div>

    <Routes >

      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/search" element={<search/>}></Route>
    
      </Routes>
    </Router>
  );

  }


export default App;
