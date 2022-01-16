import React from 'react';
import './InkSplash.css';
import clip from './clip.mp4';
import ink from './ink.mp4';

const InkSplash = () => {
    return (
        <div className="ink-splash__wrapper">
            <video src={clip} type="video/mp4" autoPlay muted loop></video>
            <video src={ink} type="video/mp4" autoPlay muted loop></video>
        </div>
    )
}

export default InkSplash
