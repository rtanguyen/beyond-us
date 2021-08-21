import React from 'react';
import LogoPic from '../assets/BU-Logo_Beyond Us.png';
const Nav = (props)=> {
    const { pages=[], setCurrentPage, currentPage } = props;

      return (
        <div>
          {/* Hello world */}
          <div className="awesome" style={{border: '1px solid red'}}>
            <label htmlFor="name">Enter your name  <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top prelogin-nav">
                <div className="container-fluid nav-container">
                  <div className="col-1" />
                  <div className="col-4">
                    <img src={LogoPic} className="navbar-brand mainLogologoNav" href="#" alt ='logo'></img>
                  </div>
                  <div className="col-2" />
                  <div className="col-3">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdownLeft">
                      <ul className='navbar-nav'>
                          {pages.map((page) => (
                              <li key={page}>
                                  <span className={`nav-item ${
                                    currentPage.name ===page.name&&'navActive'}`}
                                onClick={()=> setCurrentPage(page)}>
                                    {page.name}
                                    </span>
                              </li>
                          ))}
                      </ul>
                      
                     {/*} <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="#ourmission">Our Mission</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#howtohelp">How to Help</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#jointhecause">Join the Cause</a>
                        </li>
                         <li class="nav-item login">
                    <button type="button" class="btn btn-outline-light logButton btn-sm"><a class="nav-link text-light" href="#">Log In</a></button>
                  </li> */}
    
                    </div>
                  </div>
                  <div className="col-1"><button type="button" className="btn btn-outline-light logButton btn-sm"><a className="nav-link text-light" href="login.html">Log In</a></button></div>
                  <div className="col-1" />
                </div>
              </nav>: </label>
            <input type="text" id="name" />
          </div>
          <p>Enter your HTML here</p>
        </div>
      );
 };


  export default Nav;