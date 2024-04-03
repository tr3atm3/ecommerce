import { Navigate, Outlet, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

import { useContext } from "react";
import cartContext from "./components/context/cartContext";
import Store from "./components/Store";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import ProductInfo from "./components/ProductInfo";

const PrivateRoutes = () => {
  let ctx = useContext(cartContext);
  return ctx.loginTokenId ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
  const ctx = useContext(cartContext);
  return (
    <div className="font-serif">
      <Header />
      {ctx.showCart && <Cart />}

      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Store />} path="/" exact />
          <Route path="home" element={<Home />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="product/:productId" element={<ProductInfo />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
