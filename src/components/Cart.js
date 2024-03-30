import React from "react";

const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const Cart = () => {
  return (
    <div className="fixed top-12 right-0 w-[30rem] bg-white p-4">
      <h2 className="text-2xl font-bold text-center my-4">Cart</h2>
      <div className="w-full flex justify-between">
        <div className="w-[30%]">
          <h3>ITEM</h3>
          <div className="border border-b-black "></div>
        </div>
        <div className="w-[30%]">
          <h3>PRICE</h3>
          <div className="border border-b-black "></div>
        </div>
        <div className="w-[30%]">
          <h3>QUANTITY</h3>
          <div className="border border-b-black "></div>
        </div>
      </div>
      <div>
        {cartElements.map((el) => {
          return (
            <div key={el.title} className="flex items-center justify-between">
              <div className="w-[32%] my-2">
                <div className="flex items-center mb-4">
                  <img
                    src={el.imageUrl}
                    alt={el.title}
                    className="w-20 rounded-lg mr-2"
                  />
                  <p>{el.title}</p>
                </div>
              </div>
              <div className="w-[32%]">
                <p className="text-center">{el.price}</p>
              </div>
              <div className="flex w-[32%] justify-around items-center">
                <p>{el.quantity}</p>
                <button className="bg-red-600 px-4 py-1 rounded-lg text-white">
                  remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
