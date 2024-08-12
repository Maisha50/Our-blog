
import React, { useState, useEffect } from "react";

import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
  PieChart,
  Pie,
} from "recharts";

function Dashboard() {
  const [category, setCategory] = useState("");

  const fetchdata = async () => {
    try {
      const response = await axios.post("http://localhost:8000/dashboard");
      console.log(response.data.category);
      setCategory(response.data.category);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={category}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="number"
              fill="#8884d8"
              activeBar={{ fill: "lavender", stroke: "blue" }}
            />
          </BarChart>
        </ResponsiveContainer>
        <div
          className="chart-title fs-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Bar Chart
        </div>
      </div>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              dataKey="number"
              isAnimationActive={false}
              data={category}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label={(entry) => entry.type} // This will label each slice with the category type
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div
          className="chart-title fs-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Pie Chart
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
