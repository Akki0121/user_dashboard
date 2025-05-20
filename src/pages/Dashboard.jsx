import React, { useState } from "react";
import DataTable from "../components/DataTable";
import { dummyData } from "../data/users";

const Dashboard = () => {
  const [users, setUsers] = useState(dummyData);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <DataTable users={users} />
    </div>
  );
};

export default Dashboard;
//export const userState = { users: [], setUsers: () => {} }; // optional for external sharing
