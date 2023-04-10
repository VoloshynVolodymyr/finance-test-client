import React, { useState } from "react";
import { startConnection, setTimeout } from "../../helpers/getInfo";
import timeConverter from "../../helpers/timeConverter";

import { FaWindowClose } from "react-icons/fa";
import css from "./TimeoutForm.module.css";

const TimeoutForm = ({ visible, setVisible }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);
  const [never, setNever] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let time = !never
    ? timeConverter(hours, minutes, seconds) * 1000
    : 86400000;
    if (hours === 0 && minutes === 0 && never === false && seconds < 5){
      time=-1;
      setVisible(time)
      return console.log("You cannot set an interval of less than 5 seconds");}

    setTimeout(time);

    setVisible(time);
  };

  startConnection();

  const handleHoursChange = (event) => {
    setHours(parseInt(event.target.value, 10));
  };

  const handleMinutesChange = (event) => {
    setMinutes(parseInt(event.target.value, 10));
  };

  const handleSecondsChange = (event) => {
    setSeconds(parseInt(event.target.value, 10));
  };

  const handleNeverChange = (event) => {
    setNever(event.target.checked);
  };

  return (
    visible && (
      <form className={css.timeoutForm} onSubmit={handleSubmit}>
        <button onClick={() => setVisible(true)} className={css.close}>
          <FaWindowClose
            style={{ width: "26px", height: "26px", color: "#fafafa" }}
          />
        </button>


        <div className={css.info}>
          <p className={css.text}>Hours:</p>
          <label>
            <input
              className={css.inputStyle}
              type="number"
              min="0"
              value={hours}
              onChange={handleHoursChange}
            />
          </label>
        </div>
        <div className={css.info}>
          <p className={css.text}>Minutes:</p>
          <label>
            <input
              className={css.inputStyle}
              type="number"
              min="0"
              max="59"
              value={minutes}
              onChange={handleMinutesChange}
            />
          </label>
        </div>
        <div className={css.info}>
          <p className={css.text}>Seconds:</p>
          <label>
            <input
              className={css.inputStyle}
              type="number"
              min="0"
              max="59"
              value={seconds}
              onChange={handleSecondsChange}
              disabled={hours !== 0 || minutes !== 0}
            />
          </label>
        </div>
        <div className={css.info}>
          <p className={css.text}>Never:</p>
          <label>
            <input
              className={css.check}
              type="checkbox"
              checked={never}
              onChange={handleNeverChange}
            />
          </label>
        </div>
        <button className={css.submitBtn} type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    )
  );
};

export default TimeoutForm;
