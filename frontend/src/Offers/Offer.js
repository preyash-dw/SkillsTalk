import React, { useState, useEffect } from 'react';
import './Offer.css';

const Offer = () => {
  const [modalData, setModalData] = useState(null);


  const offers = {
    advance: {
      title: "ADVANCE",
      price: { new: "$150", old: "$200" },
      content: ["2 Weeks Full CWRV Course", "40 Min each session Monday to Friday"],
      details: [
        { title: "Live Session", description: "Focussed on Fundamentals and live analysis" },
        { title: "4-5 Strategies and Concept", description: "CWRV Strategies, Candle reading, Support/Resistance" },
        { title: "Daily Assignments", description: "Basic Tasks to Reinforce Learning" },
        { title: "Money Management", description: "Introductory Level" }
      ]
    },
    pro: {
      title: "PRO",
      price: { new: "$235", old: "$300" },
      content: ["4 Weeks Full CWRV Course", "40 Min each session Monday to Friday"],
      details: [
        { title: "Live Market Analysis", description: "In-depth market insights, fundamental understanding" },
        { title: "Advanced Market Strategy Test", description: "More Frequent with Guided Sessions" },
        { title: "In-Depth Daily Assignments", description: "Focused on improving analysis accuracy" },
        { title: "Detailed Money Management", description: "Risk-Reward Balancing, Compounding" },
        { title: "Psychological Sessions", description: "Mindset strategies for consistent trading" },
        { title: "Doubt Solving Sessions", description: "Weekly, Extended Q&A" }
      ]
    },
    proPlus: {
      title: "PRO+",
      price: { new: "$350", old: "$400" },
      content: ["2 Months Full CWRV Course", "40 Minutes each session Monday to Friday."],
      details: [
        { title: "Personalized Live Market Analysis", description: "Individual Feedback" },
        { title: "Exclusive Advanced Strategy", description: "Unique methods not shared in other tiers" },
        { title: "Comprehensive Money Management", description: "Customized plan for specific trading styles" },
        { title: "Extended Psychological Sessions", description: "Overcoming advanced emotional challenges in trading" },
        { title: "Daily Assignments with Feedback", description: "Personalized reviews" },
        { title: "Dedicated Doubt Solving", description: "One-on-one weekly sessions" }
      ]
    }
  };

  const handleCardClick = (cardData) => {
    setModalData(cardData);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="offer-container">
      <h1 className="offer-heading">OFFERS</h1>
      <p className="offer-subheading">Choose your plan</p>

   

      <div className="cardss-container">
        {Object.keys(offers).map((key) => {
          const offer = offers[key];
          return (
            <div
              className="offer-card"
              key={key}
              onClick={() => handleCardClick(offer)}
            >
              <h2 className="offer-title">{offer.title}</h2>
              <div className="offer-price">
                <span className="new-price">{offer.price.new}</span>
                <span className="old-price">{offer.price.old}</span>
              </div>
              <div className="cont">
                {offer.content.map((text, index) => (
                  <span key={index}>{text}</span>
                ))}
              </div>
              <ul className="offer-details">
                {offer.details.slice(0, 4).map((item, index) => (
                  <li key={index}>
                    <span className="highlighted-text">{item.title}</span>
                    <span className="smallDes">{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {modalData && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>
              &times;
            </span>
            <h2>{modalData.title}</h2>
            <div className="offer-price">
              <span className="new-price">{modalData.price.new}</span>
              <span className="old-price">{modalData.price.old}</span>
            </div>
            <div className="cont">
              {modalData.content.map((text, index) => (
                <span key={index}>{text}</span>
              ))}
            </div>
            <ul className="offer-details">
              {modalData.details.map((item, index) => (
                <li key={index}>
                  <span className="highlighted-text">{item.title}</span> -{" "}
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offer;
