import React, { useEffect } from "react";
import "./Confetti.css";
import Confetti from "react-confetti";

const ConfettiGenerator = () => {
  //   const { width, height } = useWindowSize();

  return (
    <div className="confetti__wrapper">
      <div className="flex-container">
        <div className="text">
          Make
          <div id="flip">
            <div>
              <div>work</div>
            </div>
            <div>
              <div>lifestyle</div>
            </div>
            <div>
              <div>everything</div>
            </div>
          </div>
          awesome!
        </div>
        <div className="unit">
          <div className="heart">
            <div className="heart-piece-0"></div>
            <div className="heart-piece-1"></div>
            <div className="heart-piece-2"></div>
            <div className="heart-piece-3"></div>
            <div className="heart-piece-4"></div>
            <div className="heart-piece-5"></div>
            <div className="heart-piece-6"></div>
            <div className="heart-piece-7"></div>
            <div className="heart-piece-8"></div>
          </div>
        </div>
      </div>
      <Confetti></Confetti>
    </div>
  );
};

export default ConfettiGenerator;
