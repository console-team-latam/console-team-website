import React, { useEffect, useState } from "react";
import { MainScreen } from "./components/UI/MainScreen/MainScreen";
import { WelcomeScreen } from "./components/UI/Welcome/WelcomeScreen";

import "./consoleTeamApp.css";

export const ConsoleTeamApp = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowWelcome((s) => !s);
    }, 5000);
  }, []);

  const myDiv = <WelcomeScreen />;

  return (
    <div>
      {showWelcome && myDiv}
      <MainScreen />
    </div>
  );
};
