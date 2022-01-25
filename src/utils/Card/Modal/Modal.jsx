import React from "react";
import "./Modal.css";

const Modal = ({ component, hide, isShowing }) =>
  isShowing && (
    <>
      <div className="popup">
        <div className="popup__inner">
          <button className="popup__close-btn" onClick={hide}>
            Close
          </button>
          {component}
        </div>
      </div>
    </>
  );

export default Modal;
