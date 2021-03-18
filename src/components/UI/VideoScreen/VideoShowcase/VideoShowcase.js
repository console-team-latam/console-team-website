import React from "react";

import "./VideoShowcase.css";

export const VideoShowcase = ({title,source,autoPlay,loop,muted,index,}) => {

 

  return (
    <div  className={`video__showcase${index}`}>
      <video  autoPlay={autoPlay} loop={loop} muted={muted}>
        <source src={source} type="video/mp4" />
      </video>
      <div className={`text-showcase vertical-text${index}`}>
        <h1>{title}</h1>
      </div>
    </div>
  );
};
