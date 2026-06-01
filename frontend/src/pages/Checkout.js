import React,
{
  useContext,
  useState,
} from "react";

import axios from "axios";

import {
  CartContext,
} from "../context/CartContext";

import {
  useNavigate,
} from "react-router-dom";

function Checkout() {

  const navigate =
  useNavigate();

 const {
  cart,
  setCart,
} = useContext(CartContext);

  const [formData,
  setFormData] =
  useState({

    customer_name: "",

    phone: "",

    address: "",

    booking_date: "",

    booking_time: "",

  });

  const totalPrice =
  cart.reduce(

    (total, item) =>

      total +
      item.price *
      item.quantity,

    0
  );

  const handleChange =
  (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value,

    });
  };

  const placeOrder =
async () => {

  if (
    !formData.customer_name ||
    !formData.phone ||
    !formData.address ||
    !formData.booking_date ||
    !formData.booking_time
  ) {

    alert(
      "Please fill all fields"
    );

    return;
  }

  if (
    formData.phone.length !== 10
  ) {

    alert(
      "Phone number must be 10 digits"
    );

    return;
  }

  try {

    for (const item of cart) {

  console.log("CART ITEM:", item);



   await axios.post(
  "http://localhost:5000/api/bookings/create",
  {
    user_id: 1,
    service_name: item.service_name,
    booking_date: formData.booking_date,
    address: formData.address,
  }
);
    }

    alert(
      "Order Placed Successfully"
    );

    setCart([]);

    navigate("/my-bookings");

  } catch (error) {

  console.log("FULL ERROR:", error);

  console.log(
    "ERROR RESPONSE:",
    error.response
  );

  console.log(
    "ERROR DATA:",
    error.response?.data
  );

  alert(
    error.response?.data?.message ||
    JSON.stringify(error.response?.data) ||
    error.message
  );

}
};

  const today =
new Date()
.toISOString()
.split("T")[0];

  return (

    <div
      style={{
        padding: "20px",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >

      <h1>
        Checkout
      </h1>

      <br />

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "15px",
        }}
      >

        <h2>
          Booking Details
        </h2>

        <br />

        <input
          type="text"
          name="customer_name"
          placeholder="Your Name"
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
          }}
        />

        <input

  type="tel"

  name="phone"

  placeholder="Phone Number"

  maxLength="10"

  pattern="[0-9]{10}"

  onChange={(e) => {

    const value =
    e.target.value
    .replace(/\D/g, "");

    setFormData({

      ...formData,

      phone: value,

    });

  }}

  value={formData.phone}

  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
  }}
/>

        <textarea
          name="address"
          placeholder="Address"
          onChange={handleChange}
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

  onChange={handleChange}

  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
  }}
/>
       <select

  name="booking_time"

  onChange={handleChange}

  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
  }}
>

  <option value="">
    Select Time
  </option>

  <option value="10:00 AM">
    10:00 AM
  </option>

  <option value="11:00 AM">
    11:00 AM
  </option>

  <option value="12:00 PM">
    12:00 PM
  </option>

  <option value="1:00 PM">
    1:00 PM
  </option>

  <option value="2:00 PM">
    2:00 PM
  </option>

  <option value="3:00 PM">
    3:00 PM
  </option>

  <option value="4:00 PM">
    4:00 PM
  </option>

  <option value="5:00 PM">
    5:00 PM
  </option>

  <option value="6:00 PM">
    6:00 PM
  </option>

</select>

      </div>

      <br />

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "15px",
        }}
      >

        <h2>
          Order Summary
        </h2>

        <br />

        {cart.map((item) => (

          <div
            key={item.id}
            style={{
              marginBottom: "15px",
            }}
          >

            <h3>
              {item.service_name}
            </h3>

            <p>
              ₹ {item.price}
              ×
              {item.quantity}
            </p>

          </div>

        ))}

        <hr />

        <h2>
          Total:
          ₹ {totalPrice}
        </h2>

        <button

          onClick={placeOrder}

          style={{
            marginTop: "20px",
            width: "100%",
            padding: "15px",
            border: "none",
            borderRadius: "12px",
            background: "#6C2BFF",
            color: "#fff",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >

          Place Order

        </button>

      </div>

    </div>
  );
}

export default Checkout;