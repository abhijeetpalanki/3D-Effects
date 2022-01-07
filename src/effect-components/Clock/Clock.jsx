import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
    const [date, setDate] = useState(new Date());
    let timeId = 0;

    useEffect(() => {
        timeId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timeId);
        }
    }, []);
    
    return (
        <div className="clock__body">
            <div className="clock">
                <div className="hour">
                    <div className="hr" id="hr" style={{transform: `rotateZ(${date.getHours() * 30}deg)`}}></div>
                </div>
                <div className="min">
                    <div className="mn" id="mn" style={{transform: `rotateZ(${date.getMinutes() * 6}deg)`}}></div>
                </div>
                <div className="sec">
                    <div className="sc" id="sc" style={{transform: `rotateZ(${date.getSeconds() * 6}deg)`}}></div>
                </div>
            </div>
        </div>
    )
}

export default Clock
