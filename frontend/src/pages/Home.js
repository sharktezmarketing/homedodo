import React,
{
  useEffect,
 useState,
useContext,
} from "react";

import axios from "axios";

import {
  useNavigate,
} from "react-router-dom";

import BottomNav
from "../components/BottomNav";

import "../styles/home.css";

import {
  CartContext,
} from "../context/CartContext";

function Home() {

  const navigate = useNavigate();

  const {
  cart,
  addToCart,
} = useContext(CartContext);

  const [categories, setCategories] =
    useState([]);

  const [services, setServices] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [selectedCategory,
  setSelectedCategory] =
    useState("all");

  const fetchData = async () => {

    try {

      const catRes = await axios.get(
        "http://localhost:5000/api/categories"
      );

      const serviceRes =
        await axios.get(
          "http://localhost:5000/api/services"
        );

      setCategories(catRes.data);

      setServices(serviceRes.data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {

    fetchData();

  }, []);

 const filteredServices = services;
console.log("Services:", services);
console.log("Filtered Services:", filteredServices);
    

  return (

    <div className="home-container">

      {/* TOP BAR */}

      <div className="top-bar">

        <div>

          <div className="logo">
            HomeDodo
          </div>

          <div className="location">
            Hyderabad, India
          </div>

        </div>

        <div
          style={{
            fontSize: "24px",
          }}
        >
          👤
        </div>

      </div>

      {/* SEARCH */}

      <div
        style={{
          padding: "20px",
        }}
      >

        <input
          type="text"

          placeholder="Search services"

          value={search}

          onChange={(e) =>
            setSearch(e.target.value)
          }

          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            border: "1px solid #ccc",
            fontSize: "16px",
            background: "#fff",
            outline: "none",
          }}
        />

      </div>

      {/* HERO BANNER */}

      <div className="banner">

        <h1>
          Home Services at Your Doorstep
        </h1>

        <p>
          Trusted professionals for all
          home services
        </p>

      </div>

      {/* CATEGORIES */}

      <div className="section-title">
        Categories
      </div>

      <div className="category-scroll">

        {/* ALL CATEGORY */}

        <div

          className="category-card"

          style={{
            border:
              selectedCategory === "all"
                ? "2px solid black"
                : "none",
          }}

          onClick={() =>
            setSelectedCategory("all")
          }
        >

          <img
            src=
            "https://images.unsplash.com/photo-1581578731548-c64695cc6952"
            alt="All"
          />

          <h4>
            All
          </h4>

        </div>

        {/* DYNAMIC CATEGORIES */}

        {categories.map((category) => (

          <div
            key={category.id}

            className="category-card"

            style={{
              border:
                selectedCategory ===
                category.id
                  ? "2px solid black"
                  : "none",
            }}

            onClick={() => {

              setSelectedCategory(
                category.id
              );

              navigate(
                `/category/${category.id}`
              );

            }}
          >

            <img
              src=
              "https://images.unsplash.com/photo-1581578731548-c64695cc6952"
              alt={category.name}
            />

            <h4>
              {category.name}
            </h4>

          </div>

        ))}

      </div>

      {/* SERVICES */}

      <div className="section-title">

        {search
          ? "Search Results"
          : "Popular Services"}

      </div>

      <div className="service-scroll">

        {filteredServices.map((service) => (

          <div
            key={service.id}

            className="service-card"

            onClick={() =>
              navigate(
                `/service/${service.id}`
              )
            }
          >

            <img
              src={`http://localhost:5000/uploads/${service.image}`}
              alt={service.service_name}
            />

            <div className="service-content">

              <h3>
                {service.service_name}
              </h3>

              <p>
                {service.description}
              </p>

              <div className="price">
                ₹ {service.price}
              </div>

             <button
  className="book-btn"

  onClick={(e) => {

    e.stopPropagation();

    addToCart(service);

  }}
>

  Add +

</button>
            </div>

          </div>

        ))}

      </div>

      {/* NO SERVICES */}

      {filteredServices.length === 0 && (

        <p
          style={{
            padding: "20px",
            textAlign: "center",
          }}
        >
          No services found
        </p>

      )}

      {/* OFFER SECTION */}

      <div className="offer-banner">

        <h2>
          50% OFF on Bathroom Cleaning
        </h2>

        <p>
          Limited time offer for first
          booking
        </p>

      </div>

{cart.length > 0 && (

  <div

    onClick={() =>
      navigate("/cart")
    }

    style={{

      position: "fixed",

      bottom: "90px",

      right: "20px",

      background: "#6C2BFF",

      color: "#fff",

      padding: "15px 20px",

      borderRadius: "50px",

      cursor: "pointer",

      fontWeight: "bold",

      zIndex: 999,

      boxShadow:
      "0 2px 10px rgba(0,0,0,0.2)",

    }}
  >

    View Cart ({cart.length})

  </div>

)}
      {/* BOTTOM NAV */}

      <BottomNav />

    </div>
  );
}

export default Home;