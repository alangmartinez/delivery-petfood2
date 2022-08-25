import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart") || []) ;
    } catch (e) {
      return [];
    }
  });

  // Update the cart in the localStorage each time that cart undergoes a modification
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to save a product in the cart
  const addProduct = (productToAdd) => {
    const isInCart = cart.some((product) => product.id === productToAdd.id);

    isInCart
      ? setCart(
          cart.map((product) => {
            if (product.id === productToAdd.id) {
              return {
                ...product,
                quantity: product.quantity + productToAdd.quantity,
              };
            } else {
              return product;
            }
          })
        )
      : setCart([...cart, productToAdd]);
  };

  // Function to remove a product from the cart
  const removeProduct = (productToRemove) => {
    setCart(cart.filter((product) => product.id !== productToRemove.id));
  };

  // Function to clean the cart
  const cleanCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addProduct, cleanCart, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;