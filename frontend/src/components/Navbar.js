import React from "react";

function Navbar() {
  return (
    <div
      style={{
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#000",
        color: "#fff",
      }}
    >
      <h2>HomeDodo</h2>

      <button
        style={{
          padding: "10px 15px",
          border: "none",
          borderRadius: "8px",
          background: "#FFD700",
          fontWeight: "bold",
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Navbar;