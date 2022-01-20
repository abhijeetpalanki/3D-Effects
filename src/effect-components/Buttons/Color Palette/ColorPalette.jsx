import React, { useEffect, useState } from 'react';
import './ColorPalette.css';

const ColorPalette = () => {
  const generateColors = () => {
    const color = document.querySelectorAll('.color-palette__wrapper .palette .colors .color');
    const hex = document.querySelectorAll('.color-palette__wrapper .palette .colors .hex');

    for (let i = 0; i < color.length; i++) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      color[i].style.background = "#" + randomColor;
      color[i].classList.add("fade-in");

      setTimeout(() => {
        color[i].classList.remove('fade-in')
      }, 400);

      hex[i].innerHTML = "#"+randomColor;
    }
  }

  useEffect(() => {
    generateColors();
  }, []);  

  return <div className="color-palette__wrapper">
      <div className="palette">
        <button onClick={generateColors}>Generate New</button>
        <div className="colors">
          <div>
            <h4 className="hex">#1234</h4>
            <div className="color"></div>
          </div>
          <div>
            <h4 className="hex">#1234</h4>
            <div className="color"></div>
          </div>
          <div>
            <h4 className="hex">#1234</h4>
            <div className="color"></div>
          </div>
          <div>
            <h4 className="hex">#1234</h4>
            <div className="color"></div>
          </div>
        </div>
      </div>
  </div>;
};

export default ColorPalette;
