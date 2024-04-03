import { createContext } from "react";

const cartContext = createContext({
  cartItems: [],
  showCart: false,
  loginTokenId: null,
  userEmail: "",
});

export default cartContext;
