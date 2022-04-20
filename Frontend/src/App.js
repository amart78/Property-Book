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


// For this project, you must:

// Use Active Record to interact with a database.
// Have at least two models with a one-to-many relationship.
// At a minimum, set up the following API routes in Sinatra:
    // create and read actions for both models
    // full CRUD capability for one of the models
// Build a separate React frontend application that interacts with the API to perform CRUD actions.
// Use good OO design patterns. You should have separate classes for each of your models, and create instance and class methods as necessary.