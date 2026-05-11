import React from "react";

function AdminDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      <h3>Welcome {user?.name}</h3>
    </div>
  );
}

export default AdminDashboard;