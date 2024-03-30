import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="font-serif">
      <Header />
      <Cart />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
