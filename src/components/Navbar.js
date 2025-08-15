
import React, { useState } from 'react';
import './Navbar.css'; 
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="AT Digital logo" />
      </div>

      <ul className="navbar-links desktop-links">
        <li><a href="/services">SERVICES</a></li>
        <li><a href="/services">ABOUT US</a></li>
        <li><a href="/services">CONTACT US</a></li>
        <li><a href="/services">CAREERS</a></li>
      </ul>

      <ul className={`navbar-links mobile-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="/services">HOME</a></li>
        <li><a href="/services">SERVICES</a></li>
        <li><a href="/services">ABOUT US</a></li>
        <li><a href="/services">CONTACT US</a></li>
        <li><a href="/services">CAREERS</a></li>
      </ul>

      <div 
        className="navbar-hamburger" 
        onClick={() => setMenuOpen(!menuOpen)} 
        aria-label="Toggle menu" 
        role="button" 
        tabIndex={0} 
        onKeyPress={(e) => { if (e.key === 'Enter') setMenuOpen(!menuOpen); }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
