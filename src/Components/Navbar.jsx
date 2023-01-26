import { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from '../Images/m.png';
const Navbar = (props) => {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <img src={LOGO} className="bi me-2" width="80" height="50"/>
            
            <span className="fs-4">Mario Granados</span>
          </Link>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/" className={props === 'home' ? "nav-link active": 'nav-link'} aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-link active">
                Resume
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Navbar;
