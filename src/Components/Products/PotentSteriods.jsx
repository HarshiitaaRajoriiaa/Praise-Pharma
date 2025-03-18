import React from "react";
import { useState } from "react";
import PRAISVATE_S6 from "../../Images/Products/Potent/praisvates6.webp"
import PRAISVATE_S3 from "../../Images/Products/Potent/praisvates3cream.webp"
import PRAISVATE_CREAM from "../../Images/Products/Potent/PraisvateCream.webp"
import PRAISVATE_OINTMENT from "../../Images/Products/Potent/PraisvateOintment.webp"
import PAEDISONE_MF from "../../Images/Products/Potent/PaedisoneMFSkinCream.webp"
import PAEDISONE_F from "../../Images/Products/Potent/PaedisoneFSkinCream.webp"
import PAEDISONE_M from "../../Images/Products/Potent/PaedisoneMSkinCream.webp"
import PAEDISONE_SKIN from "../../Images/Products/Potent/PaedisoneSkinCream.webp"
import PRAISCORT_E from "../../Images/Products/Potent/PraisecortEOintment.webp"
import GINGICORT_BUCCAL from "../../Images/Products/Potent/GingicortBuccalPaste.webp"
import PRAISCORT_10MG from "../../Images/Products/Potent/Praisecort10mgInjection.webp"
import PRAISCORT_40MG from "../../Images/Products/Potent/Praisecort40mgInjection.webp"






const products = [
  {
    name: "Praisvate S6 Ointment",
    description: "Advanced skin protection ointment.",
    image: PRAISVATE_S6,
  },
  {
    name: "Praisvate S3 Ointment",
    description: "Effective skin barrier ointment.",
    image: PRAISVATE_S3,
  },
  {
    name: "Praisvate Cream",
    description: "Moisturizing and protective skin cream.",
    image: PRAISVATE_CREAM,
  },
  {
    name: "Praisvate Ointment",
    description: "Healing skin ointment.",
    image: PRAISVATE_OINTMENT,
  },
  {
    name: "Paedisone MF Skin Cream",
    description: "Specialized skin care cream.",
    image: PAEDISONE_MF,
  },
  {
    name: "Paedisone F Skin Cream",
    description: "Effective dermatological treatment.",
    image: PAEDISONE_F,
  },
  {
    name: "Paedisone M Skin Cream",
    description: "Moisturizing medicated skin cream.",
    image: PAEDISONE_M,
  },
  {
    name: "Paedisone Skin Cream",
    description: "Gentle care for skin conditions.",
    image: PAEDISONE_SKIN,
  },
  {
    name: "Praiscort S Lotion",
    description: "Soothing skin lotion.",
    image: PRAISCORT_S_LOTION,
  },
  {
    name: "Praiscort Cream",
    description: "Effective dermatological cream.",
    image: PRAISCORT_CREAM,
  },
  {
    name: "Praiscort Lotion 30ml",
    description: "Moisturizing and healing lotion.",
    image: PRAISCORT_LOTION,
  },
  {
    name: "Praiscort S Ointment",
    description: "Skin-protecting ointment.",
    image: PRAISCORT_S_OINTMENT,
  },
  {
    name: "Praiscort 40mg Injection",
    description: "Injectable corticosteroid treatment.",
    image: PRAISCORT_40MG,
  },
  {
    name: "Praiscort Ointment",
    description: "Healing and soothing ointment.",
    image: PRAISCORT_OINTMENT,
  },
  {
    name: "Praiscort 10mg Injection",
    description: "Injectable dermatological solution.",
    image: PRAISCORT_10MG,
  },
  {
    name: "Praiscort E Ointment",
    description: "Specialized medicated ointment.",
    image: PRAISCORT_E,
  },
  {
    name: "Gingicort Buccal Paste",
    description: "Oral paste for gum health.",
    image: GINGICORT_BUCCAL,
  },
];

const Potent = () => {
  const [flipped, setFlipped] = useState(Array(products.length).fill(false));

  const handleFlip = (index) => {
    setFlipped((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="p-6 mb-20">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Oral Antibiotics Products
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

export default Potent;
