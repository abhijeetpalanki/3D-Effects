import React from 'react';
import './GlassBusinessCard.css';
import bg from './bg.jpg';
import profile from './profile.jpg';

const GlassBusinessCard = () => {
    return (
        <div className="business-card__body" style={{backgroundImage: `url(${bg})`}}>
            <div className="business-card__card">
                <div className="business-card__content">
                    <div className="business-card__image">
                        <img src={profile} alt='profile' />
                    </div>
                    <div className="business-card__details">
                        <div>
                            <h3>Abhijeet Palanki</h3>
                        </div>
                        <div>
                            <ion-icon name="call-outline"></ion-icon>
                            <span>
                                +1 (203) 385-2663
                            </span>
                        </div>
                        <div>
                            <ion-icon name="mail-outline"></ion-icon>
                            <span>
                                ajpalanki@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlassBusinessCard
