import React, { createContext, useEffect } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cart, setCart] = React.useState({});

  const addToCart = (itemId) => {
    if (!cart[itemId]) {
      setCart((prev) => ({
        ...prev,
        [itemId]: 1,
      }));
    } else {
      setCart((prev) => ({
        ...prev,
        [itemId]: prev[itemId] + 1,
      }));
    }
  };

  const removeFromCart = (itemId) => {
    if (!cart[itemId]) return;
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    food_list,
    cart,
    setCart,
    addToCart,
    removeFromCart,
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
