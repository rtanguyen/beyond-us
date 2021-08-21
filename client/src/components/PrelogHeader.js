import React from 'react';
import Auth from '../utils/auth'
import LogoPic from '../assets/BU-Logo_Beyond Us.png';

const PrelogHeader = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top prelogin-nav">
      <div className="container-fluid nav-container">
        <div className="col-1" />
        <div className="col-4">
          <a className="navbar-brand mainLogo" href="#"><img src="BU-Logo_Beyond Us.png" className="logoNav" style={{width: '10%'}} /></a>
        </div>
        <div className="col-2" />
        <div className="col-3">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdownLeft">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#ourmission">Our Mission</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#howtohelp">How to Help</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#jointhecause">Join the Cause</a>
              </li>
              {/* <li class="nav-item login">
                <button type="button" class="btn btn-outline-light logButton btn-sm"><a class="nav-link text-light" href="#">Log In</a></button>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="col-1"><button type="button" className="btn btn-outline-light logButton btn-sm"><a className="nav-link text-light" href="login.html">Log In</a></button></div>
        <div className="col-1" />
      </div>
    </nav>
  );
};




export default PrelogHeader;