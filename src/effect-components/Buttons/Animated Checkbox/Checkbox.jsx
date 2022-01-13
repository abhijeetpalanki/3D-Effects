import React from 'react';
import './Checkbox.css';

const Checkbox = () => {
    return (
        <div className="checkbox__wrapper">
            <ul>
                <li>
                    <label>
                        <input type="checkbox" name="" />
                        <div className="icon">
                            <i className="fa fa-gift"></i>
                        </div>
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name="" />
                        <div className="icon">
                            <i className="fa fa-glass"></i>
                        </div>
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name="" />
                        <div className="icon">
                            <i className="fa fa-heart"></i>
                        </div>
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name="" />
                        <div className="icon">
                            <i className="fa fa-globe"></i>
                        </div>
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name="" />
                        <div className="icon">
                            <i className="fa fa-graduation-cap"></i>
                        </div>
                    </label>
                </li>
            </ul>
        </div>
    )
}

export default Checkbox
