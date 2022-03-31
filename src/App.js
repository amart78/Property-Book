import React, {useState, useEffect} from 'react';
import './App.css';
import HouseList from './components/HouseList';
import Navbar from "./components/NavBar/Navbar";
import Properties from './components/Properties';



function App() {

  const [allProperties , setAllProperties] = useState( [] )

  useEffect( ()=>{
    fetch ("http://localhost:3000/houses")
    .then (res => res.json())
    .then ((data)=>{
      setAllProperties(data)
    })
  
    }, [] )

  return (
    <div>
      <Navbar />
  
     <HouseList allProperties={allProperties}/>
    </div>
  );
}

export default App;
