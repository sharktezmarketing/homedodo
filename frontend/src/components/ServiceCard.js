import React from "react";
import { useNavigate } from "react-router-dom";

function ServiceCard({ title, image }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking", {
      state: {
        service: title,
      },
    });
  };

  return (
    <div
      style={{
        width: "160px",
        background: "#fff",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "120px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "10px" }}>
        <h4>{title}</h4>

        <button
          onClick={handleBooking}
          style={{
            marginTop: "10px",
            padding: "8px 12px",
            border: "none",
            borderRadius: "8px",
            background: "#000",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;