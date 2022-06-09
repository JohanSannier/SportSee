import React, { PureComponent } from "react";
import "./index.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1",
    kg: 4000,
    kCal: 2400,
    amt: 2400,
  },
  {
    name: "2",
    kg: 3000,
    kCal: 1398,
    amt: 2210,
  },
  {
    name: "3",
    kg: 2000,
    kCal: 9800,
    amt: 2290,
  },
  {
    name: "4",
    kg: 2780,
    kCal: 3908,
    amt: 2000,
  },
  {
    name: "5",
    kg: 1890,
    kCal: 4800,
    amt: 2181,
  },
  {
    name: "6",
    kg: 2390,
    kCal: 3800,
    amt: 2500,
  },
  {
    name: "7",
    kg: 3490,
    kCal: 4300,
    amt: 2100,
  },
  {
    name: "8",
    kg: 3490,
    kCal: 4300,
    amt: 2100,
  },
  {
    name: "9",
    kg: 3490,
    kCal: 4300,
    amt: 2100,
  },
  {
    name: "10",
    kg: 3490,
    kCal: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
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
          <Bar dataKey="kg" fill="#282D30" />
          <Bar dataKey="kCal" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
