import React, { useState, useEffect } from "react";
import { dummyData } from "../data/users";

const DataTable = ({ users }) => {
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [sortedData, setSortedData] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSortedData(users);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const filteredData = sortedData.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSort = () => {
    const sorted = [...filteredData].sort((a, b) => {
      return sortAsc
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
    setSortedData(sorted);
    setSortAsc(!sortAsc);
  };

  if (loading) {
    return (
      <div className="p-4 bg-white rounded shadow">
        <div className="animate-pulse space-y-2">
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-2 md:p-4 rounded-lg shadow overflow-x-auto">
      <div className="flex flex-col md:flex-row justify-between gap-2 md:items-center mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded w-full md:w-1/3"
        />
        <button
          onClick={handleSort}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Sort by Name {sortAsc ? "▲" : "▼"}
        </button>
      </div>
      <table className="w-full text-left text-sm md:text-base">
        <thead>
          <tr className="border-b">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.email}</td>
              <td className="p-2">{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
