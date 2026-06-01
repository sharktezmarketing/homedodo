import React,
{
  useEffect,
  useState,
} from "react";

import axios from "axios";

function MyBookings() {

  const [bookings,
  setBookings] =
  useState([]);

  const fetchBookings =
  async () => {

    try {

      const res =
      await axios.get(
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

    <div
      style={{
        padding: "20px",
      }}
    >

      <h1>
        My Bookings
      </h1>

      <br />

      {bookings.map((booking) => (

        <div

          key={booking.id}

          style={{
            background: "#fff",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "12px",
            boxShadow:
            "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >

          <h2>
            {booking.service_name}
          </h2>

          <p>
            Address:
            {booking.address}
          </p>

          <p>
            Status:
            {booking.status}
          </p>

          <p>
            Date:
            {booking.booking_date}
          </p>

        </div>

      ))}

    </div>
  );
}

export default MyBookings;