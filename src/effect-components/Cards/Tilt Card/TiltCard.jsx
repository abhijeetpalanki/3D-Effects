import React from 'react';
import './TiltCard.css';
import img1 from "./img1.jpg";
import Tilt from 'react-tilt';

const TiltCard = () => {
    return (
        <div className="tilt-card__wrapper">
            <div className="container">
                <Tilt className="box" options={{ max : 45, speed: 800, }}>
                    <div className="image-box">
                        <img src={img1} alt="img1" />
                    </div>
                    <div className="content-box">
                        <h2>Fact To Live By</h2>
                        <p>Always be aware of what you are attempting to accomplish. Don't overwhelm your mind; give yourself some breathing room and allow your creativity to expand.</p>
                    </div>
                </Tilt>
            </div>
        </div>
    )
}

export default TiltCard
