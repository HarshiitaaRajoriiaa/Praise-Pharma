import React from "react";
import { useState } from "react";
import ICHTHYLYN_LOTION_IMAGE from "../../Images/Products/ichthylinlotion.webp";

const products = [
  {
    name: "ICHTHYLYN 3% LOTION",
    description: "Lotion formulated for skin treatment and care.",
    image: ICHTHYLYN_LOTION_IMAGE, //
  },
];
const Hydrating = () => {
  const [flipped, setFlipped] = useState(Array(products.length).fill(false));

  const handleFlip = (index) => {
    setFlipped((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="p-6 mb-20">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Hydrating and Keratolytic Lotion 
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

export default Hydrating;
