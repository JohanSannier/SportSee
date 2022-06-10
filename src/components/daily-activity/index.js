import React, { PureComponent } from "react";
import "./index.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1",
    kg: 66,
    kCal: 242,
  },
  {
    name: "2",
    kg: 68.5,
    kCal: 298,
  },
  {
    name: "3",
    kg: 67,
    kCal: 356,
  },
  {
    name: "4",
    kg: 67.3,
    kCal: 311,
  },
  {
    name: "5",
    kg: 67.8,
    kCal: 269,
  },
  {
    name: "6",
    kg: 68,
    kCal: 301,
  },
  {
    name: "7",
    kg: 67.7,
    kCal: 249,
  },
  {
    name: "8",
    kg: 67.2,
    kCal: 198,
  },
  {
    name: "9",
    kg: 67.5,
    kCal: 229,
  },
  {
    name: "10",
    kg: 68,
    kCal: 379,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <>
        <div className="activity-legend">
          <h2>Activité quotidienne</h2>
          <ul>
            <li className="bullet-kg">Poids (kg)</li>
            <li className="bullet-kcal">Calories brûlées (kCal)</li>
          </ul>
        </div>
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
            <CartesianGrid
              strokeDasharray="3 3"
              vertical=""
              horizontal="true"
            />
            <XAxis dataKey="name" />
            <YAxis
              axisLine={false}
              tickLine={false}
              orientation="right"
              dataKey="kg"
              domain={["dataMin - 1", "dataMax + 2"]}
              allowDataOverflow={true}
            />
            <Tooltip />
            <Bar
              dataKey="kg"
              fill="#282D30"
              radius={[10, 10, 0, 0]}
              barSize={10}
            />
            <Bar
              dataKey="kCal"
              fill="#E60000"
              radius={[10, 10, 0, 0]}
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </>
    );
  }
}
