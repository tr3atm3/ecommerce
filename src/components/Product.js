import React, { useContext } from "react";
import cartContext from "./context/cartContext";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const ctx = useContext(cartContext);

  const { title, price, imageUrl } = product;
  const handleAddCart = () => {
    const item = {
      title: title,
      imageUrl: imageUrl,
      price: price,
    };

    ctx.addItemToCart(item);
  };

  return (
    <div className="m-8">
      <Link to={`/product/${product.title}`}>
        <h2 className="font-bold text-2xl mb-4">{title}</h2>
        <img src={imageUrl} alt={title} />
      </Link>
      <div className="flex justify-between mt-8">
        <p className="font-italic text-xl">₹{price}</p>
        <button
          className="bg-blue-500 rounded-lg px-4 py-1"
          onClick={handleAddCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
