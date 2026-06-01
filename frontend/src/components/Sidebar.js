import React from "react";

function Sidebar({ title }) {
  return (
    <div className="sidebar">
      <h2>{title}</h2>

      <ul>
        <li>Dashboard</li>
        <li>Bookings</li>
        <li>Services</li>
        <li>Profile</li>
      </ul>
    </div>
  );
}

export default Sidebar;