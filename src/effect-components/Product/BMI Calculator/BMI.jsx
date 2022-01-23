import React, { useState } from "react";
import "./BMI.css";
import healthy from "./healthy.png";
import overweight from "./overweight.png";
import underweight from "./underweight.png";

const BMI = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let imgSrc;
  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 25) {
      imgSrc = underweight;
    } else if (bmi >= 25 && bmi <= 35) {
      imgSrc = healthy;
    } else {
      imgSrc = overweight;
    }
  }

  let calcBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      setMessage("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("You're underweight!");
      } else if (bmi >= 25 && bmi <= 35) {
        setMessage("You're healthy!");
      } else {
        setMessage("You're overweight!");
      }
    }
  };

  return (
    <div className="bmi__wrapper">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (in)</label>
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className="img-container">
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BMI;
