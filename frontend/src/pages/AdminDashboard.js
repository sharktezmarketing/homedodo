import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      <h2>All Bookings</h2>

      {bookings.map((booking) => (
        <div
          key={booking.id}
          style={{
            background: "#fff",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>{booking.service_name}</h3>

          <p>{booking.address}</p>

          <p>Status: {booking.status}</p>

          <p>User ID: {booking.user_id}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;