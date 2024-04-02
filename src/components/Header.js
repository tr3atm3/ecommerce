import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "./context/cartContext";
const Header = () => {
  const ctx = useContext(cartContext);
  const totalQnty = ctx.cartItems.reduce((acc, cur) => {
    return cur.quantity + acc;
  }, 0);
  return (
    <>
      <div className="bg-black text-white flex py-1 text-lg justify-between px-10 border-b-2 border-white items-center fixed top-0 left-0 w-full">
        <ul className="flex justify-end w-[60%]">
          <Link to="/home">
            <li className="mx-8">HOME</li>
          </Link>
          <Link to="/">
            <li className="mx-8">STORE</li>
          </Link>
          <Link to="/about">
            <li className="mx-8">ABOUT</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
        <div className="relative border border-blue-400 px-4 py-1">
          <button onClick={() => ctx.toggleCart()}>Cart</button>
          <p className="absolute top-[-12px] right-[-14px]">{totalQnty}</p>
        </div>
      </div>
      <div className="bg-gray-500 text-center pt-20 pb-10">
        <h1 className="text-white text-7xl font-bold ">The Generics</h1>
      </div>
    </>
  );
};

export default Header;
