// Dashboard.js
import React from "react";
// import Sidebar from "../Sidebar";
import LineGraph from "../LineGraph";

import SalesPieChart from "../SalesPieChart";
import "./index.css";

function Dashboard() {
  return (
    <div className="dashboard">
      {/* <Sidebar /> */}
      <div className="content">
        <h2>Dashboard</h2>
        <div className="charts">
          <div className="line-chart">
            <LineGraph />
          </div>
          <div className="pie-chart">
            <SalesPieChart />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
