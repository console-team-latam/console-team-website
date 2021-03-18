import React from "react";

import "./VideoScreenShowcase.css";
import { VideoShowcase } from "./VideoShowcase/VideoShowcase";
export const VideoScreenShowcase = () => {
  const videos = [
    {
      title: "Web Development",
      source: "./assets/video/web-dev.mp4",
      autoPlay: true,
      loop: true,
      muted: true,
    },
    {
      title: "IT & Security",
      source: "./assets/video/it-sec.mp4",
      autoPlay: true,
      loop: true,
      muted: true,
    },
  ];
  return (
    <div className="video__screen">
      {videos.map((video, index) => {
        return <VideoShowcase key={video.title} {...video} index={index} />;
      })}
    </div>
  );
};
