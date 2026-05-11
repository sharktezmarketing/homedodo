import React from "react";
import {
  FaHome,
  FaClipboardList,
  FaUser,
} from "react-icons/fa";

function BottomNav() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        background: "#fff",
        display: "flex",
        justifyContent: "space-around",
        padding: "12px",
        borderTop: "1px solid #ddd",
      }}
    >
      <div>
        <FaHome size={22} />
      </div>

      <div>
        <FaClipboardList size={22} />
      </div>

      <div>
        <FaUser size={22} />
      </div>
    </div>
  );
}

export default BottomNav;