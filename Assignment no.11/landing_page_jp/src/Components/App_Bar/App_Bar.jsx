import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../assets/logo.png'
import { IoIosArrowDown } from "react-icons/io";


const App_Bar = () => {
  return (
   <>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mb-4">
  <div class="container-fluid pt-4 ps-5">
    <div style={{width :"270px",borderRight : "solid 1% gray"}} className='pe-4 pt-3'>
      <img className='w-100 mb-3' src={logo} alt="" />
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-3" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item me-3">
          <span className="fs-5">Home</span>
        </li>
        <li class="nav-item me-3">
        <span className="fs-5">About us</span>
        </li>

       <li className='fs-5 me-3'>
          Trainings <IoIosArrowDown className='fs-4' />
       </li>
        <li class="nav-item me-3">
        <span className="fs-5">Contact us</span>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}

export default App_Bar
