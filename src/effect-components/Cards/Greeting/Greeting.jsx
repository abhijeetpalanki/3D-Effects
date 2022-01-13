import React from 'react';
import './Greeting.css';
import brothers1 from './brothers1.jpg';
import brothers2 from './brothers2.png';

const Greeting = () => {
    return (
        <div className="greeting__wrapper">
            <div className="greeting-card">
                <div className="imgBox">
                    <img src={brothers1} alt="brothers1" />
                    <img src={brothers2} alt="brothers2" />
                </div>
                <div className="details">
                    <div className="content">
                        <h2>I <span className="love">❤</span> My Brother<br /><span>The one who shares childhood memories and grown-up dreams.</span></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Greeting
