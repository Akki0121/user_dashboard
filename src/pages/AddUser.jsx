// File: src/pages/AddUser.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [form, setForm] = useState({ name: "", email: "", role: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "This functionality is just for adding a new feature. It is not supported in this project."
    );

    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <h2 className="text-xl md:text-2xl font-bold text-center">
          Add New User
        </h2>

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <input
          name="role"
          placeholder="Role"
          value={form.role}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
