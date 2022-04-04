import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import HouseList from './components/HouseList';
import Marketing from './components/Marketing';
import Home from './components/Home';

function App() {


  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/houselist" element={ <HouseList /> }/>
        <Route path="/marketing" element={<Marketing />}/>
      </Routes>
  
    </div>
  );
}

export default App;
