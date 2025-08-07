import React, { useState, useEffect } from 'react';
import './Offer.css';

const Offer = () => {
  const [modalData, setModalData] = useState(null);


  const offers = {
    advance: {
      title: "One Month Training",
      price: { new: "$350", old: "$450" },
      content: ["1 Month Full CWRV Course", "40 Min each session Monday to Friday"],
      details: [
        { title: "5-10 Powerfull Trading", description: "Stratefies and Core Concepts" },
        { title: "Chart Reading Basics", description: " & Market behaviour" },
        { title: "Trade Setup Identification", descpription: "Basic Tasks to Reinforce Learning" },
        { title: "Beginner Freindly", description: "Money Management Tips" }
      ]
    },
    pro: {
      title: "Two Month Advance Training",
      price: { new: "$499", old: "$599" },
      content: ["8 Weeks Full CWRV Course", "40 Min each session Monday to Friday"],
      details: [
        { title: "15-20 High- Accuracy", description: "Trading Strategies" },
        { title: "Daily Chart Analysis", description: "& Market Structure Insights" },
        { title: "Risk Management", description: "& Capital Allocation" },
        { title: "Trend Reading", description: "+ Key Entry Zones" },
        { title: "Volume Reading", description: "& Candle Power Concepts" },
        { title: "Access To Trade Reviews & Feedback", description: "Weekly, Extended Q&A" }
      ]
    },
    proPlus: {
      title: "Three-Month Premium Mentorship",
      price: { new: "$645", old: "$745" },
      content: ["3 Months Full CWRV Course", "40 Minutes each session Monday to Friday."],
      details: [
        { title: "20 + Elite-Level", description: "Strategies with Live examples" },
        { title: "One-on-one Trading sessions with me ", description: "Unique methods not shared in other tiers" },
        { title: "Daily Chart Updates", description: "With Trade Suggestions" },
        { title: "Weekly Progress Feedback", description: "+ Support" },
        { title: "Deep Dive into Market Patterns", description: "Pressure Zones & Reversals" },
        { title: "Risk Control Systems", description: "Used By Top Traders" }
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
