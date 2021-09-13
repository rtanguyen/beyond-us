import React from "react";
import Auth from "../utils/auth";
import LogoPic from "../assets/BU-Logo_Beyond Us.png";
import { Link } from "react-router-dom";

const PostlogHeader = () => {
  return (
    <header className="header">
      {/* NAVIGATION */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top prelogin-nav px-5">
        <div className="container-fluid nav-container ">
          <Link to={"/home"}>
            <img
              src={LogoPic}
              className="logoNav navbar-brand mainLogo"
              style={{ width: "13%" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
            <span />
            <span />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={`/home`} className="nav-link">
                  Happening Now
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/home`} className="nav-link">
                  Trending
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#news">
                  News
                </a>
              </li>
              <li className="nav-item">
                <Link to={`/add`} className="nav-link">
                  Create
                </Link>
              </li>
              <button
                type="button"
                className="btn btn-outline-light logButton btn-sm login ms-2"
              >
                <Link to="/" className="nav-link text-light">
                  Log out
                </Link>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default PostlogHeader;
