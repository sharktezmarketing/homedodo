import React,
{
  useEffect,
  useState,
  useContext,
} from "react";

import axios from "axios";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import {
  CartContext,
} from "../context/CartContext";

function ServiceDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    cart,
    addToCart,
  } = useContext(CartContext);

  const [service, setService] =
    useState(null);

  const fetchService = async () => {

    try {

      const res = await axios.get(
        `http://localhost:5000/api/services/${id}`
      );

      setService(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {

    fetchService();

  }, []);

  if (!service) {

    return <h2>Loading...</h2>;

  }

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
          background: "#fff",
          borderRadius: "20px",
          overflow: "hidden",
          maxWidth: "900px",
          margin: "auto",
          boxShadow:
            "0 2px 15px rgba(0,0,0,0.08)",
        }}
      >

        <img
          src={`http://localhost:5000/uploads/${service.image}`}
          alt={service.service_name}
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "25px" }}>

          <h1>
            {service.service_name}
          </h1>

          <p
            style={{
              marginTop: "10px",
              color: "#666",
            }}
          >
            Category:
            {" "}
            {service.category_name}
          </p>

          <h2
            style={{
              marginTop: "20px",
            }}
          >
            ₹ {service.price}
          </h2>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "1.7",
            }}
          >
            {service.description}
          </p>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "15px",
            }}
          >

            <button

              onClick={() =>
                addToCart(service)
              }

              style={{
                padding: "14px 25px",
                border: "none",
                borderRadius: "10px",
                background: "#6C2BFF",
                color: "#fff",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >

              Add +

            </button>

            <button

              onClick={() =>
                navigate("/cart")
              }

              style={{
                padding: "14px 25px",
                border: "1px solid #000",
                borderRadius: "10px",
                background: "#fff",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >

              View Cart
              {" "}
              ({cart.length})

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ServiceDetails;