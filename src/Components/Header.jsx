import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import React from "react";
import Logo from "../Images/logo.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-200 shadow-2xl p-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={Logo} alt="Praise Pharma Logo" className="h-12" />
        </NavLink>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Nav Links */}
        <ul
          className={`lg:flex lg:space-x-6 absolute lg:static bg-gray-200 w-full lg:w-auto top-16 left-0 lg:flex-row flex-col items-center transition-all duration-300 shadow-lg lg:shadow-none ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
            { name: "Dealers", path: "/dealers" },
          ].map((link) => (
            <li key={link.name} className="py-2 lg:py-0">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-300 transition-all ${
                    isActive ? "text-green-600 font-bold" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
