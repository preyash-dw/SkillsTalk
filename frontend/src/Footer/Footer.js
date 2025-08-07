import React from "react";
import "./Footer.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa6";

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
            <a
              href="https://www.youtube.com/@Skillstock-21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>

            <a
              href="https://www.instagram.com/skillstock_official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://wa.me/9122891133"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>

            <a
              href="https://t.me/Skills_talk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-telegram"></i>
            </a>
          </div>
        </div>
        <div className="right-section">
          <h3>Contact Us</h3>
          <div className="office-info">
            <p>
              <BsFillTelephoneFill className="contact-icon" /> +91 9122891133
            </p>
            <p>
              <FaInstagram className="contact-icon" />{" "}
              <a
                href="https://www.instagram.com/skillstock_official/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Skillstock_official
              </a>
            </p>
            <p>
              <FaTelegram className="contact-icon" />{" "}
              <a
                href="https://t.me/Skills_talk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Skill_stock
              </a>
            </p>
            <p>
              <FaWhatsapp className="contact-icon" />   <a
              href="https://wa.me/9122891133"
              target="_blank"
              rel="noopener noreferrer"
            >
              9122891133
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
