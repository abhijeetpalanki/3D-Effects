import React, { useEffect, useState } from 'react';
import './Ocean.css';
import bag from './assets/bag.svg';
import takeout from './assets/takeout.svg';
import headphones from './assets/headphones.svg';
import phone from './assets/phone.svg';
import toyCar from './assets/toy-car.svg';
import bottle from './assets/bottle.svg';

const Ocean = () => {
    const [money, setMoney] = useState(null);
    const [trashAmount, setTrashAmount] = useState({});

    const currencyFormatter = Intl.NumberFormat("en-us", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    });

    const randomNumberBetween = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min); 
    }

    const setupTrash = async () => {
        await fetch("https://tscache.com/donation_total.json").then(res => res.json()).then(data => {
            setMoney(data.count)
            setTrashAmount({
                xxl: {
                    amount: parseInt(`${data.count[0]}${data.count[1]}`),
                    icon: bag
                },
                xl: {
                    amount: parseInt(`${data.count[2]}`),
                    icon: takeout
                },
                lg: {
                    amount: parseInt(`${data.count[3]}`),
                    icon: headphones
                },
                md: {
                    amount: parseInt(`${data.count[4]}`),
                    icon: phone
                },
                sm: {
                    amount: parseInt(`${data.count[5]}`),
                    icon: toyCar
                },
                xs: {
                    amount: parseInt(`${data.count[6]}`),
                    icon: bottle
                }
            });
        });
    };

    useEffect(() => {   
        setupTrash();
    }, []);

    useEffect(() => {      
        const trashContainer = document.querySelector('.ocean__wrapper .trash-container');  
                
        Object.values(trashAmount).forEach(({ amount, icon }) => {
            for (let i = 0; i < amount; i++) {  
                const img = document.createElement('img');    
                const top = randomNumberBetween(0, 50);
                const size = top / 5 + 1;
                img.classList.add("trash");
                img.src = icon;
                img.style.width = `${size}vmin`;
                img.style.height = `${size}vmin`;
                img.style.top = `${top}vh`;
                img.style.left = `${randomNumberBetween(0, 100)}vw`;
                img.style.setProperty("--rotation", `${randomNumberBetween(-30, 30)}deg`);
                trashContainer.appendChild(img);
            }
        })
    }, [trashAmount])

    return (
        <div className="ocean__wrapper">
            <div className="landscape">
                <div className="mountain"></div>
                    <div className="mountain mountain-2"></div>
                    <div className="mountain mountain-3"></div>
                    <div className="sun-container sun-container-1">
                </div>
                <div className="sun-container">
                    <div className="sun"></div>
                </div>
                <div className="cloud"></div>
                <div className="cloud cloud-1"></div>
                <div className="sun-container sun-container-reflection">
                    <div className="sun"></div>
                </div>
                <div className="light"></div>
                <div className="light light-1"></div>
                <div className="light light-2"></div>
                <div className="light light-3"></div>
                <div className="light light-4"></div>
                <div className="light light-5"></div>
                <div className="light light-6"></div>
                <div className="light light-7"></div>
                <div className="water"></div>
                <div className="splash"></div>
                <div className="splash delay-1"></div>
                <div className="splash delay-2"></div>
                <div className="splash splash-4 delay-2"></div>
                <div className="splash splash-4 delay-3"></div>
                <div className="splash splash-4 delay-4"></div>
                <div className="splash splash-stone delay-3"></div>
                <div className="splash splash-stone splash-4"></div>
                <div className="splash splash-stone splash-5"></div>
                <div className="lotus lotus-1"></div>
                <div className="lotus lotus-2"></div>
                <div className="lotus lotus-3"></div>
                <div className="trash-container"></div>
                <div className="front">
                    <div className="stone"></div>
                    <div className="grass"></div>
                    <div className="grass grass-1"></div>
                    <div className="grass grass-2"></div>
                    <div className="reed"></div>
                    <div className="reed reed-1"></div>
                </div>
            </div>
            <div className="logo"></div>
            {money != null && <h1 className="money">{currencyFormatter.format(money)}</h1>}
            
        </div>
    )
}

export default Ocean
