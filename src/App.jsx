import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import AddUser from "./pages/AddUser";
import { dummyData } from "./data/users";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Reports from "./pages/Reports";
import Login from "./pages/Login";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [users, setUsers] = useState(dummyData);
  const [IsAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  return (
    <div className="flex h-screen overflow-hidden">
      {IsAuthenticated && (
        <Sidebar
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
          setIsAuthenticated={setIsAuthenticated}
        />
      )}
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
            <Route
              path="/login"
              element={
                IsAuthenticated ? (
                  <Navigate to="/" state={{ from: location }} />
                ) : (
                  <Login setIsAuthenticated={setIsAuthenticated} />
                )
              }
            />
            <Route
              path="/"
              element={
                IsAuthenticated ? (
                  <Dashboard users={users} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/add-user"
              element={
                IsAuthenticated ? (
                  <AddUser addUser={(user) => setUsers([...users, user])} />
                ) : (
                  <Navigate to="/login" state={{ from: location }} />
                )
              }
            />
            <Route
              path="/reports"
              element={
                IsAuthenticated ? (
                  <Reports />
                ) : (
                  <Navigate to="/login" state={{ from: location }} />
                )
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
