import React from "react";
import { Showcases } from "./Showcases/Showcases";

import "./welcomeScreen.css";
export const WelcomeScreen = () => {
  
  const welcomeShowcases = [
    {
      title: "",
      image: "./assets/images/balazs-ketyi-LPWl2pEVGKc-unsplash.jpg",
      id: "showcase1",
    },
    { title: "YOU IMAGINE, WE CREATE", image: "", id: "showcase2" },
    { title: "", image: "./assets/logo/logoConsole.svg", id: "showcase3" },
    { title: "", image: "", id: "showcase4" },
    {
      title: "",
      image: "./assets/images/georgie-cobbs-muOHbrFGEQY-unsplash.jpg",
      id: "showcase5",
    },
  ];

  return (
    <div className="welcome__main-container">
      {welcomeShowcases.map((showcase, index) => {
        return <Showcases key={showcase.id} {...showcase} item={index} />;
      })}
    </div>
  );
};
