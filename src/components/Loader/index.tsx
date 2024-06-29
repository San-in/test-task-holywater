import React from "react";
import "./_styles.scss";

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <div className="loader-text">Loading...</div>
    </div>
  );
};

export default Loader;
