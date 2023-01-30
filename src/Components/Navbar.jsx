import { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../Images/m.png";
import './navbar.css'
const Navbar = (props) => {
  const linkColor = {
    color: 'white',
  }
  return (
    <>
      <div className="container-fluid bg-secondary text">
        <div className="container">
          <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <Link
              to="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
            >
              <img
                src={LOGO}
                style={{ backgroundColor: "#4392F1", borderRadius: "50%", border: 'solid black 1px' }}
                className="bi me-2"
                width="50"
                height="50"
              />

              <span className="fs-4" style={linkColor}>Mario Granados</span>
            </Link>

            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link
                  to="/"
                  className={props === "home" ? "nav-link active" : "nav-link"}
                  aria-current="page"
                  style={linkColor}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link" style={linkColor}>
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" style={linkColor}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" style={linkColor}>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <a href="https://www.linkedin.com/in/marioagranados/" target='_blank' className="nav-link text-light">Resume</a>
              </li>
            </ul>
          </header>
        </div>
      </div>
    </>
  );
};

export default Navbar;
