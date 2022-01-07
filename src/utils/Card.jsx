import React from 'react'

const Card = ({image, title, description, setOpenModal}) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="card__image" style={{background: `linear-gradient(#fff0 0%, #fff0 70%, #1d1d1d 100%), url(${image})`}}></div>
                <h2 className="card__title">{title}</h2>
                <p className="card__description">{description}</p>
            </div>
            <div className="card-stats" onClick={() => {setOpenModal(true);}}>
                <div className="stat">
                    <div className="value"></div>  
                    <div className="type"></div>
                </div>
                <div className="stat">
                    <div className="value"></div>  
                    <div className="type">                        
                        View 
                    </div>
                </div>
                <div className="stat">
                    <div className="value"></div>  
                    <div className="type"></div>
                </div>
            </div>
        </div>
    )
}

export default Card
