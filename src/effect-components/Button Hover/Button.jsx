import React from 'react';
import './Button.css';

const Button = () => {
    return (
        <div className="button__wrapper">
            <div className="container">
                <div className="btn1">
                    <a href="#"><span>Button</span></a>
                </div>
                <div className="btn2">                    
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Button
                    </a>
                </div>
                <div className="btn3">
                    <a href="#" className="dynamic-link"><span>Button</span></a>
                </div>
            </div>
        </div>
    )
}

export default Button
