import React, { Component } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";
import "./index.css"; // Ensure the CSS file is imported

const data = [
  { name: "WooCommerce Store", value: 54.1 },
  { name: "Shopify Store", value: 44.7 },
];

const COLORS = ["#FF6384", "#36A2EB"];

class PieChartComponent extends Component {
  render() {
    return (
      <div className="graph-container">
        <h3>
          Portion of Sales
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-info-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={80}
              fill="#8884d8"
              label={({ percent }) => `${percent * 100}.toFixed(1)}%`}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <text
                x={150}
                y={150}
                textAnchor="middle"
                dominantBaseline="middle"
                className="pie-chart-total"
              >
                2659
              </text>
            </Pie>
            <Tooltip />
            <Legend
              iconType="circle"
              align="center"
              verticalAlign="bottom"
              iconSize={10}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default PieChartComponent;
