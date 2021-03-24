import React from "react";

import "./VideoShowcase.css";

export const VideoShowcase = ({
  title,
  source,
  autoPlay,
  loop,
  muted,
  index,
  description,
}) => {
  return (
    <div className={`main__video-container`}>
      <div className="video__container">
        <video autoPlay={autoPlay} loop={loop} muted={muted}>
          <source src={source} type="video/mp4" />
        </video>
        <div className='video__text-container'>
          <h1 className={`text-showcase vertical-text${index}`}>{title}</h1>
        </div>
      </div>
      <div className="video-overlay">
        <p>
          {description}
        </p>
        <button className="btn">Read More</button>
      </div>
    </div>
  );
};
