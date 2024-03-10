import React, { useState } from 'react'
import './Navbar.css'
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
    const [active,setActive]=useState(false)
  return (
    <nav>
        <div className="logo">
        <h1>Logo</h1>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li><button>Login</button></li>
        </ul>
        <div className="menuDiv">
        <FiMenu className='menuIcon' onClick={()=>setActive(true)}/>
        </div>
        <div className={`${active?'menu active':'menu'}`}>
            <ul>
                <li><IoMdClose onClick={()=>setActive(false)}/></li>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Login</li>
            </ul>
        </div>
    </nav>
  )
}
