import React from 'react';
import './Rocket.css';

const Rocket = () => {
    return (
        <div className="rocket__wrapper">
            <div className="loader">
                <div className="rocket">
                    <i className="fa fa-rocket"></i>
                    <i className="fa fa-cloud cloud-0"></i>
                    <i className="fa fa-cloud cloud-1"></i>
                    <i className="fa fa-cloud cloud-2"></i>
                    <i className="fa fa-cloud cloud-3"></i>
                </div>
                <span><i></i></span>
            </div>
        </div>
    )
}

export default Rocket
