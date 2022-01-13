import React from 'react'

const Card = ({title, description, setOpenModal, filterItem, serialNo}) => {
    return (
        <div data-item={filterItem} className="card-wrapper">
            <div className="box">
                <div className="content">
                    <h2>{serialNo}</h2>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href="!#" onClick={() => {setOpenModal(true);}}>View More</a>
                </div>
            </div>
        </div>
    )
}

export default Card
