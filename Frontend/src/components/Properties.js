import React from 'react'


function Properties({propertyToRender}) {


   
    return (
      <li className="cards__item">
        <div className="card">
          <img 
            src={propertyToRender.image}
            alt={propertyToRender.name}
            className="card__image"
          />
          
          <div className="card__content">
            <div className="card__title">{propertyToRender.name}</div>
            <p className="card-text">{propertyToRender.address}</p>
            <p className="card-text">{propertyToRender.notes}</p>
            <p className="card-text">{propertyToRender.property_manager}</p>
            <div className="card__detail">
            </div>
            </div>
        </div>
      </li>
    );
  }

   

export default Properties;