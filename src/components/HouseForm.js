import React from 'react'
import {useState} from 'react'



function HouseForm({addHouse}) {
const [name, setName] = useState("")
const [address, setAddress] = useState("")
const [notes, setNotes] = useState("")
const [image, setImage] = useState("")

const handleName =(e)=>{
  setName(e.target.value)
}
const handleAddress =(e)=>{
  setAddress(e.target.value)
}
const handleNotes =(e)=>{
  setImage(e.target.value)
}
const handleImage =(e)=>{
  setImage(e.target.value)
}

const handleSubmit = (e) =>{
  e.preventDefault()
  const formData ={
    name, 
    address,
    notes, 
    image
  }

  
  fetch("http://localhost:4000/houses", {
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(formData)
  })
  .then(res=>res.json())
  .then(newHouse =>{
    addHouse(newHouse)
  })
 
}

  return (
    <form  onSubmit={handleSubmit} >
      <h2>Add New Property</h2>

      <label  htmlFor="name">Name  </label>
      <input className="form-card"type="text" id="name" name="name" value={name} onChange={handleName}/>
        <br></br><br></br>
      <label  htmlFor="address">Address</label>
      <input className="form-card" type="text" id="address" name="address" onChange={handleAddress} />
        <br></br><br></br>
      <label  htmlFor="address">Notes  </label>
      <input className="form-card" type="text" id="address" name="address" onChange={handleNotes} />
       <br></br><br></br>
      <label  htmlFor="image">Image  </label>
      <input className="form-card" type="text" id="image" name="image" onChange={handleImage}/>
        <br></br><br></br>
      <button className='button' type="submit">Add Property</button>
      
      </form>
  )
}

export default HouseForm