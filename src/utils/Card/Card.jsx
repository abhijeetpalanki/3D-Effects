import React from "react";
import "./Card.css";
import Modal from "./Modal/Modal";
import useModal from "./../Hooks/useModal";

const Card = ({
  title,
  description,
  filterItem,
  serialNo,
  theme,
  component,
}) => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <div
        onClick={toggle}
        data-item={filterItem}
        className={
          theme.color === "white" ? "card-wrapper-light" : "card-wrapper-dark"
        }
      >
        <div className="box">
          <div className="content">
            <h2>{serialNo}</h2>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>

      <Modal component={component} hide={toggle} isShowing={isShowing} />
    </>
  );
};

export default Card;
