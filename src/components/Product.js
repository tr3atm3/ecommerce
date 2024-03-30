import React from "react";

const Product = ({ product }) => {
  const { title, price, imageUrl } = product;
  return (
    <div className="m-8">
      <h2 className="font-bold text-2xl mb-4">{title}</h2>
      <img src={imageUrl} alt={title} />
      <div className="flex justify-between mt-8">
        <p className="font-italic text-xl">₹{price}</p>
        <button className="bg-blue-500 rounded-lg px-4 py-1">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
