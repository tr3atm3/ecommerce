import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Store from "./components/Store";
import Home from "./components/Home";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartProvider from "./components/context/CartProvider";
import Contact from "./components/Contact";
import ProductInfo from "./components/ProductInfo";
import Login from "./components/Login";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Store />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/product/:productId",
        element: <ProductInfo />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <RouterProvider router={AppRouter} />
  </CartProvider>
);
