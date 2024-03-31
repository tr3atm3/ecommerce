import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

import { useContext } from "react";
import cartContext from "./components/context/cartContext";

function App() {
  const ctx = useContext(cartContext);
  return (
    <div className="font-serif">
      <Header />
      {ctx.showCart && <Cart />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
