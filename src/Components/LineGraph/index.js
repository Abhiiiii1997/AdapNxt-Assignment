// LineGraph.js
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "6/20/2024-7/7/2024",
    orders: 4,
    sales: 1404,
  },
  {
    name: "7/7/2024-7/13/2024",
    orders: 2,
    sales: 800,
  },
  {
    name: "6/20/2024-7/6/2024",
    orders: 2,
    sales: 480,
  },
];

function LineGraph() {
  const yAxisTickFormatter = (value) => {
    return value === 0 ? "0k" : `${(value / 1000).toFixed(1)}k`;
  };

  const CustomToolTip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const orders = payload.find((p) => (p.name = "orders"))?.value || 0;
      const sales = payload.find((p) => (p.name = "sales"))?.value || 0;
      const avgValue = orders > 0 ? (sales / orders).toFixed(2) : 0;

      return (
        <div className="custom-tooltip">
          <div className="tooltip-date">{label}</div>
          <div>
            <span style={{ color: "#FFA500" }}>●</span> Order - {orders}
          </div>
          <div>
            <span style={{ color: "#FFA500" }}>●</span> Sales - {sales}
          </div>
          <div>
            <span style={{ color: "#FFA500" }}>●</span> Avg Order Value -
            {avgValue}
          </div>
        </div>
      );
    }
  };
  return (
    <div className="graph-container">
      <h3>
        Sales vs Orders{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-info-circle"
          viewBox="0 0 16 16"
          style={{ marginLeft: "8px", verticalAlign: "middle" }} // Add some spacing and alignment
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
      </h3>
      <ResponsiveContainer width="180%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} />
          <YAxis
            yAxisId="left"
            orientation="left"
            tickFormatter={yAxisTickFormatter}
          />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip content={CustomToolTip} />
          <Legend verticalAlign="top" />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="sales"
            stroke="#00CED1"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="orders"
            stroke="#FFA500"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineGraph;
