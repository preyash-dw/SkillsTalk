import React from "react";
import "./Footer.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMessage, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="contact-us">
      <div className="content">
        <div className="left-section">
          <h1>
            Let’s Get in <span className="highlight">Touch!</span>
          </h1>
          <p>
            Have a question or need assistance? Reach out to us via email,
            phone, or the contact form below. We're eager to assist you.
          </p>
          <p className="footer-note">Nice hearing from you!</p>
          <div className="social-icons">
          <i className="fab fa-youtube"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-whatsapp"></i>
            <i className="fab fa-telegram"></i>
          </div>
        </div>
        <div className="right-section">
            <h3>Contact Us</h3>
            <div className="office-info">
            <p><BsFillTelephoneFill className="contact-icon"/> +91 9839339797</p>
            <p><FaMessage className="contact-icon"/> sybexdesigns@gmail.com</p>
            <p><FaTelegram className="contact-icon"/> trading</p>
            <p><FaWhatsapp className="contact-icon"/> +447473997191</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
