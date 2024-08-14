import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Add this for styling
import logo from '../../assets/navlogo.png'
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav  className="navbar">
        <img src={logo} alt="Logo" />
      <ul style={{display:  isOpen? 'block' : "none"}} className={`nav-links ${isOpen ? 'open' : 'd-none'} `}> 
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/about">About </NavLink></li>
      </ul>
      <ul className={`desktopnav`}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li ><NavLink to="/about">About </NavLink></li>
      </ul>
      <div className="shopping-cart">
        <FontAwesomeIcon style={{color : 'black'}} icon={faShoppingCart} />
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon style={{color : 'black'}} icon={faBars} />
      </div>
    </nav>
    </>
  );
}

export default Navbar;
