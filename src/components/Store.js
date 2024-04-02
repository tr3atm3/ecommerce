import React from "react";
import Product from "./Product";
import { Link } from "react-router-dom";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const Store = () => {
  return (
    <div className="w-[60%] mx-auto my-8 font-serif text-center">
      <h2 className="text-4xl my-4 font-bold">Music</h2>
      <div className="flex flex-wrap align-middle justify-evenly">
        {productsArr.map((product) => (
          <Product product={product} key={product.title} />
        ))}
      </div>
    </div>
  );
};

export default Store;
