import React, { useEffect, useState } from "react";
import { Showcases } from "./Showcases/Showcases";

import "./welcomeScreen.css";
export const WelcomeScreen = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowWelcome((s) => !s);
    }, 3000);
  }, []);

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
    <div
      className={
        showWelcome === false
          ? "welcome__opacity welcome__main-container"
          : "welcome__main-container"
      }
    >
      {welcomeShowcases.map((showcase, index) => {
        return <Showcases key={showcase.id} {...showcase} item={index} />;
      })}
    </div>
  );
};
