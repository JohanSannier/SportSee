import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "L",
    min: 30,
  },
  {
    name: "M",
    min: 42,
  },
  {
    name: "M",
    min: 45,
  },
  {
    name: "J",
    min: 35,
  },
  {
    name: "V",
    min: 68,
  },
  {
    name: "S",
    min: 40,
  },
  {
    name: "D",
    min: 82,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical=""
            horizontal=""
            fill="rgba(255, 0, 0, 1)"
          />
          <XAxis
            dataKey="name"
            tickLine={false}
            mirror={true}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis axisLine={false} tickLine={false} hide={true} />
          <Tooltip itemStyle={{ color: "black" }} />
          <Area
            type="monotone"
            dataKey="min"
            stroke="white"
            fill="#E60000"
            background={"red"}
          />
          <Legend
            payload={[
              { value: "Durée moyenne des sessions", type: "line", id: "ID01" },
            ]}
            verticalAlign="middle"
            align="left"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
