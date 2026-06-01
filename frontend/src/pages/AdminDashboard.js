import React, { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/bookings"
      );

      setBookings(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="dashboard-container">

      <Sidebar title="Admin Panel" />

      <div className="main-content">

        <h1>Admin Dashboard</h1>

        <br />

        {bookings.map((booking) => (

          <div
            key={booking.id}
            className="dashboard-card"
          >
            <h3>{booking.service_name}</h3>

            <br />

            <p>{booking.address}</p>

            <br />

            <p>User ID: {booking.user_id}</p>

            <br />

            <span
              className={`status ${booking.status}`}
            >
              {booking.status}
            </span>

          </div>
        ))}

      </div>
    </div>
  );
}

export default AdminDashboard;