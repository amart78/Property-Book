import React from 'react'
import Properties from './Properties';

function HouseList({allProperties}) {
      
   
    
  return( 
    <ul className="cards">
      {
      allProperties.map( (eachObj)=>{
        return(
       <Properties key={eachObj.id} propertyToRender={eachObj}/> )
      })  
    }
    </ul>
  )
}


export default HouseList;