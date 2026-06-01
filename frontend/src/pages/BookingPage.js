import React,
{
  useState,
} from "react";

import axios from "axios";

import {
  useLocation,
} from "react-router-dom";

import {
  useNavigate,
} from "react-router-dom";

function BookingPage() {

  const location = useLocation();

  const service =
    location.state?.service;

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [formData, setFormData] =
    useState({
      service_name:
        service?.service_name || "",
      booking_date: "",
      address: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
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

      alert("Booking Successful");
      
    } catch (error) {

      console.log(error);

      alert("Booking failed");

    }
  };

  const navigate =
useNavigate();

  return (
    <div
      style={{
        padding: "20px",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >

      <div
        style={{
          maxWidth: "500px",
          margin: "auto",
          background: "#fff",
          padding: "25px",
          borderRadius: "15px",
        }}
      >

        <h2>Book Service</h2>

        <br />

        <form onSubmit={handleBooking}>

          <input
            type="text"
            name="service_name"
            value={formData.service_name}
            readOnly
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              color: "#000",
            }}
          />

          <br />
          <br />

          <input
            type="date"
            name="booking_date"
            value={formData.booking_date}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              color: "#000",
            }}
          />

          <br />
          <br />

          <textarea
            name="address"
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleChange}
            required
            rows="4"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              color: "#000",
            }}
          />

          <br />
          <br />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              border: "none",
              borderRadius: "10px",
              background: "#000",
              color: "#fff",
              fontSize: "16px",
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