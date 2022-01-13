import React from 'react';
import './Simley.css';
import love from './love.png';
import cool from './cool.png';
import ok from './ok.png';
import dislike from './dislike.png';
import hate from './hate.png';

const Smiley = () => {
    return (
        <div className="smiley__wrapper">
            <div className="rating">
                <input type="radio" name="star" id="star1" checked="checked" />
                <label htmlFor="star1">
                    <img src={love} alt="love" />
                    <h4>Loved It</h4>
                </label>
                <input type="radio" name="star" id="star2" />
                <label htmlFor="star2">
                    <img src={cool} alt="cool" />
                    <h4>Liked It</h4>
                </label>
                <input type="radio" name="star" id="star3" />
                <label htmlFor="star3">
                    <img src={ok} alt="ok" />
                    <h4>It's OK</h4>
                </label>
                <input type="radio" name="star" id="star4" />
                <label htmlFor="star4">
                    <img src={dislike} alt="dislike" />
                    <h4>Disliked It</h4>
                </label>
                <input type="radio" name="star" id="star5" />
                <label htmlFor="star5">
                    <img src={hate} alt="hate" />
                    <h4>Hated It</h4>
                </label>
                <h2 className='text'>Do you like these css animations (effects)?</h2>
            </div>
        </div>
    )
}

export default Smiley
