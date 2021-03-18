import React, { useEffect, useState } from "react";

import "./Showcases.css";

export const Showcases = ({ title, item, image }) => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowWelcome((s) => !s);
    }, 2500);
  }, []);
  return (
    <div
      className={
        showWelcome === true
          ? `grid-item showcase-${item} showcase-${item}-transition`
          : `grid-item showcase-${item}`
      }
      style={{
        backgroundImage: `url("${image}") `,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
      }}
    >
      <h1>{title}</h1>
    </div>
  );
};
