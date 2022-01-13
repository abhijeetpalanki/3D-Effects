import React from 'react';
import './Box.css';

const Box = () => {
    return (
        <div className="box__wrapper">
            <div className="square">
                <span></span>
                <span></span>
                <span></span>
                <div className="content">
                    <h2>Quote of the Day</h2>
                    <p>Any fool can write code that a computer can understand. Good programmers write code that humans understand.</p>
                    <a href='https://www.thecoderpedia.com/blog/programming-quotes/' target="_blank" rel='noreferrer'>Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Box
