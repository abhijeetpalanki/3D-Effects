import React, { useState } from "react";
import "./ProductSlider.css";
import shoes1 from "./shoes1.png";
import shoes2 from "./shoes2.png";
import shoes3 from "./shoes3.png";

const ProductSlider = () => {
  const [imageSrc, setImageSrc] = useState(shoes1);

  const changeImageSrc = (src) => {
    setImageSrc(src);
  };

  return (
    <div className="product-slider__wrapper">
      <div className="container">
        <ul className="thumb">
          <li onMouseOver={() => changeImageSrc(shoes1)}>
            <img src={shoes1} alt="shoes1" />
          </li>
          <li onMouseOver={() => changeImageSrc(shoes2)}>
            <img src={shoes2} alt="shoes2" />
          </li>
          <li onMouseOver={() => changeImageSrc(shoes3)}>
            <img src={shoes3} alt="shoes3" />
          </li>
        </ul>
        <div className="imgBox">
          <h2>Nike Air Zoom</h2>
          <img src={imageSrc} alt="imageSrc" />
          <ul className="size">
            <span>Size</span>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </ul>
          <a href="!#" className="add-button">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
