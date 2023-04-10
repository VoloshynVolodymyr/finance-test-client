import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Chart from "../Chart/Chart";
import Ticker from "../Ticker/Ticker";
import css from "./InformationBoard.module.css";

const InformationBoard = () => {
  const [value, setValue] = useState(null);
  const [isVisibleChart, setisVisibleChart] = useState(false);
  const data = useSelector((state) => state.charts.charts);
  const monitoring = data[data.length - 2];
  const prevData = data[data.length - 3];

  function handleChildValue(newValue) {
    setValue(newValue);
    setisVisibleChart(true);
  }
  return (
    <div className={css.informationBoard}>
      <ul className={css.wrapperUl}>
        {monitoring &&
          prevData &&
          monitoring.map(
            (elem, index) =>
              prevData[index]?.price && (
                <Ticker
                  key={index}
                  index={index}
                  elem={elem}
                  prevPrice={prevData[index].price}
                  onValueChange={handleChildValue}
                />
              )
          )}
      </ul>
      {isVisibleChart && (
        <div className={css.chart}>
          <Chart item={value} />
          <button onClick={() => setisVisibleChart(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default InformationBoard;
