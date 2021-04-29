import React from "react";
import "./App.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const App = () => {
  const data1 = [
  
    { name: "AP", users: 15},
    { name: "West-Bengal", users: 25 },
    { name: "Delhi", users: 35 },
    { name: "Maharastra", users: 25 },
  ];

  const data2 = [

    { name: "CS", users: 68},
    { name: "IT", users: 45 },
    { name: "MBA", users: 92 },
    { name: "MCA", users: 76 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>College Students</h1>
      <div className="App">
        <div><h5>Percentage Chart By States (Strength of student)</h5></div>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data1}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#1a57e8"
            label
          />
          <Tooltip />
        </PieChart>
        <h5>Percentage Chart By (Course offered)</h5>
        <BarChart
          width={500}
          height={300}
          data={data2}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#1a57e8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default App;
