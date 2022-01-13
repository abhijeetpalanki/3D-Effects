import React, { useEffect } from 'react';
import './DropdownMenu.css';
import user from './user.jpg';

const DropdownMenu = () => {
    useEffect(() => {
        const card = document.querySelector('.dropdown-card');
        const cardToggle = document.querySelector('.dropdown-menu-toggle');

        cardToggle.onclick = function() {
            card.classList.toggle('active');
        }
    }, [])

    return (
        <div className="dropdown-menu__wrapper">
            <div className="dropdown-card">
                <div className="content">
                    <div className="image-box">
                        <img src={user} alt="user" />
                    </div>
                    <h2>Abhijeet Palanki <br /><span>Software Engineer</span></h2>
                </div>                
                <ul className="dropdown-navigation">
                    <li>
                        <a href="!#"><ion-icon name="person-outline"></ion-icon> Edit Profile</a>
                    </li>
                    <li>
                        <a href="!#"><ion-icon name="chatbox-outline"></ion-icon> Inbox</a>
                    </li>
                    <li>
                        <a href="!#"><ion-icon name="settings-outline"></ion-icon> Settings</a>
                    </li>
                    <li>
                        <a href="!#"><ion-icon name="help-circle-outline"></ion-icon> Support</a>
                    </li>
                    <li>
                        <a href="!#"><ion-icon name="log-out-outline"></ion-icon> Logout</a>
                    </li>
                </ul>
                <div className="dropdown-menu-toggle">
                    <ion-icon name="chevron-down-outline"></ion-icon> 
                </div>
            </div>
        </div>
    )
}

export default DropdownMenu
