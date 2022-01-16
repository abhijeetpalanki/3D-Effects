import React, { useEffect } from 'react';
import './Rain.css';

const Rain = () => {
    useEffect(() => {
        let amount = 200;
        let rainWrapper = document.querySelector('.rain__wrapper');
        let i = 0;
        while (i < amount) {
            let drop = document.createElement('i');

            let size = Math.random() * 5;
            let posX = Math.floor(Math.random() * rainWrapper.offsetWidth);
            let delay = Math.random() * -20;
            let duration = Math.random() * 5;

            drop.style.width = 0.2 + size + 'px';
            drop.style.left = posX + 'px';
            drop.style.animationDelay = delay + 's';
            drop.style.animationDuration = 1 + duration + 's';
            rainWrapper.appendChild(drop);
            i++;
        }
    }, [])

    return (
        <div className="rain__wrapper">
            
        </div>
    )
}

export default Rain
