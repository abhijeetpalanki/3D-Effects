import React from 'react';
import './Card.css';

const Card = ({title, description, setOpenModal, filterItem, serialNo, theme}) => {
    return (
        <div data-item={filterItem}  className={theme.color === "white" ? "card-wrapper-light" : "card-wrapper-dark"} onClick={() => {setOpenModal(true);}}>
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
