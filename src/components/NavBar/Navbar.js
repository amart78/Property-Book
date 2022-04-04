import React, { Component } from 'react'
import {MenuItems} from "./MenuItems"
import "./Navbar.css"
import { Link } from "react-router-dom"


function Navbar(){

    return(
        <div>
           <nav className="NavbarItems">
           <h1 className="navbar-logo">Property Book</h1>
           <img className='icon' src="https://www.freeiconspng.com/uploads/house-icon-png-white-32.png"></img>
         
               <Link className='nav-links' to="/">Home</Link>
              
               <Link className='nav-links' to="/houselist">Properties</Link>

               <Link className='nav-links' to="/marketing">Marketing</Link>
           </nav>
        </div>
       )
                }

export default Navbar