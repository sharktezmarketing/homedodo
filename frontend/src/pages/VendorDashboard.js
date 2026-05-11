import React from "react";

function VendorDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "20px" }}>
      <h1>Vendor Dashboard</h1>

      <h3>Welcome {user?.name}</h3>
    </div>
  );
}

export default VendorDashboard;