import React, { useState } from "react";
import { addTicker } from "../../helpers/getInfo";
import { FaWindowClose } from "react-icons/fa";
import css from "./AddTickerForm.module.css";

const AddTickerForm = ({ visible, setVisible }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const regex = /^[a-zA-Z0-9]+$/;
    const inputValue = e.target.value;
    if (regex.test(inputValue)) {
      setValue(inputValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTicker(value);
    setVisible(false);
    setValue("");
  };

  return (
    visible && (
      <form className={css.addTickerForm} onSubmit={handleSubmit}>
        <button onClick={() => setVisible(true)} className={css.close}>
          <FaWindowClose
            style={{ width: "26px", height: "26px", color: "#fafafa" }}
          />
        </button>
        <div className={css.info}>
          <p className={css.text}>Add ticker: </p>
          <label htmlFor="inputField"></label>
          <input
            className={css.inputStyle}
            id="inputField"
            type="text"
            value={value}
            onChange={handleChange}
          />
        </div>
        <button className={css.submitBtn} type="submit">
          Submit
        </button>
      </form>
    )
  );
};

export default AddTickerForm;
