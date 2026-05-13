import React, { useEffect, useState } from "react";
import axios from "axios";

function VendorDashboard() {
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

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:5000/api/bookings/update/${id}`,
        { status }
      );

      fetchBookings();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Vendor Dashboard</h1>

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

          <button
            onClick={() =>
              updateStatus(booking.id, "accepted")
            }
          >
            Accept
          </button>

          <button
            onClick={() =>
              updateStatus(booking.id, "completed")
            }
            style={{ marginLeft: "10px" }}
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  );
}

export default VendorDashboard;