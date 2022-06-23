import React from "react";
import "./index.css";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

export default function UserScore(props) {
  let chartValues = [
    {
      value: 1,
      fill: "white",
    },
    {
      value: props.userScore,
      fill: "#FF0101",
    },
  ];
  return (
    <div className="score-chart">
      <h2>Score</h2>
      <h3>
        <span>{props.userScore ? props.userScore.value + "%" : null}</span>{" "}
        <span className="score-objectives">de votre objectif</span>
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="55%"
          innerRadius="80%"
          outerRadius="80%"
          barSize={10}
          data={chartValues}
          startAngle={110}
          endAngle={0}
        >
          <RadialBar dataKey="value" cornerRadius={10} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
