import React from 'react';
import './SocialMediaIcons.css';

const SocialMediaIcons = () => {
    return (
        <div className="social__wrapper">
            <ul>
                <li>
                    <a href="https://www.facebook.com/abhijeetpalanki/" target="_blank" rel="noreferrer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa fa-facebook"></span>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/abhijeetpalanki" target="_blank" rel="noreferrer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa fa-twitter"></span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/abhijeetpalanki" target="_blank" rel="noreferrer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa fa-github"></span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/abhijeetpalanki/" target="_blank" rel="noreferrer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa fa-linkedin"></span>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/abhi.your.pal/" target="_blank" rel="noreferrer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa fa-instagram"></span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialMediaIcons
