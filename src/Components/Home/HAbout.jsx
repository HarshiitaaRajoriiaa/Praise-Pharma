

import React from "react";
import image from "../../Images/about.webp";
import { NavLink } from "react-router-dom";

export default function HAbout() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-10">
      {/* Left - Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={image}
          alt="About Us"
          className="rounded-lg shadow-lg w-full max-w-lg hover:scale-110"
        />
      </div>

      {/* Right - Content Section */}
      <div className="md:w-1/2 md:pl-10 text-center md:text-left">
        <h1 className="text-5xl font-extrabold text-[#0c8536] leading-tight">
          ABOUT PRAISE PHARMA
        </h1>
        <p className="text-2xl text-gray-600 mt-4">
          Praise Pharma is a venture to help the need of the hungry and fulfill
          the affiliated soul. Thanks to God for all his Grace, we acknowledge
          and praise his role in every transaction.
        </p>

        {/* Button */}
        <NavLink
          to="/about"
          className="mt-6 inline-block bg-blue-400 hover:bg-blue-500 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md  transition-all"
        >
          Explore More About us
        </NavLink>
      </div>
    </div>
  );
}
