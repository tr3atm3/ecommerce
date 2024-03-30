import React from "react";
import { FaPlay } from "react-icons/fa";

const concertData = [
  {
    date: "JUL16",
    location: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "JUL19",
    location: "TORONTO, ON",
    venue: "BUDWEISER STAGE",
  },
  {
    date: "JUL22",
    location: "BRISTOW, VA",
    venue: "JIGGY LUBE LIVE",
  },
  {
    date: "JUL29",
    location: "PHOENIX, AZ",
    venue: "AK-CHIN PAVILION",
  },
  {
    date: "AUG2",
    location: "LAS VEGAS, NV",
    venue: "T-MOBILE ARENA",
  },
  {
    date: "AUG7",
    location: "CONCORD, CA",
    venue: "CONCORD PAVILION",
  },
];

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center bg-gray-500 w-full py-4">
        <button className="text-white border-2 border-sky-400 text-bold text-2xl px-6 py-4">
          Get our Latest Album
        </button>
        <button className=" border-2 text-sky-400 rounded-full my-4 border-sky-400 px-6 py-6">
          <FaPlay />
        </button>
      </div>
      <div className="w-[50%] text-center flex flex-col">
        <h2 className="text-2xl font-bold my-8">TOURS</h2>
        <ul>
          {concertData.map((item) => {
            return (
              <div className="my-6">
                <li className="w-full flex justify-between mb-2 items-center">
                  <p>{item.date}</p>
                  <p>{item.location}</p>
                  <p>{item.venue}</p>
                  <button className="bg-sky-400 text-white px-8 py-2 rounded-xl">
                    Buy Tickets
                  </button>
                </li>
                <div className="border border-b-black"></div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
