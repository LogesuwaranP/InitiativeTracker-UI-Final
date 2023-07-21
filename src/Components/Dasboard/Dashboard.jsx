import React from "react";
import "./Dashboard.css";
import DashboardCard from "../DashboardCard/DashboardCard";
import Chart from "../Chart/Chart";
export default function Dashboard() {
  return (
    <>
      <DashboardCard></DashboardCard>
      <Chart></Chart>
    </>
  );
}
