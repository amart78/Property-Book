import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import House from './components/House';
import Marketing from './components/Marketing';
import Home from './components/Home';

function App() {


  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/house" element={ <House /> }/>
        <Route path="/marketing" element={<Marketing />}/>
      </Routes>
  
    </div>
  );
}

export default App;
