import React from 'react'

const Modal = ({component, closeModal}) => {

    return (
        <div className="popup">
            <div className="popup__inner">
                <button className="popup__close-btn" onClick={() => closeModal(false)}>Close</button>
                    {component}
            </div>
        </div>
    )
}

export default Modal
