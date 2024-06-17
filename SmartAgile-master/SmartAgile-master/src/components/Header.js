import React from 'react';
import logo from '../assets/smartagilelogo.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Header = () => {
  return (
    <header className="container-fluid bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Smart Agile" style={{ width: '50px', height: 'auto' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/Content" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" id="dashboardDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dashboard
              </a>
              <ul className="dropdown-menu" aria-labelledby="dashboardDropdown">
                <li><Link to="/employee" className="dropdown-item">Employee Dashboard</Link></li>
                <li><Link to="/userprofile" className="dropdown-item">User Profile</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link btn btn-outline-success">Register</Link>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link btn btn-outline-success dropdown-toggle" id="loginDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Login
              </a>
              <ul className="dropdown-menu" aria-labelledby="loginDropdown">
              <li><Link to="/adminlogin" className="dropdown-item">Admin Login</Link></li>
                <li><Link to="/" className="dropdown-item">Employee Login</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
