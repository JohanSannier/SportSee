import React from "react";
import { Line, LineChart, XAxis, YAxis, Tooltip } from "recharts";
import "./index.css";

export default function userSessions(props) {
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="user-sessions">
      <h2>Durée moyenne des sessions</h2>
      <LineChart
        width={260}
        height={263}
        data={props.userSessions}
        margin={{ top: 0, right: 0, left: 0, bottom: 16 }}
        className="lineChart"
      >
        <XAxis
          dataKey="weekDays"
          stroke="rgba(255, 255, 255, 0.5)"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12 }}
          padding={{ left: 11, right: 9 }}
        />
        <YAxis
          hide={true}
          type="number"
          domain={["dataMin - 10", "dataMax + 40"]}
        />
        <Tooltip cursor={false} content={<CustomTooltip />} />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="#fff"
          strokeWidth={2}
          dot={false}
          r={8}
          height={40}
          margin={{ top: 0, right: 0, left: 0, bottom: 40 }}
        />
      </LineChart>
    </div>
  );
}
