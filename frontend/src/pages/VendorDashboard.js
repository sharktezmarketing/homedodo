import React, { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";

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
    <div className="dashboard-container">

      <Sidebar title="Vendor Panel" />

      <div className="main-content">

        <h1>Vendor Dashboard</h1>

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

            <span
              className={`status ${booking.status}`}
            >
              {booking.status}
            </span>

            <br />

            <button
              className="action-btn"
              onClick={() =>
                updateStatus(
                  booking.id,
                  "accepted"
                )
              }
            >
              Accept
            </button>

            <button
              className="action-btn"
              onClick={() =>
                updateStatus(
                  booking.id,
                  "completed"
                )
              }
            >
              Complete
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}

export default VendorDashboard;