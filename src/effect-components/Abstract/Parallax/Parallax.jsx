import React from 'react';
import './Parallax.css';
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import img7 from './assets/7.png';
import img8 from './assets/8.png';
import img9 from './assets/9.png';
import img10 from './assets/10.png';
import img11 from './assets/11.png';
import img12 from './assets/12.png';

const Parallax = () => {     
    const parallax = (e) => {
        document.querySelectorAll('.layer').forEach((layer, i) => {
            const speed = layer.getAttribute('data-speed');

            const x = (window.innerWidth - e.pageX*speed)/100;
            const y = (window.innerHeight - e.pageY*speed)/100;

            layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        })
    }

    return (
        <div className="parallax__wrapper" onMouseMove={parallax}>
           <section>
                <img src={img1} alt="img1" data-speed="-5" className="layer" />
                <img src={img2} alt="img2" data-speed="5" className="layer" />
                <img src={img3} alt="img3" data-speed="2" className="layer" />
                <img src={img4} alt="img4" data-speed="6" className="layer" />
                <img src={img5} alt="img5" data-speed="8" className="layer" />
                <img src={img6} alt="img6" data-speed="-2" className="layer" />
                <img src={img7} alt="img7" data-speed="4" className="layer" />
                <img src={img8} alt="img8" data-speed="-9" className="layer" />
                <img src={img9} alt="img9" data-speed="6" className="layer" />
                <img src={img10} alt="img10" data-speed="-7" className="layer" />
                <img src={img11} alt="img11" data-speed="-5" className="layer" />
                <img src={img12} alt="img12" data-speed="5" className="layer" />
                <h2 className="layer" data-speed="2">Parallax</h2>
           </section>
        </div>
    )
}

export default Parallax
