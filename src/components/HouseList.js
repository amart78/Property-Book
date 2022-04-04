import React, {useState, useEffect} from 'react';
import Properties from './Properties';
import HouseForm from './HouseForm'


function HouseList() {
  
  const [allProperties , setAllProperties] = useState( [] )

  useEffect( ()=>{
    fetch ("http://localhost:3000/houses")
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
    <h1>My Properties</h1>
      <ul className="cards">
        {
        allProperties.map( (eachObj)=>{
           return(
            <Properties key={eachObj.id} propertyToRender={eachObj}/>) 
           })
        }
     </ul>
     <HouseForm addHouse={addHouse} />
     </div>
    );
  }


export default HouseList;
