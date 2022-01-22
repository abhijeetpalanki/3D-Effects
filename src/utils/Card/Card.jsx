import React from "react";
import "./Card.css";
import Modal from "./Modal/Modal";

const Card = ({
  title,
  description,
  openModal,
  setOpenModal,
  filterItem,
  serialNo,
  theme,
  component,
  closeModal,
}) => {
  return (
    <>
      <div
        data-item={filterItem}
        className={
          theme.color === "white" ? "card-wrapper-light" : "card-wrapper-dark"
        }
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <div className="box">
          <div className="content">
            <h2>{serialNo}</h2>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>

      {openModal && <Modal component={component} closeModal={closeModal} />}
    </>
  );
};

export default Card;
