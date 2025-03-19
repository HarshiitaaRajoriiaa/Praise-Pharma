
import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import logo from "../Images/logo.webp";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-screen z-50  bg-gray-100 p-2 transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10  font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-orange-400 transition ${
                isActive ? "text-green-700" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-green-700 transition ${
                isActive ? "text-green-700" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `hover:text-green-700 transition ${
                isActive ? "text-green-700" : ""
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-green-700 transition ${
                isActive ? "text-green-700" : ""
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/dealers"
            className={({ isActive }) =>
              `hover:text-green-700 transition ${
                isActive ? "text-green-700" : ""
              }`
            }
          >
            Dealers
          </NavLink>

          {/* {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setDropdownOpen(index)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="flex items-center gap-1 hover:text-orange-400 transition">
                {item.title} <ChevronDown size={16} />
              </button>
              {dropdownOpen === index && (
                <ul className="absolute left-0 mt-2 bg-white text-blue-900 shadow-md p-2 rounded-md w-48">
                  {item.links.map((link, idx) => (
                    <li key={idx}>
                      <NavLink
                        to={link.path}
                        className="block px-4 py-2 hover:bg-blue-100"
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))} */}

          {/* {["Code of Conduct", "Career", "Privacy Policy", "Legal"].map(
            (link, index) => (
              <NavLink
                key={index}
                to={`/${link.toLowerCase().replace(/ /g, "-")}`}
                className={({ isActive }) =>
                  `hover:text-orange-400 transition ${
                    isActive ? "text-orange-400" : ""
                  }`
                }
              >
                {link}
              </NavLink>
            )
          )} */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block text-white bg-[#0c8536] p-2 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white text-black shadow-md p-4 transition-all">
          <ul className="space-y-3 text-center font-semibold">
            <li>
              <NavLink
                to="/"
                className="block py-2 hover:bg-green-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block py-2 hover:bg-green-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block py-2 hover:bg-green-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dealers"
                className="block py-2 hover:bg-green-200"
                onClick={() => setIsOpen(false)}
              >
                Dealers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="block py-2 hover:bg-green-200"
                onClick={() => setIsOpen(false)}
              >
                Products
              </NavLink>
            </li>

            {/* {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() =>
                    setMobileDropdownOpen(
                      mobileDropdownOpen === index ? null : index
                    )
                  }
                  className="w-full flex justify-center items-center py-2 px-4 hover:bg-orange-200"
                >
                  {item.title}
                  {mobileDropdownOpen === index ? (
                    <ChevronUp />
                  ) : (
                    <ChevronDown />
                  )}
                </button>
                {mobileDropdownOpen === index && (
                  <ul className="bg-gray-100 rounded-md py-2">
                    {item.links.map((link, idx) => (
                      <li key={idx}>
                        <NavLink
                          to={link.path}
                          className="block px-4 py-2 hover:bg-gray-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))} */}
            {/* {["Product", "", "Privacy Policy", "Legal"].map(
              (link, index) => (
                <li key={index}>
                  <NavLink
                    to={`/${link.toLowerCase().replace(/ /g, "-")}`}
                    className="block py-2 hover:bg-orange-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </NavLink>
                </li>
              )
            )} */}
          </ul>
        </nav>
      )}
    </nav>
  );
}
