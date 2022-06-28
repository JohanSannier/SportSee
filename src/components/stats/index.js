import React from "react";
import { array } from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";
import "./index.css";

export default function UserPerformance(props) {
  return (
    <div className="user-performance">
      <RadarChart
        outerRadius={90}
        width={290}
        height={270}
        data={props.userPerformance}
      >
        <Tooltip />
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kindOfData"
          tick={{ fill: "#FFFFFF", fontSize: 11 }}
          axisLine={true}
          tickLine={true}
        />
        <PolarRadiusAxis
          tickCount={6}
          domain={[0, 150]}
          axisLine={false}
          tick={false}
        />
        <Radar
          dataKey="value"
          stroke="rgba(230, 0, 0, .7)"
          fill="#E60000"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
}

UserPerformance.propTypes = {
  userPerformance: array,
};
