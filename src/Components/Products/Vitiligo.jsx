import React from "react";
import { useState } from "react";
import PIGOLYN_ND_CAPSULES_IMAGE from "../../Images/Products/Vitiligo/PIGOLYNNDCAPSULES.webp"
import PIGOLYN_ND_LOTION_IMAGE from "../../Images/Products/Vitiligo/PIGOLYNNDLOTION.webp"
import PIGOLYN_LOTION_IMAGE from "../../Images/Products/Vitiligo/PIGOLYNLOTION.webp"
import PIGOLYN_25MG_TAB_IMAGE from "../../Images/Products/Vitiligo/PIGOLYN25MGTAB.webp"
import PIGOLYN_5MG_TAB_IMAGE from "../../Images/Products/Vitiligo/PIGOLYN5MGTAB.webp"
import PIGOLYN_CREAM_IMAGE from "../../Images/Products/Vitiligo/PIGOLYNCREAM.webp"
// import { useState } from "react";




const products = [
  {
    name: "PIGOLYN ND CAPSULES",
    description: "Capsules formulated for skin pigmentation treatment.",
    image: PIGOLYN_ND_CAPSULES_IMAGE, // Replace with the actual image variable
  },
  {
    name: "PIGOLYN ND LOTION",
    description: "Lotion designed to improve skin pigmentation.",
    image: PIGOLYN_ND_LOTION_IMAGE, // Replace with the actual image variable
  },
  {
    name: "PIGOLYN LOTION",
    description: "Skin care lotion for pigmentation management.",
    image: PIGOLYN_LOTION_IMAGE, // Replace with the actual image variable
  },
  {
    name: "PIGOLYN 25MG TAB",
    description: "25mg tablets for treating pigmentation-related conditions.",
    image: PIGOLYN_25MG_TAB_IMAGE, // Replace with the actual image variable
  },
  {
    name: "PIGOLYN 5MG TAB",
    description: "5mg tablets for managing skin pigmentation issues.",
    image: PIGOLYN_5MG_TAB_IMAGE, // Replace with the actual image variable
  },
  {
    name: "PIGOLYN CREAM",
    description: "Cream formulated for skin pigmentation and nourishment.",
    image: PIGOLYN_CREAM_IMAGE, // Replace with the actual image variable
  },
];

const Vitiligo = () => {
  const [flipped, setFlipped] = useState(Array(products.length).fill(false));

  const handleFlip = (index) => {
    setFlipped((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="p-6 mb-20">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Vitiligo Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="relative w-full max-w-sm mx-auto">
            {/* Flip Container */}
            <div
              className="relative w-full h-64 transition-transform duration-500"
              style={{
                transform: flipped[index] ? "rotateY(180deg)" : "rotateY(0deg)",
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Front Side */}
              <div
                className="absolute w-full h-full border p-4 rounded-lg shadow-md text-center bg-white"
                style={{
                  transform: "rotateY(0deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-contain"
                />
                <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
              </div>

              {/* Back Side */}
              <div
                className="absolute w-full h-full flex flex-col items-center justify-center bg-gray-100 border p-2 rounded-lg shadow-md text-center"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-700 mt-2">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Flip Button */}
            <button
              className="mt-3 w-full bg-lime-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-lime-700 transition duration-300"
              onClick={() => handleFlip(index)}
            >
              Explore Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vitiligo;
