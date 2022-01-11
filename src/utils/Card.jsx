import React from 'react'

const Card = ({image, title, description, setOpenModal}) => {
    return (
        <div className="card-wrapper" onClick={() => {setOpenModal(true);}}>
            <div>
                <div className="card__image" style={{background: `linear-gradient(#fff0 0%, #fff0 70%, #1d1d1d 100%), url(${image})`}}></div>
                <h2 className="card__title">{title}</h2>
                <p className="card__description">{description}</p>
            </div>
        </div>
    )
}

export default Card
