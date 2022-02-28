import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light green_bg">
            <Link to='/' className="navbar-brand">Mario Granados</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                    <Link to='/Portfolio' className="nav-link" href="#">Portfolio</Link>
                    <Link to='/Footer' className='nav-link'>Contact</Link>
                    <Link to="/AboutMe" className="nav-link" href="#">About Me</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;