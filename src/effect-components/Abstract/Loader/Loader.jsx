import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className="loader__wrapper">
            <div className="ice-cubes-loader">
                <div className="container">
                    <div className="📦"></div>
                    <div className="📦"></div>
                    <div className="📦"></div>
                    <div className="📦"></div>
                    <div className="📦"></div>
                </div>
            </div>
            <div className="cube-loader">
                <div className="cube">
                    <div className="side"></div>
                    <div className="side"></div>
                    <div className="side"></div>
                    <div className="side"></div>
                    <div className="side"></div>
                    <div className="side"></div>
                </div>
            </div>
            <div className="symbol-loader">
                <div className="loader">
                    <svg viewBox="0 0 80 80">
                        <circle id="test" cx="40" cy="40" r="32"></circle>
                    </svg>
                </div>

                <div className="loader triangle">
                    <svg viewBox="0 0 86 80">
                        <polygon points="43 8 79 72 7 72"></polygon>
                    </svg>
                </div>

                <div className="loader">
                    <svg viewBox="0 0 80 80">
                        <rect x="8" y="8" width="64" height="64"></rect>
                    </svg>
                </div>

                <a className="dribbble" href="!#">
                    <img src="" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Loader
