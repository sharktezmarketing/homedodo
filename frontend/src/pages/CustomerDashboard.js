import React from "react";

function CustomerDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "20px" }}>
      <h1>Customer Dashboard</h1>

      <h3>Welcome {user?.name}</h3>
    </div>
  );
}

export default CustomerDashboard;