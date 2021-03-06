import React from "react";
import { array } from "prop-types";
import "./index.css";
import redDot from "../../assets/red-dot.png";
import blackDot from "../../assets/black-dot.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/**
 *
 * @param {array} props the daily activity data in an array
 * @returns {HTMLElement} the daily activity chart
 */
export default function UserDailyActivity(props) {
  const TooltipStyle = ({ payload }) => {
    if (payload && payload.length) {
      return (
        <div className="tooltip">
          <p>{payload[0].value}kg</p>
          <p className="tooltip-kcal">{payload[1].value}Kcal</p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="daily-activity">
      <div className="daily-activity-legend">
        <h3>Activité quotidienne</h3>
        <div className="legend">
          <div className="weight">
            <img src={blackDot} alt="" />
            <p>Poids (kg)</p>
          </div>
          <div className="calories">
            <img src={redDot} alt="" />
            <p>Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer>
        <BarChart
          width={770}
          height={245}
          data={props.userActivity}
          barCategoryGap={35}
          barGap={8}
          margin={{ top: 50, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <Tooltip content={<TooltipStyle payload={[props.userActivity]} />} />
          <XAxis
            tick={{
              transform: "translate(0, 16)",
              stroke: "#9B9EAC",
              fontSize: "14px",
            }}
            scale="auto"
            padding={{ left: -25, right: -25 }}
            tickLine={false}
            dataKey="name"
            axisLine={false}
            interval={0}
          />
          <YAxis
            yAxisId={"kil"}
            domain={["dataMin - 2", "dataMax + 1"]}
            tick={{ transform: "translate(0, 0)", fontSize: "14px" }}
            tickMargin={15}
            tickLine={true}
            orientation="right"
            dataKey="kilogram"
            axisLine={false}
          />
          <YAxis
            yAxisId={"cal"}
            hide={true}
            domain={["dataMin - 100", "dataMax"]}
          />
          <Bar
            yAxisId={"kil"}
            dataKey="kilogram"
            fill="#000"
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId={"cal"}
            dataKey="calories"
            fill="#e60000"
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

UserDailyActivity.propTypes = {
  userActivity: array,
};
