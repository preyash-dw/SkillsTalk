import React from "react";
import "./VideoCard.css";

const VideoCard = ({ title, description, duration, views, date, videoSrc }) => {
  // Extract video ID from the videoSrc (which is in embed format)
  const videoId = videoSrc.split("/embed/")[1];
  
  // Construct the YouTube link to open in the YouTube app or browser
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`; // Full YouTube URL

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // High-quality thumbnail

  return (
    // Make the entire card clickable by wrapping it in an anchor tag
    <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="video-card">
      <div className="video-thumbnail">
        <img src={thumbnailUrl} alt={title} className="video-image" />
        {/* <span className="video-duration">{duration}</span> */}
      </div>
      
      {/* <div className="video-details">
        <p className="video-description">{description}</p>
        <div className="video-stats">
          <span className="views">{views}</span>
          <span className="separator">•</span>
          <span className="date">{date}</span>
        </div>
      </div> */}
    </a>
  );
};

export default VideoCard;
