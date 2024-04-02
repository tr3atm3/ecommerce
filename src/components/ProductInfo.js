import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import cartContext from "./context/cartContext";

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

const ProductInfo = () => {
  const param = useParams();
  const ctx = useContext(cartContext);
  const [product] = productsArr.filter(
    (item) => item.title === param.productId
  );

  const handleAddBtn = () => {
    ctx.addItemToCart(product);
  };

  return (
    <div className="flex mx-auto w-[40rem] my-14 justify-between align-middle">
      <div>
        <img src={product.imageUrl} alt={product.title} />
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4 ">{product.title}</h2>
        <p className="mb-4">
          ${product.price} <span className="line-through ml-4 mr-2">$250</span>
          Special Discount of 60%
        </p>
        <div className="my-2">
          <p className="bg-green-700 text-white rounded-lg w-[2.5rem] py-1 text-center my-4">
            4⭐
          </p>
          <span>1,125 reviews</span>
        </div>

        <button
          className="bg-blue-300 px-4 py-1 rounded-lg"
          onClick={handleAddBtn}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
