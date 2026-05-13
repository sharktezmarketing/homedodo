import React from "react";

import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import BottomNav from "../components/BottomNav";

function CustomerDashboard() {

  const services = [
    {
      title: "Home Cleaning",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    },
    {
      title: "Bathroom Cleaning",
      image:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac",
    },
    {
      title: "Sofa Cleaning",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    {
      title: "AC Repair",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4",
    },
  ];

  return (
    <div
      style={{
        background: "#f5f5f5",
        minHeight: "100vh",
        paddingBottom: "80px",
      }}
    >
      <Navbar />

      <div style={{ padding: "20px" }}>

        <div
          style={{
            background: "#000",
            color: "#fff",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <h1>Welcome to HomeDodo</h1>

          <p>
            Trusted Home Services at Your Doorstep
          </p>
        </div>

        <h2 style={{ marginTop: "30px" }}>
          Popular Services
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              image={service.image}
            />
          ))}
        </div>

      </div>

      <BottomNav />
    </div>
  );
}

export default CustomerDashboard;