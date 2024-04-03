import React, { useContext, useRef } from "react";
import cartContext from "./context/cartContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const ctx = useContext(cartContext);
  const nav = useNavigate();

  const getDataFromCrud = async () => {
    const useremail = emailRef.current.value
      .split("")
      .filter((x) => x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122)
      .join("");
    try {
      const response = await fetch(
        `https://crudcrud.com/api/7cecf540f84b48fca1af4087bc9718a1/${useremail}`
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }
      data.forEach((item) => ctx.addItemToCart(item));
    } catch (err) {
      alert(err.message);
    }
  };
  const loginUser = async () => {
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC7sVHD3PsWo_Lma3A_MJKwkcCo-BjiFm8",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data);
      }
      ctx.addTokenId(data.idToken);
      ctx.addUserEmail(data.email);
      nav("/");
    } catch (err) {
      alert(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
    getDataFromCrud();
  };
  return (
    <div className="w-[50%] mx-auto my-12 bg-gray-300 p-8 h-[20rem]">
      <h1 className="font-bold text-3xl">Login</h1>
      <form className="flex flex-col justify-between" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="p-2 my-4 text-lg rounded-lg"
          ref={emailRef}
        />
        <input
          type="password"
          placeholder="Password"
          className="my-4 text-lg p-2 rounded-lg"
          ref={passwordRef}
        />
        <button className="bg-blue-300 w-[5rem] text-lg my-4 p-2 rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
