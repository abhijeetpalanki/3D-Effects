import React from 'react';
import './GlowingCube.css';

const GlowingCube = () => {
    return (
        <div className="cube__wrapper">
            <div className="cube">
                <div className="top"></div>
                <div>
                    <span className="cube-span-0">
                        <h2>03</h2>
                        <h2>03</h2>
                    </span>
                    <span className="cube-span-1">
                        <h2>03</h2>
                        <h2>03</h2>
                    </span>
                    <span className="cube-span-2">
                        <h2>03</h2>
                        <h2>03</h2>
                    </span>
                    <span className="cube-span-3">
                        <h2>03</h2>
                        <h2>03</h2>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default GlowingCube
