import React, { Component } from 'react'
import {MenuItems} from "./MenuItems"
import "./Navbar.css"


function Navbar(){

       return(
           <nav className="NavbarItems" >
               <h1 className="navbar-logo">Property Book</h1>
               <img className='icon' src="https://www.freeiconspng.com/uploads/house-icon-png-white-32.png"></img>
               <ul className= 'nav-menu'>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>    
                        )
                    })}
               </ul>
           </nav>
       )
                }

export default Navbar