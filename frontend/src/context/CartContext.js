import React,
{
  createContext,
  useState,
} from "react";

export const CartContext =
createContext();

export const CartProvider =
({ children }) => {

  const [cart,
  setCart] = useState([]);

  const addToCart =
  (service) => {

    const existing =
    cart.find(
      (item) =>
      item.id === service.id
    );

    if (existing) {

      const updatedCart =
      cart.map((item) =>

        item.id === service.id

        ? {
            ...item,
            quantity:
            item.quantity + 1,
          }

        : item
      );

      setCart(updatedCart);

    } else {

      setCart([
        ...cart,
        {
          ...service,
          quantity: 1,
        },
      ]);

    }
  };

  const increaseQuantity =
  (id) => {

    const updatedCart =
    cart.map((item) =>

      item.id === id

      ? {
          ...item,
          quantity:
          item.quantity + 1,
        }

      : item
    );

    setCart(updatedCart);
  };

  const decreaseQuantity =
  (id) => {

    const updatedCart =
    cart.map((item) =>

      item.id === id

      ? {
          ...item,
          quantity:
          item.quantity - 1,
        }

      : item
    ).filter(
      (item) =>
      item.quantity > 0
    );

    setCart(updatedCart);
  };

  return (

    <CartContext.Provider
     value={{
  cart,
  setCart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
}}
    >

      {children}

    </CartContext.Provider>
  );
};