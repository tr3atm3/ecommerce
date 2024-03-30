import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-blue-500 flex justify-between items-center p-6">
      <h2 className="font-bold text-white text-5xl">The Generics</h2>
      <div className="flex justify-around w-[40%]">
        <FaYoutube className="text-red-700 text-4xl" />
        <FaSpotify className="text-green-900 text-4xl" />
        <IoLogoFacebook className="text-white text-4xl" />
      </div>
    </div>
  );
};

export default Footer;
