import React from "react";
import { useState } from "react";
import axios from "axios";

export default function AddUser() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("student");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/users/create", { name, role });
    alert("User added successfully!");
    setName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-3">
        <h1>Add User</h1>
        <input
          placeholder="Name"
          className="form-control mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          className="form-control mb-2"
          value={role}
          onChange={(e) => setRole(e.target.value)}>
          <option>student</option>
          <option>teacher</option>
          <option>admin</option>
        </select>
        <button className="btn btn-primary">Add User</button>
      </form>
    </>
  );
}
