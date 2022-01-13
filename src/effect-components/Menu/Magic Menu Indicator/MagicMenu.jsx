import React, { useEffect } from 'react';
import './MagicMenu.css';

const MagicMenu = () => {
    useEffect(() => {
        const list = document.querySelectorAll('.magic-menu__navigation .list');
        function activeLink() {
            list.forEach((item) => item.classList.remove('active'));
            this.classList.add('active');
        }
        list.forEach((item) => item.addEventListener('click', activeLink));
    }, [])

    return (
        <div className="magic-menu__wrapper">
            <div className="magic-menu__navigation">
                <ul>
                    <li className="list active">
                        <a href="!#">
                            <span className="icon">
                                <ion-icon name="home-outline"></ion-icon>
                            </span>
                            <span className="text">Home</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="!#">
                            <span className="icon">
                                <ion-icon name="person-outline"></ion-icon>
                            </span>
                            <span className="text">Profile</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="!#">
                            <span className="icon">
                                <ion-icon name="chatbubble-outline"></ion-icon>
                            </span>
                            <span className="text">Messages</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="!#">
                            <span className="icon">
                                <ion-icon name="camera-outline"></ion-icon>
                            </span>
                            <span className="text">Photos</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="!#">
                            <span className="icon">
                                <ion-icon name="settings-outline"></ion-icon>
                            </span>
                            <span className="text">Settings</span>
                        </a>
                    </li>
                    <div className="magic-menu__indicator"></div>
                </ul>
            </div>
        </div>
    )
}

export default MagicMenu
