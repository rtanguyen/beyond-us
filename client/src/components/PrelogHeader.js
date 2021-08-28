import React from "react";
import Auth from "../utils/auth";
import LogoPic from "../assets/BU-Logo_Beyond Us.png";
import { Link } from "react-router-dom";

const PrelogHeader = () => {
  return (
    <header className="header">
    {/* NAVIGATION */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top prelogin-nav px-5">
      <div className="container-fluid nav-container ">
      <Link to={"/"} className="navbar-brand mainLogo" style={{
    width: "100px"}}>
            <img src={LogoPic} className="logoNav" style={{ width: "50%" }} />
          </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
          <span />
          <span />
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-center" href="#ourmission">Our Mission</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center" href="#howtohelp">How to Help</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center" href="#jointhecause">Join the Cause</a>
            </li>
            <button type="button" className="btn btn-outline-light logButton btn-sm login ms-2"><Link to="/login" className="nav-link text-light">Log In</Link></button>
          </ul>
        </div>
      </div>
    </nav>
  </header>
    );
};

export default PrelogHeader;
