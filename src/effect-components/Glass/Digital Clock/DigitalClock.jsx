import React, { useEffect, useState } from "react";
import "./DigitalClock.css";

const DigitalClock = () => {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [seconds, setSeconds] = useState("");
  const [ampm, setAmpm] = useState("");

  useEffect(() => {
    let interval = setInterval(() => {
      if (new Date().getHours() > 12) {
        setHour("0" + (new Date().getHours() - 12));
        setAmpm("PM");
      } else {
        setHour("0" + new Date().getHours());
        setAmpm("AM");
      }

      if (new Date().getMinutes() > 9) {
        setMinute(new Date().getMinutes());
      } else {
        setMinute("0" + new Date().getMinutes());
      }

      if (new Date().getSeconds() > 9) {
        setSeconds(new Date().getSeconds());
      } else {
        setSeconds("0" + new Date().getSeconds());
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="digital-clock__wrapper">
      <section>
        <div className="clock">
          <div className="container">
            <h2 id="hour">{hour}</h2>
            <h2 className="dot">:</h2>
            <h2 id="minute">{minute}</h2>
            <h2 className="dot">:</h2>
            <h2 id="seconds">{seconds}</h2>
            <span id="ampm">{ampm}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalClock;
