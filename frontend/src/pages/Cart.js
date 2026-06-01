import React,
{
  useContext,
} from "react";

import {
  CartContext,
} from "../context/CartContext";

import {
  useNavigate,
} from "react-router-dom";

function Cart() {

  const navigate =
  useNavigate();

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const totalPrice =
  cart.reduce(

    (total, item) =>

      total +
      item.price *
      item.quantity,

    0
  );

  return (

    <div
      style={{
        padding: "20px",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >

      <h1>
        My Cart
      </h1>

      <br />

      {cart.length === 0 && (

        <h3>
          Cart is Empty
        </h3>

      )}

      {cart.map((item) => (

        <div

          key={item.id}

          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent:
            "space-between",
            alignItems: "center",
          }}
        >

          <div>

            <h2>
              {item.service_name}
            </h2>

            <p>
              ₹ {item.price}
            </p>

          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >

            <button

              onClick={() =>
                decreaseQuantity(item.id)
              }

              style={{
                width: "35px",
                height: "35px",
                border: "none",
                borderRadius: "8px",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >

              -

            </button>

            <h3>
              {item.quantity}
            </h3>

            <button

              onClick={() =>
                increaseQuantity(item.id)
              }

              style={{
                width: "35px",
                height: "35px",
                border: "none",
                borderRadius: "8px",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >

              +

            </button>

          </div>

        </div>

      ))}

      {cart.length > 0 && (

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            marginTop: "30px",
          }}
        >

          <h2>
            Total:
            ₹ {totalPrice}
          </h2>

          <button

            onClick={() =>
              navigate("/checkout")
            }

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

            Proceed to Checkout

          </button>

        </div>

      )}

    </div>
  );
}

export default Cart;