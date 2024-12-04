import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, closeModal, heading, links }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{heading}</h2>
        <ol>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </li>
          ))}
        </ol>
        <button className="close-modal" onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
