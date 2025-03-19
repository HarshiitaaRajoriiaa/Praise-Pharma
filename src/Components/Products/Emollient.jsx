import React from "react";
import { useState } from "react";
import PAJUVIR_LIP_BALM_IMAGE from "../../Images/Products/Emollient/PAJUVIR.webp"
import PAJUVIR_LOTION_IMAGE from "../../Images/Products/Emollient/PAJUVIRlo.webp"
import PAJUVIR_CREAM_IMAGE from "../../Images/Products/Emollient/PAJUVIRcr.webp"
import PAJUVIR_OINTMENT_IMAGE from "../../Images/Products/Emollient/PAJUVIRont.webp"
import PRAISE_CREAM_25GM_IMAGE from "../../Images/Products/Emollient/Praise25.webp"
import PRAISE_CREAM_150GM_IMAGE from "../../Images/Products/Emollient/Praise150.webp"
import PRAISE_CREAM_40GM_IMAGE from "../../Images/Products/Emollient/Praise40.webp"
import E_OINTMENT_100GM_IMAGE from "../../Images/Products/Emollient/EOintment.webp"
import E_OINTMENT_40GM_IMAGE from "../../Images/Products/Emollient/EOintment40.webp"
import E_SOAP_IMAGE from "../../Images/Products/Emollient/ESoap.webp"


const products = [
  {
    name: "PAJUVIR LIP BALM",
    description: "Lip balm for soothing and moisturizing lips.",
    image: PAJUVIR_LIP_BALM_IMAGE, // Replace with the actual image variable
  },
  {
    name: "PAJUVIR LOTION",
    description: "Hydrating lotion for skin protection.",
    image: PAJUVIR_LOTION_IMAGE, // Replace with the actual image variable
  },
  {
    name: "PAJUVIR CREAM",
    description: "Cream for skin nourishment and repair.",
    image: PAJUVIR_CREAM_IMAGE, // Replace with the actual image variable
  },
  {
    name: "PAJUVIR OINTMENT",
    description: "Ointment for intensive skin care.",
    image: PAJUVIR_OINTMENT_IMAGE, // Replace with the actual image variable
  },
  {
    name: "Praise Cream 25gm",
    description: "Skin cream in a 25gm pack.",
    image: PRAISE_CREAM_25GM_IMAGE, // Replace with the actual image variable
  },
  {
    name: "Praise Cream 150gm",
    description: "Skin cream in a 150gm pack.",
    image: PRAISE_CREAM_150GM_IMAGE, // Replace with the actual image variable
  },
  {
    name: "Praise Cream 40gm",
    description: "Skin cream in a 40gm pack.",
    image: PRAISE_CREAM_40GM_IMAGE, // Replace with the actual image variable
  },
  {
    name: "E Ointment 100gm",
    description: "Ointment for skin protection, 100gm pack.",
    image: E_OINTMENT_100GM_IMAGE, // Replace with the actual image variable
  },
  {
    name: "E Ointment 40gm",
    description: "Ointment for skin protection, 40gm pack.",
    image: E_OINTMENT_40GM_IMAGE, // Replace with the actual image variable
  },
  {
    name: "E-Soap",
    description: "Soap for skin cleansing and nourishment.",
    image: E_SOAP_IMAGE, // Replace with the actual image variable
  },
];

const Emoll = () => {
  const [flipped, setFlipped] = useState(Array(products.length).fill(false));

  const handleFlip = (index) => {
    setFlipped((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="p-6 mb-20">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Emollient Products
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

export default Emoll;
