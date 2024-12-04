import React, { useRef, useEffect, useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./Resources.css";

const Resources = ({ optionalVideos, binaryVideos }) => {
  const optionalScrollRef = useRef(null);
  const binaryScrollRef = useRef(null);

  const [optionalIndex, setOptionalIndex] = useState(0); // Index for optional videos
  const [binaryIndex, setBinaryIndex] = useState(0); // Index for binary videos

  const [optionalDisabled, setOptionalDisabled] = useState({
    left: true,
    right: optionalVideos.length <= 4, // Disable right arrow if there are <= 4 cards
  });

  const [binaryDisabled, setBinaryDisabled] = useState({
    left: true,
    right: binaryVideos.length <= 4, // Disable right arrow if there are <= 4 cards
  });

  const handleScroll = (direction, ref, index, setIndex, length, setDisabled) => {
  const { current } = ref;
  if (current) {
    const cardWidth = current.firstChild.offsetWidth + 16; // Account for margin/gap
    const visibleCards = Math.floor(current.offsetWidth / cardWidth) || 1; // Fallback to 1 for very narrow screens
    let newIndex = index;

    if (direction === "next" && index < length - visibleCards) {
      newIndex++;
      current.scrollBy({ left: cardWidth, behavior: "smooth" });
    } else if (direction === "prev" && index > 0) {
      newIndex--;
      current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }

    setIndex(newIndex);
    setDisabled({
      left: newIndex === 0,
      right: newIndex >= length - visibleCards,
    });
  }
};


  useEffect(() => {
    // Reset scroll position on load
    if (optionalScrollRef.current) {
      optionalScrollRef.current.scrollLeft = 0;
    }
    if (binaryScrollRef.current) {
      binaryScrollRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <div className="resources-container">
      {/* Optional Trading Section */}
      <h2>Our Accuracy</h2>
      <div className="carousel-wrapper">
        <button
          className="arrow left"
          onClick={() =>
            handleScroll(
              "prev",
              optionalScrollRef,
              optionalIndex,
              setOptionalIndex,
              optionalVideos.length,
              setOptionalDisabled
            )
          }
          disabled={optionalDisabled.left}
        >
          {"<"}
        </button>
        <div className="resource-carousel" ref={optionalScrollRef}>
          {optionalVideos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
        <button
          className="arrow right"
          onClick={() =>
            handleScroll(
              "next",
              optionalScrollRef,
              optionalIndex,
              setOptionalIndex,
              optionalVideos.length,
              setOptionalDisabled
            )
          }
          disabled={optionalDisabled.right}
        >
          {">"}
        </button>
      </div>

      {/* Binary Trading Section */}
      <h2>Client Accuracy</h2>
      <div className="carousel-wrapper">
        <button
          className="arrow left"
          onClick={() =>
            handleScroll(
              "prev",
              binaryScrollRef,
              binaryIndex,
              setBinaryIndex,
              binaryVideos.length,
              setBinaryDisabled
            )
          }
          disabled={binaryDisabled.left}
        >
          {"<"}
        </button>
        <div className="resource-carousel" ref={binaryScrollRef}>
          {binaryVideos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
        <button
          className="arrow right"
          onClick={() =>
            handleScroll(
              "next",
              binaryScrollRef,
              binaryIndex,
              setBinaryIndex,
              binaryVideos.length,
              setBinaryDisabled
            )
          }
          disabled={binaryDisabled.right}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Resources;
