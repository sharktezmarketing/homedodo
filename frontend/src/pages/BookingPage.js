import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function BookingPage() {
  const location = useLocation();

  const serviceName =
    location.state?.service || "";

  const user = JSON.parse(localStorage.getItem("user"));

  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    service_name: serviceName,
    booking_date: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/bookings/create",
        {
          user_id: user.id,
          ...formData,
        }
      );

      alert(res.data.message);

      setFormData({
        service_name: serviceName,
        booking_date: "",
        address: "",
      });

    } catch (error) {
      console.log(error.response?.data || error);

      alert("Booking failed");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          margin: "auto",
          background: "#fff",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <h2>Book Service</h2>

        <form onSubmit={handleBooking}>

          <input
            type="text"
            name="service_name"
            value={formData.service_name}
            readOnly
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
            }}
          />

          <input
            type="date"
            name="booking_date"
            min={today}
            value={formData.booking_date}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
            }}
          />

          <textarea
            name="address"
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleChange}
            rows="4"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Confirm Booking
          </button>

        </form>
      </div>
    </div>
  );
}

export default BookingPage;