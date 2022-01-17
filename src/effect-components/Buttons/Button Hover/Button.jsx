import React from 'react';
import './Button.css';

const Button = () => {
    return (
        <div className="button__wrapper">
            <div className="container">
                <div className="btn1">
                    <a href="!#"><span>Blur</span></a>
                </div>
                <div className="btn2">                    
                    <a href="!#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Border
                    </a>
                </div>
                <div className="btn3">
                    <a href="!#" className="dynamic-link"><span>Glow</span></a>
                </div>
                <div className="btn4">
                    <a href="!#">
                        <span>Zoom</span>
                        <span>Zoom</span>
                    </a>
                </div>
                <div className="btn5">
                    <a href="!#">
                        Pixel
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Button
