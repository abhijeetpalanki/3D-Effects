import React, { useEffect, useState } from "react";
import "./Filter.css";

const Filter = ({ theme, filterEffects, buttons }) => {
  return (
    <div
      className={
        theme.color === "white"
          ? "filter__wrapper-light"
          : "filter__wrapper-dark"
      }
    >
      <section>
        <ul>
          {buttons.map((item, itemIdx) => (
            <li key={itemIdx} onClick={() => filterEffects(item)}>
              {item.toUpperCase()}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Filter;
