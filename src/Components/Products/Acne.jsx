import React, { useState } from "react";
import A from "../../Images/Products/Acne/A.webp";
import I10 from "../../Images/Products/Acne/I10.webp";
import M from "../../Images/Products/Acne/M.webp";
import O from "../../Images/Products/Acne/O.webp";
import OS from "../../Images/Products/Acne/OS.webp";
import I20 from "../../Images/Products/Acne/I20.webp";

const acneProducts = [
  { name: "METROLYN GEL", description: "Effectively treats Rosacea.", price: "Rs. 100/-", image: M },
  { name: "ABAKA GEL", description: "Powerful acne-fighting gel.", price: "Rs. 50/-", image: A },
  { name: "ONAK SR LOTION", description: "Anti-bacterial lotion.", image: O },
  { name: "Isonak 20", description: "Oral treatment for severe acne.", image: I20 },
  { name: "Onak Soap 75gm", description: "Anti-acne soap.", image: OS },
  { name: "Isonak 10", description: "Oral acne treatment.", image: I10 },
];

const AcneProducts = () => {
  const [flipped, setFlipped] = useState(Array(acneProducts.length).fill(false));

  const handleFlip = (index) => {
    setFlipped((prev) => prev.map((state, i) => (i === index ? !state : state)));
  };

  return (
    <div className="p-6 mb-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Acne Treatment Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {acneProducts.map((product, index) => (
          <div key={index} className="relative w-full max-w-sm mx-auto">
            {/* Flip Container */}
            <div
              className={`relative w-full h-64 transform transition-transform duration-500 ${
                flipped[index] ? "rotate-y-180" : ""
              }`}
              style={{
                perspective: "1000px",
              }}
            >
              {/* Front Side */}
              <div
                className="absolute w-full h-full backface-hidden border p-4 rounded-lg shadow-md text-center bg-white"
                style={{ transform: flipped[index] ? "rotateY(180deg)" : "rotateY(0deg)" }}
              >
                <img src={product.image} alt={product.name} className="w-full h-40 object-contain" />
                <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
                {product.price && <p className="text-md font-bold text-blue-600 mt-2">{product.price}</p>}
              </div>

              {/* Back Side */}
              <div
                className="absolute w-full h-full flex flex-col items-center justify-center bg-gray-100 border p-4 rounded-lg shadow-md text-center"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-700 mt-2">{product.description}</p>
              </div>
            </div>

            {/* Flip Button */}
            <button
              className="mt-3 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={() => handleFlip(index)}
            >
              Flip
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcneProducts;
