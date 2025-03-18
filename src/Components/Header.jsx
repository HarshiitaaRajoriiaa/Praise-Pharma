import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import React from "react";
import Logo from "../Images/logo.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-t from-gray-100 to-gray-200  border-gray-400 shadow-lg p-2">
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
          className={`lg:flex lg:space-x-6 absolute lg:static  w-full lg:w-auto top-16 left-0 lg:flex-row flex-col items-center transition-all duration-300 shadow-lg lg:shadow-none ${
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
                  `block px-4 py-2 rounded-lg text-black hover:underline transition-all ${
                    isActive ? " text-green-700 font-bold" : ""
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

// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import React from "react";
// import Logo from "../Images/logo.webp";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (isOpen && !event.target.closest(".mobile-menu") && !event.target.closest(".menu-button")) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("click", handleOutsideClick);
//     return () => document.removeEventListener("click", handleOutsideClick);
//   }, [isOpen]);

//   return (
//     <nav className="bg-gradient-to-t from-gray-100 to-gray-200 border-gray-400 shadow-lg p-2">
//       <div className="container mx-auto flex justify-between items-center relative">
//         {/* Logo */}
//         <NavLink to="/" className="flex items-center">
//           <img src={Logo} alt="Praise Pharma Logo" className="h-12" />
//         </NavLink>

//         {/* Mobile Menu Toggle */}
//         <button className="lg:hidden menu-button z-50" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>

//         {/* Nav Links */}
//         <ul
//           className={`lg:flex lg:space-x-6 absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none transition-all duration-300 mobile-menu ${
//             isOpen ? "block" : "hidden"
//           }`}
//           onClick={(e) => e.stopPropagation()} // Prevents menu click from closing it
//         >
//           {[
//             { name: "Home", path: "/" },
//             { name: "Products", path: "/products" },
//             { name: "About", path: "/about" },
//             { name: "Contact", path: "/contact" },
//             { name: "Dealers", path: "/dealers" },
//           ].map((link) => (
//             <li key={link.name} className="py-2 lg:py-0">
//               <NavLink
//                 to={link.path}
//                 className={({ isActive }) =>
//                   `block px-4 py-2 rounded-lg text-black hover:underline transition-all ${
//                     isActive ? "text-green-700 font-bold" : ""
//                   }`
//                 }
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Header;

