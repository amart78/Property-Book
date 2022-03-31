import React from 'react'
import {useState} from 'react'


function HouseForm() {
const [name, setName] = useState("")
const [address, setAddress] = useState("")
const [image, setImage] = useState("")

const handleName =()=>{

}

  return (
    <form>
      <h3>Add New Property</h3>

      <label htmlFor="name">Name</label>
      <input type="text" onChange={handleName}/>

      <label htmlFor="Address"></label>
      <textarea/>
      
      
      
      </form>
  )
}

export default About