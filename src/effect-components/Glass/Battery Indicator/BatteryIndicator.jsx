import React, { useEffect } from 'react';
import './BatteryIndicator.css';
import Tilt from 'react-tilt';

const BatteryIndicator = () => {
    useEffect(() => {
        let percentage = document.querySelector('.battery-indicator__wrapper section .box .batteryShape .level .percentage');
        let percent = document.querySelector('.battery-indicator__wrapper section .box .percent');

        navigator.getBattery().then(function(battery) {
            percentage.style.width = battery.level * 100 + '%';
            percent.innerHTML = battery.level * 100 + '%';
        })

        let batteryIndSec = document.querySelector('.battery-indicator__wrapper .sec');
        let toggle = document.querySelector('.popup .popup__inner .toggle');
        toggle.onclick = function() {
            batteryIndSec.classList.toggle('dark');
        }
    }, [])
    return (
        <div className="battery-indicator__wrapper">            
            <section className="sec">
                <Tilt className="box" options={{ max : 45, speed: 400, }}>
                    <div className="content">
                        <h3>Battery</h3>
                        <div className="batteryShape">
                            <div className="level">
                                <div className="percentage"></div>
                            </div>
                        </div>
                        <div className="percent">50%</div>
                    </div>
                </Tilt>
            </section>
        </div>
    )
}

export default BatteryIndicator
