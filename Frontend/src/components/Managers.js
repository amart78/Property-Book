import React from 'react'


function Managers({managerToRender}) {


   
    return (
      <li className="cards__item">
        <div className="card">
          <img 
            src={managerToRender.image}
            alt={managerToRender.name}
            className="card__image"
          />
          
          <div className="card__content">
            <div className="card__title">{managerToRender.name}</div>
            <p className="card__text">{managerToRender.properties_managing}</p>
            <p className="card__text">{managerToRender.bio}</p>
            <div className="card__detail">
            </div>
            </div>
        </div>
      </li>
    );
  }

   

export default Managers;