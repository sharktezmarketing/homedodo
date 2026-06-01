import React,
{
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

function CategoryServices() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [services, setServices] = useState([]);

  const fetchServices = async () => {

    try {

      const res = await axios.get(
        `http://localhost:5000/api/services/category/${id}`
      );

      setServices(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    fetchServices();

  }, [id]);

  return (
    <div style={{ padding: "20px" }}>

      <h1>Services</h1>

      <br />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >

        {services.map((service) => (

          <div
            key={service.id}

            onClick={() =>
              navigate(`/service/${service.id}`)
            }

            style={{
              background: "#fff",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.08)",
              cursor: "pointer",
            }}
          >

            <img
              src={`http://localhost:5000/uploads/${service.image}`}
              alt={service.service_name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "15px" }}>

              <h3>
                {service.service_name}
              </h3>

              <p
                style={{
                  marginTop: "10px",
                  color: "#666",
                }}
              >
                {service.description}
              </p>

              <h4
                style={{
                  marginTop: "10px",
                }}
              >
                ₹ {service.price}
              </h4>

              <button
                style={{
                  marginTop: "15px",
                  padding: "10px 15px",
                  border: "none",
                  borderRadius: "8px",
                  background: "#000",
                  color: "#fff",
                  width: "100%",
                }}
              >
                View Details
              </button>

            </div>
          </div>

        ))}

      </div>

    </div>
  );
}

export default CategoryServices;