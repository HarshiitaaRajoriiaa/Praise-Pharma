// import React from "react";
// import image from "../../Images/about.webp";
// import { NavLink } from "react-router-dom";

// export default function HAbout() {
//   return (
//     <div className="flex  flex-col items-center  justify-center min-h-screen bg-gray-100 p-10">
//       <h1 className="text-4xl font-bold text-lime-700 mb-6 uppercase tracking-wide">
//         ABOUT PRAISE PHARMA
//       </h1>
//       <div className=" w-full bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start">
//         {/* Image Section */}
//         <div className="md:w-1/2 w-full flex justify-center mb-4 md:mb-0">
//           <img src={image} alt="About Us" className="rounded-lg shadow-md" />
//         </div>

//         {/* Content Section */}
//         <div className=" w-full md:pl-6 text-center md:text-left">
//           <h2 className="text-5xl  text-gray-800 mb-4">
//             Praise Pharma is a venture to help the need of the hungry and
//             fulfill the affiliated Soul.
//           </h2>
//           <p className="text-gray-600 text-2xl">
//             Thanks to God for all his Grace, we acknowledge and praise his role
//             in every transaction as Praise Pharma.
//           </p>
//           <NavLink
//             to="/about"
//             className="bg-lime-600 text-white px-6 py-3 mt-4 inline-block rounded-lg shadow-md hover:bg-lime-700 transition"
//           >
//             Explore more
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// }

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
          className="mt-6 inline-block bg-orange-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all"
        >
          Explore More
        </NavLink>
      </div>
    </div>
  );
}
