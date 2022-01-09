import React from 'react';
import './GlassCard.css';

const GlassCard = () => {
    return (
        <div className="glass-card__wrapper">
            <div className="container">
                <div className="box">
                    <span></span>
                    <div className="content">
                        <h2>Card One</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim atque cum dignissimos quos eaque.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                        <h2>Card Two</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim atque cum dignissimos quos eaque.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                        <h2>Card Three</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim atque cum dignissimos quos eaque.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlassCard
