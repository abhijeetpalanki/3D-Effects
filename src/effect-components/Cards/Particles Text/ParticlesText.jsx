import React from "react";
import "./ParticlesText.css";
import hearts from "./hearts.mp4";
import particles from "./particles.mov";

const ParticlesText = () => {
  return (
    <div className="particles-text__wrapper">
      <video src={particles} autoPlay muted loop></video>
      <video src={hearts} autoPlay muted loop></video>
      <h2>
        Our work is the presentation of our <span>capabilities</span>.
      </h2>
    </div>
  );
};

export default ParticlesText;
