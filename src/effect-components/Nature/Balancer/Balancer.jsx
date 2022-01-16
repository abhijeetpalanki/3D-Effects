import React from 'react';
import './Balancer.css';

const Balancer = () => {
    return (
        <div className="balancer__wrapper">
            <div className="loader-bounce">
                <div className="semi-circle"></div>
                <div className="ball"></div>
                <div className="ball ball2"></div>
            </div>
            <div className="loader-balance">
                <div className="circle">
                    <div className="ball"></div>
                </div>
            </div>
        </div>
    )
}

export default Balancer
