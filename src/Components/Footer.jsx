import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-500 to-green-600 text-white py-6 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-lg font-semibold">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:underline">
            About
          </NavLink>
          <NavLink to="/products" className="hover:underline">
            Products
          </NavLink>
          <NavLink to="/dealers" className="hover:underline">
            Dealers
          </NavLink>
        </nav>

        {/* Social Media Links */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-gray-100 hover:scale-110 transition" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl hover:text-gray-100 hover:scale-110 transition" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl hover:text-gray-100  hover:scale-110 transition" />
          </a> 
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl hover:text-gray-100  hover:scale-110 transition" />
          </a>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="text-center mt-4 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Praise Pharmaceuticals. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
