import React, { useContext, useRef } from "react";
import cartContext from "./context/cartContext";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const ctx = useContext(cartContext);
  console.log(ctx);
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
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
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