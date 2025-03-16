import React from "react";
import A from "../../Images/Products/Acne/A.webp";
import I10 from "../../Images/Products/Acne/I10.webp";
import M from "../../Images/Products/Acne/M.webp";
import O from "../../Images/Products/Acne/O.webp";
import OS from '../../Images/Products/Acne/OS.webp'
import I20 from '../../Images/Products/Acne/I20.webp'

const acneProducts = [
  {
    name: "METROLYN GEL",
    description:
      "Effectively treats the bumps and blemishes of Rosacea while retaining skin moisture.",
    price: "Rs. 100/-",
    image: M,
  },
  {
    name: "ABAKA GEL",
    description: "A powerful acne-fighting gel with antibacterial properties.",
    price: "Rs. 50/-",
    image:  A ,
  },
  {
    name: "ONAK SR LOTION",
    description:
      "Onak sr solution is a kertolytic and Anti- Bacterial lotion Only brand available in solution base All type of acne over Truncal or Shoulder Apply over the affected area 30 minutes before taking bath If no irritations, Apply in the night, morning wash while taking bath. Meant for overnight application hence stay for long time",
    // price: "Rs. 150/-",
    image: O,
  },
  {
    name: "Isonak 20",
    description:
      "Oral treatment for severe acne, helping to reduce breakouts effectively.",
    // price: "Rs. 200/-",
    image: I20,
  },
  {
    name: "Onak Soap 75gm",
    description: "Anti-acne soap for deep cleansing and pimple prevention.",
    // price: "Rs. 80/-",
    image: OS,
  },
  {
    name: "Isonak 10",
    description: "A lower-dose oral acne treatment for mild to moderate cases.",
    // price: "Rs. 180/-",
    image: I10,
  },
];

const AcneProducts = () => {
  return (
    <div className="p-6 mb-20">
      <h2 className="text-2xl font-bold mb-4">Acne Treatment Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {acneProducts.map((product, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-md text-center max-w-sm mx-auto"
          >
            <div className="h-80  w-full flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{product.description}</p>
            <p className="text-md font-bold text-blue-600 mt-2">
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcneProducts;
