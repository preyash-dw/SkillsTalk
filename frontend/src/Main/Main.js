import React, { useState, useEffect } from "react";
import "./Main.css";
import Student from "../Assets/student.png";
import First from "../Assets/first.png";
import Second from "../Assets/second.png";
import Third from "../Assets/third.png";
import Modal from "../Modal/Modal";

const Main = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen size and update state
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 480);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const optionalLinks = ["Forex", "Stocks", "Index", "Investment", "BANKNIFTY"];

  const binaryLinks = [
    "Candle Stick Reading With Volume",
    "Every Candle Reading",
    "Volume Analysis with Confirmation",
    "Advanced Strategies with 80%+ Accuracy",
    "Money Management",
    "Pro Trading Mindset",
  ];
  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalHeading, setModalHeading] = useState("");
  const [modalLinks, setModalLinks] = useState([]);

  const openModal = (type) => {
    if (type === "Optional Trading") {
      setModalHeading("Optional Trading");
      setModalLinks(optionalLinks);
    } else if (type === "Binary") {
      setModalHeading("Binary");
      setModalLinks(binaryLinks);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mentorship-container">
      <div className="mentorship-text">
      <h1>
  <span className="highlight">Mentorship</span> That
  <br />
  {isMobile ? (
    <span className="mobile-bold">Elevates Your Trading Skills</span>
  ) : (
    <>
      <span className="highlight"> Elevates Your</span>
      <br />
      Trading Skills
    </>
  )}
</h1>

        <p className="description">
          Our mission is to empower traders of all levels with skills, knowledge,
          and support they need to succeed in the market.
        </p>
        <div className="button-group">
          <button className="custom-button" onClick={() => openModal("Optional Trading")}>
            Optional Trading
          </button>
          <button className="custom-button" onClick={() => openModal("Binary")}>
            Binary Trading
          </button>
        </div>
      </div>

      <div className="mentorship-image">
        <div className="simple"></div>
        <div className="round">
          <img src={Student} alt="Mentorship Illustration" className="main-image" />
        </div>
        <div className="badge video-links">
          <img src={Second} alt="Video Links Badge" className="badge-icon" />
          <div className="badge-text">
            <h1 className="badge-heading">2</h1>
            <p className="badge-description">Categories</p>
          </div>
        </div>
        <div className="badge categories">
          <img src={First} alt="Categories Badge" className="badge-icon" />
          <div className="badge-text">
            <h1 className="badge-heading">20+</h1>
            <p className="badge-description">Video Links</p>
          </div>
        </div>

        <div className="badge live">
          <img src={Third} alt="Live Session Badge" className="badge-icon" />
          <p>Live Session</p>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        heading={modalHeading}
        links={modalLinks}
      />
    </div>
  );
};

export default Main;
