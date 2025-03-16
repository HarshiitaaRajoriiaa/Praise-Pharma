import React from "react";
import SPF from "../../Images/Products/SPF.webp"

export default function Sunscreen() {
  return (
    <div className="p-6 mb-20">
      <h2 className="text-2xl font-bold mb-4">Acne Treatment Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-4 rounded-lg shadow-md text-center max-w-sm mx-auto" >
            <div className="h-80 flex items-center justify-center overflow-hidden">
              <img
                src={SPF}
                alt="Sunlyn SPF- 30 Lotion"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mt-3">Sunlyn SPF- 30 Lotion</h3>
            <p className="text-sm text-gray-600 mt-1">Non greasy, water resistance sunblock Sunlyn SPF- 30 Lotion</p>
            <p className="text-md font-bold text-blue-600 mt-2">
              
            </p>
          </div>
        
      </div>
    </div>
  );
}
