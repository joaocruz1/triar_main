import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="#">Home</a></li>
        <li className="navbar-item"><a href="#">About</a></li>
        <li className="navbar-item"><a href="#">Services</a></li>
        <li className="navbar-item"><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
