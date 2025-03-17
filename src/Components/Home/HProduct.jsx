import React from "react";
import image from "../../Images/products.webp";
import { NavLink } from "react-router-dom";

export default function HProduct() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#e5e2e1] p-10">
      {/* Left - Image Section */}
      <div className="md:w-1/2 md:pl-10  text-center md:text-left">
        <h1 className="text-5xl font-extrabold text-lime-600 leading-tight">
          OUR PRODUCTS
        </h1>
        <p className="text-2xl text-gray-600 mt-4">
          Our global quest is to improve the quality of human life by enabling
          people to do more, feel better, live longer, help the medical
          practitioner by provoiding basic molecules and help the affliated soul
          by providing word class product.
        </p>

        {/* Button */}
        <NavLink
          to="/products"
          className="mt-6 inline-block bg-orange-600 text-white text-lg font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all"
        >
           - Explore More
        </NavLink>
      </div>

      {/* Right - Content Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={image}
          alt="About Us"
          className="rounded-lg shadow-lg mt-5 w-full max-w-lg hover:scale-110"
        />
      </div>
    </div>
  );
}
