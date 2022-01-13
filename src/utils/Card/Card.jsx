import React from 'react';
import './Card.css';

const Card = ({title, description, setOpenModal, filterItem, serialNo}) => {
    return (
        <div data-item={filterItem} className="card-wrapper" onClick={() => {setOpenModal(true);}}>
            <div className="box">
                <div className="content">
                    <h2>{serialNo}</h2>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
