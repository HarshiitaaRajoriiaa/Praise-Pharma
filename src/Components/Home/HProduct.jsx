import React from "react";
import image from "../../Images/products.webp";
import { NavLink } from "react-router-dom";

export default function HProduct() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-10">
      {/* Left - Image Section */}
      <div className="md:w-1/2 md:pl-10  text-center md:text-left">
        <h1 className="text-5xl font-extrabold text-[#0c8536] leading-tight">
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
          className="mt-6 inline-block bg-blue-400 hover:bg-blue-500 text-white text-lg font-semibold px-5 py-3 rounded-lg shadow-md  transition-all"
        >
            View All Products
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
