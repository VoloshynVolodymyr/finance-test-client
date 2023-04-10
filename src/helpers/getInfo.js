/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import io from "socket.io-client";
import { addData } from "../store/chartSlice";

const {REACT_APP_API_URL} = process.env;

const socket = io.connect(`${REACT_APP_API_URL}`);

export const startConnection = () => {
  const dispatch = useDispatch();
  const [tickers, setTickers] = useState([]);

  useEffect(() => {
    socket.emit("start");
    socket.on("ticker", function (quotes) {
      setTickers(quotes);
       });
  }, []);

  useEffect(() => {
    if (tickers.length !== 0) {
      dispatch(addData(tickers));
    }
  }, [tickers, dispatch]);
};

export const setTimeout = (newInterval) => {
    socket.emit("disconnection");
    socket.emit('interval', newInterval);
    socket.emit("start");
};

export const addTicker = (newTicker) => {
  socket.emit('newTicker', newTicker);
}

export const removeTicker = (tickerItem) => {
  socket.emit('removeTicker', tickerItem);
}
