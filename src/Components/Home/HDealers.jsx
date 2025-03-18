import React from "react";
import { NavLink } from "react-router-dom";

const dealers = [
  {
    name: "BOROLAKAR MEDICAL STORES",
    location: "NR DR.JAGTOP CLINIC, YASHWANT S OCITY, OPP S.T STAND",
  },
  { name: "AAI PHARMA", location: "OLD PANVEL" },
  { name: "S D JAIN PHARMACEUTICALS", location: "WEST TAMBARAM" },
];

export default function HDealers() {
  return (
    <div className="min-h-screen py-12 px-6 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center mb-10">
      <h1 className="text-5xl font-extrabold text-[#0c8536]">Our Dealers</h1>
        <p className="text-2xl text-gray-600 mt-2">
          Trusted partners worldwide ensuring quality healthcare.
        </p>
      </div>

      {/* Dealers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {dealers.map((dealer, index) => (
          <div
            key={index}
            className="bg-white mt-20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              {dealer.name}
            </h3>
            <p className="text-blue-600 mt-2"> 🌍{dealer.location}</p>
          </div>
        ))}
      </div>

      {/* Explore More Button */}
      <NavLink
        to="/dealers"
        className="mt-12 bg-blue-400 hover:bg-blue-500 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md  transition"
      >
        View All
      </NavLink>
    </div>
  );
}
