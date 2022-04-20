import React, {useState, useEffect} from 'react';
import Properties from './Properties';
import HouseForm from './HouseForm'
import Managers from './Managers';


function House() {
  
  const [allProperties , setAllProperties] = useState( [] )
  const [allManagers, setAllManagers] = useState( [])


  useEffect( ()=>{
    fetch ("http://localhost:9292/manager")
    .then (res => res.json())
    .then ((managers)=>{
      setAllManagers(managers)
    })
  
    }, [] )

  useEffect( ()=>{
    fetch ("http://localhost:9292/house")
    .then (res => res.json())
    .then ((properties)=>{
      setAllProperties(properties)
    })
  
    }, [] )

  const addHouse = (newHouse) =>{
    setAllProperties([...allProperties, newHouse])
  }
    
  return ( 
    <div>
    <h1>The Properties</h1>
      <ul className="cards">
        {
        allProperties.map( (eachObj)=>{
           return(
            <Properties key={eachObj.id} propertyToRender={eachObj}/>) 
           })
        }
     </ul>
     <h1>Meet The Property Managers</h1>
     <ul className="cards">
        {
        allManagers.map( (eachObj)=>{
           return(
            <Managers key={eachObj.id} managerToRender={eachObj}/>) 
           })
        }
     </ul>
     <HouseForm addHouse={addHouse} />
     </div>
    );
  }


export default House;
