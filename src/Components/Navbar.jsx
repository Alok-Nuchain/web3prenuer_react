import React from 'react';
import "../assets/css/style.css";
import "../assets/css/style-2.css";
import "../assets/css/index.css";
import web3pLogo from "../assets/images/web3plogo.png"


export const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg position-fixed w-100 bg-white">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={web3pLogo}
              alt="Logo"
              style={{ width: '168px' }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll d-md-flex justify-content-md-center flex-grow-1">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Why Us
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Contact Us</a>
              </li>
            </ul>
            <div>
              <button className="login-btn">Log in</button>
              <button className="signin-btn">Sign up</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
