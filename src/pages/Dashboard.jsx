import { Button, TextField } from "@shopify/polaris";
import React, { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { calculateDate, revenueData, subscriptionData } from "../assets/data";

const Dashboard = () => {
  const [startDate, setStartDate] = useState(calculateDate(6));
  const [endDate, setEndDate] = useState(calculateDate(0));
  const [filteredSubscriptionData, setFilteredSubscriptionData] = useState(
    subscriptionData.slice(0, 6).reverse()
  );

  const handleFilter = () => {
    const filteredData = subscriptionData.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
    });
    setFilteredSubscriptionData(filteredData.reverse());
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          marginBottom: "20px",
          fontSize: "20px",
          fontWeight: 600,
          lineHeight: "24px",
        }}
      >
        Dashboard
      </h1>
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <TextField
          type="date"
          label="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e)}
        />
        <TextField
          type="date"
          label="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e)}
        />
        <div style={{ display: "flex", alignItems: "end" }}>
          <Button size="large" onClick={handleFilter}>
            Filter
          </Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <LineChart
          width={700}
          height={300}
          data={filteredSubscriptionData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="subscription" stroke="#8884d8" />
        </LineChart>
        <BarChart
          width={600}
          height={300}
          data={revenueData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
