import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import AddUser from "./pages/AddUser";
import { dummyData } from "./data/users";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Reports from "./pages/Reports";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [users, setUsers] = useState(dummyData);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <div className="md:hidden p-2">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="bg-blue-500 text-white px-3 py-2 rounded"
          >
            {sidebarOpen ? " " : <GiHamburgerMenu />}
          </button>
        </div>
        <main className="flex-1 p-2 md:p-6 bg-gray-100 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard users={users} />} />
            <Route
              path="/add-user"
              element={
                <AddUser addUser={(user) => setUsers([...users, user])} />
              }
            />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
