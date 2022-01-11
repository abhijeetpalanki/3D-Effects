import React, { useEffect } from 'react';
import './Banner.css';
import forest from './forest.png';
import cloud1 from './cloud1.png';
import cloud2 from './cloud2.png';
import cloud3 from './cloud3.png';

const Banner = () => {
    useEffect(() => {
        let count = 100;
        let banner = document.querySelector('.banner__wrapper');
        let scene = document.querySelector('.scene');
        
        let i = 0;
        while (i < count) {
            let star = document.createElement('i');
            let x = Math.floor(Math.random() * banner.offsetWidth);
            let y = Math.floor(Math.random() * banner.offsetHeight);
            let duration = Math.random() * 10;
            let size = Math.random() * 2;

            star.style.left = x+'px';
            star.style.top = y+'px';
            star.style.width = 1+size+'px';
            star.style.height = 1+size+'px';

            star.style.animationDuration = 5+duration+'s';
            star.style.animationDelay = duration+'s';

            scene.appendChild(star);
            i++;
        }
    }, [])

    return (
        <div className="banner__wrapper">
            <div className="scene">
                <div className="moon"></div>
                <img src={forest} alt="forest" className='forest' />
                <img src={cloud1} alt="cloud1" className='cloud1' />
                <img src={cloud2} alt="cloud2" className='cloud2' />
                <img src={cloud3} alt="cloud3" className='cloud3' />
                <img src={cloud1} alt="cloud1" className='cloud4' />
                <img src={cloud2} alt="cloud2" className='cloud5' />
                <img src={cloud3} alt="cloud3" className='cloud6' />
            </div>
        </div>
    )
}

export default Banner
