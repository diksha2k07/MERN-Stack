import React from 'react'
import "./NavBar.css";
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div>
        <nav className="navbar">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/useState">UseState</Link></li>
                <li><Link to="/useEffect">UseEffect</Link></li>
                <li><Link to="/form">Form</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar
