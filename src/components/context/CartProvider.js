import { useEffect, useReducer } from "react";
import cartContext from "./cartContext";

const defaultValue = {
  cartItems: [],
  showCart: false,
  loginTokenId: null,
  userEmail: "",
};

const reducerFunc = (state, action) => {
  if (action.type === "USEREMAIL") {
    return {
      ...state,
      userEmail: action.value,
    };
  }
  if (action.type === "ADDTOKENID") {
    return {
      ...state,
      loginTokenId: action.value,
    };
  }
  if (action.type === "TOGGLECART") {
    const toggleCart = !state.showCart;
    return {
      ...state,
      showCart: toggleCart,
    };
  }
  if (action.type === "ADD") {
    const existingItemIndex = state.cartItems.indexOf(
      ...state.cartItems.filter((item) => item.title === action.value.title)
    );
    const existingItem = state.cartItems[existingItemIndex];
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      const updatedCart = [...state.cartItems];
      updatedCart[existingItemIndex] = updatedItem;
      return {
        ...state,
        cartItems: updatedCart,
      };
    } else {
      const item = {
        ...action.value,
        quantity: 1,
      };
      return {
        ...state,
        cartItems: [...state.cartItems, item],
      };
    }
  }
  return defaultValue;
};

const CartProvider = (props) => {
  const [allState, dispatch] = useReducer(reducerFunc, defaultValue);

  const toggleCart = () => {
    dispatch({
      type: "TOGGLECART",
    });
  };

  const addItemToCart = (item) => {
    dispatch({
      type: "ADD",
      value: item,
    });
  };

  const addTokenId = (id) => {
    dispatch({
      type: "ADDTOKENID",
      value: id,
    });
  };

  const addUserEmail = (email) => {
    dispatch({
      type: "USEREMAIL",
      value: email,
    });
  };

  const cartValue = {
    cartItems: allState.cartItems,
    showCart: allState.showCart,
    toggleCart: toggleCart,
    addItemToCart: addItemToCart,
    loginTokenId: allState.loginTokenId,
    addTokenId: addTokenId,
    userEmail: allState.userEmail,
    addUserEmail: addUserEmail,
  };
  return (
    <cartContext.Provider value={cartValue}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
