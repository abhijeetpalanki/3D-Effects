import React, { useEffect } from 'react';
import './Slider.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import antMan from './assets/Ant-Man.png';
import antManLogo from './assets/AntMan-logo.png';

import deadPool from './assets/DeadPool.png';
import deadPoolLogo from './assets/Deadpool-logo.png';

import venom from './assets/Venom.png';
import venomLogo from './assets/Venom-logo.png';

import spiderMan from './assets/SpiderMan.png';
import spiderManLogo from './assets/SpiderMan-logo.png';

import thor from './assets/Thor.png';
import thorLogo from './assets/Thor-logo.png';

const Slider = () => {
    useEffect(() => {
        
    }, [])

    return (
        <div className="slider__wrapper">
            <Carousel className="container" showArrows={false} autoPlay>
                <div className="box">
                    <p className="marvel">MARVEL</p>
                    <img src={antMan} alt="ant-man" className="model" />
                    <div className="details">
                        <img src={antManLogo} alt="ant-man-logo" className="logo" width={100} style={{height: "auto"}} />
                        <p>
                            Forced out of his own company by former protégé Darren Cross, Dr. Hank Pym recruits the talents of Scott Lang, a master thief just released from prison. Lang becomes Ant-Man, trained by Pym and armed with a suit that allows him to shrink in size, possess superhuman strength and control an army of ants.
                        </p>
                    </div>
                </div>
                <div className="box">
                    <p className="marvel">MARVEL</p>
                    <img src={deadPool} alt="deadpool" className="model" />
                    <div className="details">
                        <img src={deadPoolLogo} alt="deadpool-logo" className="logo" width={100} style={{height: "auto"}} />
                        <p>
                            Deadpool, whose real name is Wade Winston Wilson, is a disfigured mercenary with the superhuman ability of regeneration and physical prowess. He is known as the "Merc with a Mouth" because of his tendency to talk and joke constantly, including breaking the fourth wall for humorous effect and running gags.
                        </p>
                    </div>
                </div>
                <div className="box">
                    <p className="marvel">MARVEL</p>
                    <img src={venom} alt="venom" className="model" />
                    <div className="details">
                        <img src={venomLogo} alt="venom-logo" className="logo" width={100} style={{height: "auto"}} />
                        <p>
                            This character is a sentient alien symbiote with an amorphous, liquid-like form, who survives by bonding with a host, usually human. This dual-life form receives enhanced powers and usually refers to itself as "Venom."
                        </p>
                    </div>
                </div>
                <div className="box">
                    <p className="marvel">MARVEL</p>
                    <img src={spiderMan} alt="spider-man" className="model" />
                    <div className="details">
                        <img src={spiderManLogo} alt="spider-man-logo" className="logo" width={100} style={{height: "auto"}} />
                        <p>
                            A bite from a spider somehow granted teenager Peter Parker its arachnid abilities and instead of using them for personal gain, he decided to help others with them. An orphan living with his aunt, May Parker, the boy chose to wear a mask while fighting crime so as not to burden her with his actions.
                        </p>
                    </div>
                </div>
                <div className="box">
                    <p className="marvel">MARVEL</p>
                    <img src={thor} alt="thor" className="model" />
                    <div className="details">
                        <img src={thorLogo} alt="thor-logo" className="logo" width={100} style={{height: "auto"}} />
                        <p>
                            The character is based on the Norse deity of the same name, the Asgardian god of thunder whose enchanted hammer Mjolnir enables him to fly and manipulate weather, among his other superhuman attributes. A founding member of the superhero team the Avengers, Thor has a host of supporting characters and enemies.
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Slider
