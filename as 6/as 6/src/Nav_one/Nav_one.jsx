import React from 'react'

const Nav_one = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary " style={{paddingTop : "0"}}>
  <div className="container-fluid navbar-dark" style={{background : "#00306E"}}>
    <a className="navbar-brand" href="#"><i className="fa-solid fa-phone"></i> (+1) 3344 999 999</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">info@reactheme.com</a>
        </li>
      </ul>
      <span className="navbar-text d-flex gap-3 me-3" style={{color : "white"}}>

      <i className="fa-brands fa-facebook-f "></i>
      <i className="fa-brands fa-twitter "></i>
      <i className="fa-brands fa-linkedin-in "></i>
      </span>
    </div>
  </div>
</nav>
  )
}

export default Nav_one
