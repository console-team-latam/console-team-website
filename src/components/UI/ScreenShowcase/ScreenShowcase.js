import React from "react";

import "./ScreenShowcase.css";
import { VideoShowcase } from "./VideoShowcase/VideoShowcase";
export const ScreenShowcase = () => {
  const videos = [
    {
      title: "Web Development",
      source: "./assets/video/web-dev.mp4",
      description:"Muestrale al mundo lo que haces y has que lleguen mas clientes a tu negocio.",
      autoPlay: true,
      loop: true,
      muted: true,
    },
    {
      title: "IT & Security",
      source: "./assets/video/it-sec.mp4",
      description:"Construye tu red y tus datos en un entorno seguro. Y se parte de la revolucion digital.",

      autoPlay: true,
      loop: true,
      muted: true,
    },
  ];
  return (
    <div className="screen-showcase">
      {videos.map((video, index) => {
        return <VideoShowcase key={video.title} {...video} index={index} />;
      })}
    </div>
  );
};
