import React, { useEffect, useState } from 'react'

// propertycard
function Properties({allManagers, propertyToRender, handlePropertyEdit}) {
  console.log(allManagers, "allmanagers")

    const [ showEditForm, toggleEditForm ] = useState(false)
    // userInfoBeingEdited, updateUserInfoBeingEdited
    const [ editedProperty, setEditedProperty] = useState(
        {
          name: "", 
          address: "",
          notes: "", 
          image: "",
          property_manager: "",
          manager_id: "",
        }
      )

    const  setPropertyDataForEdit =() =>{
      setEditedProperty(propertyToRender)
    }
    useEffect(setPropertyDataForEdit, [])
   


    const handleName =(e)=>{
      setEditedProperty({
        ...editedProperty,
        name: e.target.value,
      })
    }
    const handleAddress =(e)=>{
      setEditedProperty({
        ...editedProperty,
        address: e.target.value,
      })    }
    const handleNotes =(e)=>{
      setEditedProperty({
        ...editedProperty,
        notes: e.target.value,

      })    }
    const handleImage =(e)=>{
      setEditedProperty({
        ...editedProperty,
        image: e.target.value,
      })    }
    const handleManager =(e)=>{
      const manager = allManagers.filter(manager => manager.id == e.target.value)[0]
      console.log(manager)
      setEditedProperty({
        ...editedProperty,
        property_manager: manager.name,
        manager_id: manager.id,
      })    }


    const handleEditSubmit = (e)=>{
      e.preventDefault()
      toggleEditForm(false)
      handlePropertyEdit(editedProperty, propertyToRender.id)
    }

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
               
                <button onClick={ (e) => {
                    toggleEditForm(!showEditForm) 
        
                  } }>
                  
                  Edit 
                </button>

                {
                showEditForm?
                (<form onSubmit={handleEditSubmit}>
                   
                    <h3>Edit Property Details</h3>

                    <label htmlFor="name">Name:     </label>
                    <input className='form-card' type="text" id="name" name="name" defaultValue={editedProperty.name} onChange={(handleName)}/>

                      <br></br><br></br>

                    <label htmlFor="address">Address: </label>
                    <input className='form-card' type="text" id="address" name="address" defaultValue={editedProperty.address} onChange={handleAddress} />

                      <br></br><br></br>

                    <label htmlFor="address">Notes:     </label>
                    <input className='form-card' type="text" id="address" name="address" defaultValue={editedProperty.notes} onChange={handleNotes} />

                    <br></br><br></br>

                    <label htmlFor="image">Image:     </label>
                    <input className='form-card' type="text" id="image" name="image" defaultValue={editedProperty.image} onChange={handleImage}/>

                    <br></br><br></br>

                    <label htmlFor="manager">Property Manager:    </label>
                    <select name="manager" id="manager" value={handleManager}>
                      {(allManagers || []).map(manager => (<option value={manager.id}>{manager.name}</option>))}
                    </select>

                      <br></br><br></br>

                    <button className='button' type="submit">Confirm Changes</button>
      
      
                </form>) 
                  : null}
              <div className="card__detail">
            </div>
          </div>
        </div>
      </li>
    );
  }

   

export default Properties;