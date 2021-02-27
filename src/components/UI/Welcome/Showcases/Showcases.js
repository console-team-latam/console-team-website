import React from "react";

import "./Showcases.css";

export const Showcases = ({ title, item, image }) => {
  return (
    <div
      className={`grid-item showcase-${item}`}
      style={{
        backgroundImage: `url("${image}") `,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`
      }}
    >
      <h1>{title}</h1>
    </div>
  );
};
