import { createContext } from "react";

const cartContext = createContext({
  cartItems: [],
  showCart: false,
});

export default cartContext;
