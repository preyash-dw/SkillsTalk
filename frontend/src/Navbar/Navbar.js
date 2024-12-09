import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../Assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      {/* Navbar Left - Logo */}
      <div className="navbar-left">
        <img src={Logo} alt="Logo" className="navbar-logo" />
        <span className="navbar-title">SKILLSTOCK</span>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="navbar-hamburger" onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </div>

      {/* Navbar Right - Links */}
      <div className={`navbar-right ${isMenuOpen ? "open" : ""}`}>
        <a href="#trading-section" onClick={toggleMenu}>Resources</a>
        <a href="#choose-section" onClick={toggleMenu}>Why Choose Us</a>
        <a href="#offer-section" onClick={toggleMenu}>Offers</a>
        <a href="#feedback-section" onClick={toggleMenu}>Feedback</a>
        <a href="#testimonial-section" onClick={toggleMenu}>Testimonials</a>
        <a href="#footer-section" onClick={toggleMenu}>Contact Us</a>
      </div>
    </div>
  );
};

export default Navbar;
