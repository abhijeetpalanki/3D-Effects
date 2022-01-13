import React, { useEffect } from 'react';
import './Squares.css';

const colors = [
    '#2196f3',
    '#e91e63',
    '#ffeb3b',
    '#74ff1d',
];

const Squares = () => {
    const createSquare = () => {
        const section = document.querySelector('.squares__wrapper section');
        const square = document.createElement('span');

        var size = Math.random() * 50;

        square.style.width = 20 + size + 'px';
        square.style.height = 20 + size + 'px';

        square.style.top = Math.random() * section.offsetHeight + 'px';
        square.style.left = Math.random() * section.offsetWidth + 'px';

        const bg = colors[Math.floor(Math.random() * colors.length)];
        square.style.background = bg;

        section.appendChild(square);

        setTimeout(() => {
            square.remove()
        }, 5000);
    }

    useEffect(() => {
        const interval = setInterval(createSquare, 150);
        return () => clearInterval(interval);        
    }, [])

    return (
        <div className="squares__wrapper">
            <section></section>
        </div>
    )
}

export default Squares
