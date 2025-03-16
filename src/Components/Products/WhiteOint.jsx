import React from "react";
import WO from '../../Images/Products/White/Woint.webp'
import WD from '../../Images/Products/White/WDOint.webp'

const whiteOintments = [
  {
    name: "WHITOLYN OINTMENT",
    description: "Whitelyn Ointment s a potent Keratolytic Agent and is used in the treatment of Dermatophyte Infections",
    
    image: WO,
  },
  {
    name: "WHITOLYN DS OINTMENT",
    description: "Is a potent Keratolytic Agent and is used in the treatment of Dermatophyte Infections",
    
    image: WD,
  },
];

const WhiteOint = () => {
  return (
    <div className="p-6 mb-24">
      <h2 className="text-2xl font-bold mb-4">White Ointment Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {whiteOintments.map((product, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md text-center">
            {/* Image Section */}
            <div className="h-full flex items-center justify-center overflow-hidden">
              <img src={product.image} alt={product.name} className="object-cover h-full w-full rounded-md" />
            </div>
            
            {/* Product Details */}
            <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{product.description}</p>
            <p className="text-md font-bold text-blue-600 mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhiteOint;
