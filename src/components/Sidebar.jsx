import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, Table, X, UserPlus } from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen, setIsAuthenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/login");
  };

  const navItems = [
    { label: "Dashboard", icon: <Home className="w-5 h-5" />, path: "/" },
    { label: "Reports", icon: <Table className="w-5 h-5" />, path: "/reports" },
    {
      label: "ADD User",
      icon: <UserPlus className="w-5 h-5" />,
      path: "/add-user",
    },
  ];

  return (
    <aside
      className={`
        fixed md:static top-0 left-0 z-40 h-full w-64 bg-white shadow-lg md:shadow-none transform
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
    >
      <div className="p-4 flex flex-col h-full">
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h1 className="text-xl font-bold">My Dashboard</h1>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-gray-700 hover:text-black" />
          </button>
        </div>

        <h1 className="hidden md:block text-xl font-bold mb-6">My Dashboard</h1>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 p-2 rounded-md hover:bg-gray-200 transition-all ${
                location.pathname === item.path
                  ? "bg-gray-100 font-semibold"
                  : ""
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
      <button
        onClick={handleLogout}
        className={
          "relative bottom-20 left-5 bg-blue-600 text-gray-100 rounded-4xl px-4 w-4/5 py-1 hover:shadow-md hover:shadow-blue-300"
        }
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
