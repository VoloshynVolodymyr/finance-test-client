import React from "react";
import clsx from "clsx";
import css from "./Ticker.module.css";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { PulseLoader } from "react-spinners";
import { removeTicker } from "../../helpers/getInfo";
import { useState } from "react";

const Ticker = ({ elem, index, prevPrice, onValueChange }) => {
  const {
    change,
    change_percent,
    dividend,
    exchange,
    last_trade_time,
    price,
    ticker,
    yield: Yield,
  } = elem;
  const TICKERS = {
    AAPL: "Apple",
    GOOGL: "Alphabet",
    MSFT: "Microsoft",
    AMZN: "Amazon",
    FB: "Facebook",
    TSLA: "Tesla",
  };

  const [isVisibleButton, setisVisibleButton] = useState(false);

  const removeTickerFromDB = () => {
    removeTicker(index);
  };

  let date = new Date(Date.parse(last_trade_time));
  date = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  function handleChange() {
    onValueChange(index);
  }

  setTimeout(() => {
    setisVisibleButton(true);
  }, 8000);

  const titleTicker = TICKERS[ticker] ? TICKERS[ticker] : ticker;
  return (
    <li className={css.wrapper}>
      <div className={clsx(css.listItem, css.title)}>
        <p>{titleTicker} </p>
        {prevPrice && (
          <div className={css.price}>
            {prevPrice > price ? (
              <FaArrowCircleDown style={{ color: "blue" }} />
            ) : (
              <FaArrowCircleUp />
            )}
          </div>
        )}
      </div>

      <div className={css.listItem}>
        <p>Price: </p>
        <div className={css.price}>{price}</div>
      </div>

      <div className={css.listItem}>
        <p>Change: </p>
        <div className={css.price}>{change}</div>
      </div>

      <div className={css.listItem}>
        <p>Percent: </p>
        <div className={css.price}>{change_percent} %</div>
      </div>

      <div className={css.listItem}>
        <p>Dividend: </p>
        <div className={css.price}>{dividend}</div>
      </div>

      <div className={css.listItem}>
        <p>Date: </p>
        <div className={css.price}>{date}</div>
      </div>

      <div className={css.listItem}>
        <p>Yield: </p>
        <div className={css.price}>{Yield}</div>
      </div>

      <div className={css.listItem}>
        <p>Exchange: </p>
        <div className={css.price}>{exchange}</div>
      </div>

      {!isVisibleButton && (
        <div className={css.preloader}>
          <PulseLoader
            color="rgba(126, 126, 126, 0.5)"
            margin={2}
            size={6}
            speedMultiplier={0.5}
          />
          ,
          <PulseLoader
            color="rgba(126, 126, 126, 0.5)"
            margin={2}
            size={6}
            speedMultiplier={0.5}
          />
        </div>
      )}

      {isVisibleButton && (
        <div className={css.buttonContainer}>
          <button
            className={css.button}
            type="button"
            onClick={removeTickerFromDB}
          >
            Remove
          </button>

          <button
            className={css.button}
            type="button"
            onClick={() => handleChange(index)}
          >
            See chart
          </button>
        </div>
      )}
    </li>
  );
};

export default Ticker;
