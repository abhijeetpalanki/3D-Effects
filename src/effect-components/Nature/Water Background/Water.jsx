import React from 'react';
import './Water.css';
import waterBg from "./background.png";
import bubble from "./bubble.png";

const Water = () => {
    return (
        <div className="water__wrapper">
            <div className="hero" style={{backgroundImage: `url(${waterBg})`}}>
                <div className="bubbles">
                    <img src={bubble} alt="bubble" />
                    <img src={bubble} alt="bubble" />
                    <img src={bubble} alt="bubble" />
                    <img src={bubble} alt="bubble" />
                    <img src={bubble} alt="bubble" />
                    <img src={bubble} alt="bubble" />
                    <img src={bubble} alt="bubble" />
                </div>
            </div>
        </div>
    )
}

export default Water
