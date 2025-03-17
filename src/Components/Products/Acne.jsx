import React, { useState } from "react";
import A from "../../Images/Products/Acne/A.webp";
import I10 from "../../Images/Products/Acne/I10.webp";
import M from "../../Images/Products/Acne/M.webp";
import O from "../../Images/Products/Acne/O.webp";
import OS from "../../Images/Products/Acne/OS.webp";
import I20 from "../../Images/Products/Acne/I20.webp";

const acneProducts = [
  {
    name: "METROLYN GEL",
    description: "Effectively treats Rosacea.",
    image: M,
  },
  {
    name: "ABAKA GEL",
    description: "Powerful acne-fighting gel.",
    image: A,
  },
  { name: "ONAK SR LOTION", description: "Sulfur & resorcinol lotion Specialist for Truncal Acne/ Shoulder Acne Onak sr solution is a kertolytic and Anti- Bacterial lotion Only brand available in solution base All type of acne over Truncal or Shoulder Apply over the affected area 30 minutes before taking bath If no irritations, Apply in the night, morning wash while taking bath. Meant for overnight application hence stay for long time ONAK SR LOTION causes some irritation and skin peeling since it’s a kertolytic action Not to worry apply emollient Onak sr lotion has sulfur it’s a strong aromatic odours; however we masked with good fragrance leads to better compliance. Onak sr lotion has a text book recommended combinations of Sulfur & resorcinol. In India no one making this combinations which work wonder in Truncal Acne/ Shoulder Acne", image: O },
  {
    name: "Isonak 20",
    description: "Oral treatment for severe acne.",
    image: I20,
  },
  { name: "Onak Soap 75gm", description: "Anti-acne soap.", image: OS },
  { name: "Isonak 10", description: "Oral acne treatment.", image: I10 },
];

const AcneProducts = () => {
  const [flipped, setFlipped] = useState(
    Array(acneProducts.length).fill(false)
  );

  const handleFlip = (index) => {
    setFlipped((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="p-6 mb-20">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Acne Treatment Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {acneProducts.map((product, index) => (
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

export default AcneProducts;
