import React, { useState } from 'react';
import './Shutter.css';

const Shutter = () => {
    const [rangeValue, setRangeValue] = useState("0");

    const handleChange = (ev) => {
        setRangeValue(ev.target.value);
    };

    return (
        <div className='shutter__wrapper'>
            <section>
                <div>
                    <h2 id="rangeValue">{rangeValue}</h2>
                    <div id="fillRangeTopLeft" style={{width: `${rangeValue/2}%`}}></div>
                    <div id="fillRangeTopRight" style={{height: `${rangeValue/2}%`}}></div>
                    <div id="fillRangeBottomLeft" style={{height: `${rangeValue/2}%`}}></div>
                    <div id="fillRangeBottomRight" style={{width: `${rangeValue/2}%`}}></div>
                    <input type="range" className="range" value={rangeValue} min={0} max={100} onChange={handleChange} />
                </div>
            </section>
        </div>
    )
}

export default Shutter
