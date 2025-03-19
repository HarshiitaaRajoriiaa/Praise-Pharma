import React from 'react'
import LULILYN from '../../Images/Products/Fungal/L.webp'
import ITRALYN from '../../Images/Products/Fungal/ITRALYN.webp'
import ESAVA_SOAP from '../../Images/Products/Fungal/ESAVA.webp'
import ESAVA_POWDER from '../../Images/Products/Fungal/ESAVAp.webp'
import ESAVA_OINTMENT from '../../Images/Products/Fungal/ESAVAo.webp'
import ESAVA_LOTION from '../../Images/Products/Fungal/ESAVAlot.webp'
import ESAVA_CREAM from '../../Images/Products/Fungal/ESAVAC.webp'
import KESAVA_SHAMPOO from '../../Images/Products/Fungal/KESAVA.webp'
import ESAVASONE_LOTION from "../../Images/Products/Fungal/ESAVASONEL.webp"
import THYMOL_LOTION from "../../Images/Products/Fungal/THYMOLlot.webp"
import { useState } from 'react'




const fungal = [
  {
    name: "LULILYN CREAM",
    description: "Topical antifungal cream for skin infections.",
    image: LULILYN,
  },
  {
    name: "ITRALYN 100MG & 200MG",
    description: "Oral antifungal medication for systemic infections.",
    image: ITRALYN,
  },
  {
    name: "ESAVA SOAP",
    description: "Medicated soap for fungal and bacterial skin conditions.",
    image: ESAVA_SOAP,
  },
  {
    name: "ESAVA POWDER",
    description: "Antifungal powder for preventing and treating infections.",
    image: ESAVA_POWDER,
  },
  {
    name: "KESAVA SHAMPOO",
    description: "Antifungal and anti-dandruff shampoo.",
    image: KESAVA_SHAMPOO,
  },
  {
    name: "ESAVA OINTMENT",
    description: "Topical antifungal ointment for skin treatment.",
    image: ESAVA_OINTMENT,
  },
  {
    name: "ESAVASONE LOTION",
    description: "Medicated lotion for fungal and inflammatory skin issues.",
    image: ESAVASONE_LOTION,
  },
  {
    name: "ESAVA CREAM",
    description: "Broad-spectrum antifungal cream.",
    image: ESAVA_CREAM,
  },
  {
    name: "ESAVA LOTION",
    description: "Lightweight antifungal lotion for daily use.",
    image: ESAVA_LOTION,
  },
  {
    name: "THYMOL LOTION",
    description: "Antiseptic and antifungal lotion for skin conditions.",
    image: THYMOL_LOTION,
  },
];


const Fungal = () => {
  const [flipped, setFlipped] = useState(
    Array(fungal.length).fill(false)
  );

  const handleFlip = (index) => {
    setFlipped((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="p-6 mb-20">
      <h2 className="text-2xl font-bold mb-4 text-center">
      Fungal Treatment Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {fungal.map((product, index) => (
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


export default Fungal;