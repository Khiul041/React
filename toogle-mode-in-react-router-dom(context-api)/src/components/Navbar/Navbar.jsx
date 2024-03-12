import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../contextAPI/ThemeContext";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const {darkMode,toggleMode}=useTheme();
  const linkClassName=darkMode?'darkModeLink':'lightModeLink'
  return (
    <nav className={`${darkMode?'darkMode':'lightMode'}`}>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/" active='true' className={linkClassName}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={linkClassName}>About</NavLink>
        </li>
        <li>
          <NavLink to="/services" className={linkClassName}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={linkClassName}>Contact</NavLink>
        </li>
        <li>
          <button onClick={toggleMode}>
           {darkMode?'Disable Mode':'Enable Mode'}
          </button>
        </li>
      </ul>
      <div className="menuDiv">
        <FiMenu className="menuIcon" onClick={() => setActive(true)} />
      </div>
      <div className={`${active ? "menu active" : "menu"}`} id={`${darkMode?'menuDark':'menuLight'}`}>
        <ul>
          <li>
            <IoMdClose onClick={() => setActive(false)} />
          </li>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/services'>Services</NavLink></li>
          <li><NavLink to='contact'>Contact</NavLink></li>
          <li onClick={toggleMode}>{darkMode?'Disable Mode':'Enable Mode'}</li>
        </ul>
      </div>
    </nav>
  );
}
