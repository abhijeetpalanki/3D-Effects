import React, { useEffect } from 'react';
import './CircularMenu.css';

const CircularMenu = () => {
    useEffect(() => {
        let toggle = document.querySelector('.toggle');
        let menu = document.querySelector('.menu');
        toggle.onclick = function() {
            menu.classList.toggle('active');
        }
    }, [])

    return (
        <div className="menu__wrapper">
            <div className="menu">
                <div className="toggle">
                    <ion-icon name="add-outline"></ion-icon>
                </div>
                <li className="li-0"><a href="!#"><ion-icon name="home-outline"></ion-icon></a></li>
                <li className="li-1"><a href="!#"><ion-icon name="person-outline"></ion-icon></a></li>
                <li className="li-2"><a href="!#"><ion-icon name="settings-outline"></ion-icon></a></li>
                <li className="li-3"><a href="!#"><ion-icon name="mail-outline"></ion-icon></a></li>
                <li className="li-4"><a href="!#"><ion-icon name="key-outline"></ion-icon></a></li>
                <li className="li-5"><a href="!#"><ion-icon name="videocam-outline"></ion-icon></a></li>
                <li className="li-6"><a href="!#"><ion-icon name="game-controller-outline"></ion-icon></a></li>
                <li className="li-7"><a href="!#"><ion-icon name="camera-outline"></ion-icon></a></li>
            </div>
        </div>
    )
}

export default CircularMenu
