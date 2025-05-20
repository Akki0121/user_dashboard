// File: src/pages/Reports.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { dummyData } from "../data/users";

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7f50",
  "#a78bfa",
  "#34d399",
];

const getUserRoleCounts = () => {
  const roleMap = {};
  dummyData.forEach((user) => {
    roleMap[user.role] = (roleMap[user.role] || 0) + 1;
  });
  return Object.entries(roleMap).map(([role, count]) => ({ role, count }));
};

const Reports = () => {
  const roleData = getUserRoleCounts();

  return (
    <div className="w-full px-4 md:px-8 py-6">
      <h2 className="text-xl md:text-3xl font-bold mb-6 text-center md:text-left">
        User Role Statistics
      </h2>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {roleData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded shadow text-center border-l-4"
            style={{ borderColor: COLORS[idx % COLORS.length] }}
          >
            <h4 className="text-md md:text-lg font-semibold">{item.role}</h4>
            <p className="text-2xl font-bold text-gray-700">{item.count}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-center">
            Users per Role (Bar)
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={roleData}>
              <XAxis dataKey="role" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-center">
            Users per Role (Pie)
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={roleData}
                dataKey="count"
                nameKey="role"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {roleData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Reports;
