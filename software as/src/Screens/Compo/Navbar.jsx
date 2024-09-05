import React, { useState } from "react";
import "./Navbar.css";
import { IoIosMenu } from "react-icons/io";
import logo from "../../../src/assets/edu.png"
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate  = useNavigate();
  const clear = ()=>{
    localStorage.clear();
    navigate('/')
  } 
  return (
    <nav className="navbar" >
      <div  className="navbar-logo ">
        
        <h1 className="d-inline-block"><img src={logo} alt="edupulse"  style={{height:"22px",width:"80px"}} he srcset="" />EduPulse</h1>
        <span onClick={clear} className="btn btn-primay " style={{marginTop:"-10px"}}>Logout
          
        </span>

        
      </div>
      
      <div className="menu-toggle" >
      
      <button className="toggle-btn" onClick={props.functoggleSidebar}>
      <IoIosMenu className="fs-1 " />

      </button>
      </div>
    </nav>
  );
};

export default Navbar;
