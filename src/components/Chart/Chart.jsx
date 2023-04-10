/* eslint-disable array-callback-return */
import css from "./Chart.module.css";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COMPANY = {
  0: "Apple",
  1: "Google",
  2: "Microsoft",
  3: "Amazon",
  4: "Facebook",
  5: "Tesla",
};

function Chart({ item }) {
  const chartData = useSelector((state) => state.charts.charts);
  let dataArray = [];

  chartData.map((elem, index) => {
    if (elem && index % 2 === 0) {
      dataArray = [
        ...dataArray,
        {
          name: `${Math.round(elem[item].price)}`,
          pin: elem[item].price,
        },
      ];
    }
  });
  let title = "";
  item && (title = COMPANY[item]);

  return (
    <div className={css.chart}>
      <h3 className={css.chartTitle}>{title}</h3>
      {dataArray && (
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={dataArray}>
            <XAxis dataKey="name" stroke="black" tick={{ fill: "#0ff" }} />
            <YAxis />
            <Line type="monotone" dataKey={"pin"} stroke="#0ff" />
            <Tooltip />
            <CartesianGrid
              vertical
              horizontal={false}
              verticalFill={["#555555", "#444444"]}
              fillOpacity={0.2}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default Chart;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import css from './Chart.module.css';

// const Chart = ({index}) => {

//     const data = useSelector(state => state.charts.charts);
//     data.map(elem=> console.log(elem[index].price));
//   return (
//     <div>{index}</div>
//   )
// }

// export default Chart
