import React from "react";
import { ChartData } from "../../data/ChartData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type Props = {
  data?: ChartData[]
};

type State = {};

const WeatherChart: React.FC<Props> = ({ data }) => {
  return (
    <LineChart
      width={700}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
    </LineChart>
  )
};

export default WeatherChart;