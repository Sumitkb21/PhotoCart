import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../NotLogin/logo.svg'
import "../NotLogin/navbar.css"
import cartlogo from "./cartlogo.png"
import profilelogo from "./profilelogo.png"
const UserNavbar = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-red">
        <div className="container-fluid my-0">
          <NavLink className="navbar-brand" to="/user/home">
            <div className="logo-cls">
              <img src={logo} alt="logo" width="70px"  />
              <h5 className="logotext" style={{  marginLeft: '10px', marginTop: '5px', background: 'linear-gradient(to right,  #000000 ,#000001)', WebkitBackgroundClip: 'text', color: 'transparent', fontFamily: 'Helvetica Neue' }}> <b> ClickToFrames </b></h5>
            </div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick=""///some handler were calling from here 
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/user/home">
                  <h5 style={{fontFamily: 'Helvetica Neue' , marginTop: '5px'}}>Home</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/user/adminportfolio">
                  <h5 style={{fontFamily: 'Helvetica Neue', marginTop: '5px'}}>About</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/user/cart">
                <h5 style={{fontFamily: 'Helvetica Neue'}}><img src={cartlogo} alt="logo" width="40px"  /></h5> 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/user/profile">
                <h5 style={{fontFamily: 'Helvetica Neue', marginTop: '5px'}}><img src={profilelogo} alt="profilelogo" width="30px"  /></h5> 
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default UserNavbar
