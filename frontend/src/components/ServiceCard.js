import React from "react";

function ServiceCard({ title, image }) {
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
      </div>
    </div>
  );
}

export default ServiceCard;