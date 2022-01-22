import React, { useEffect } from "react";
import "./CircleLogo.css";

const CircleLogo = () => {
  useEffect(() => {
    const text = document.querySelector(".circle-logo__wrapper .circle .text");
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 7.3}deg)">${char}</span>`
      )
      .join("");
  }, []);

  return (
    <div className="circle-logo__wrapper">
      <div className="glowing-text">
        <h2>
          <span>I</span>M<span>POSSIBLE</span>
        </h2>
      </div>
      <div className="circle">
        <div className="logo"></div>
        <div className="text">
          <p>Abhijeet Palanki - Full Stack Software Engineer - </p>
        </div>
      </div>
    </div>
  );
};

export default CircleLogo;
