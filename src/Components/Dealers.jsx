import React from "react";

const dealers = [
  { name: "PHARMA (INDIA)", location: "Tilak Nagar, Chembur, Mumbai", contact: "9768580726, 9769442525" },
  { name: "INDIA PHARMA", location: "Chinchwad, PCMC, Pune", contact: "7276656995" },
  { name: "VANDANA MEDICAL AGENCY", location: "Jabalpur", contact: "" },
  { name: "SHREE AMMAN PHARMA", location: "Trichy", contact: "" },
  { name: "AAI PHARMA", location: "Old Panvel", contact: "9833107077" },
  { name: "AKSHAY AGENCY", location: "Chopada Layout, Near Bus Stand, Buldana", contact: "07262244507" },
  { name: "SWASTIK DRUG HOUSE", location: "Solapur", contact: "9423065206" },
  { name: "RAJ MEDICOSE", location: "Gwalior", contact: "" },
  { name: "S D JAIN PHARMACEUTICALS", location: "West Tambaram", contact: "044-7100 5599" },
  { name: "VELLAI VERA GLOBAL PHARMACY", location: "Tambaram, Chennai", contact: "8220312759" },
  { name: "BOROLAKAR MEDICAL STORES", location: "Udgir", contact: "09922607062" },
  { name: "SAI PHARMA PRIVATE LIMITED", location: "Secunderabad", contact: "" },
  { name: "TUKARAM MEDICALS", location: "Hingoli", contact: "9923347734" },
  { name: "GLOBAL HEALTH CARE", location: "Narayangaon", contact: "02134242564, 02132243885" },
  { name: "GIRISH AGENCY", location: "Doctor’s Lane, Nanded", contact: "02462323434" },
  { name: "H.M.PHARMATICS", location: "Gandibaug, Nagpur", contact: "07122777632, 9823743646" },
  { name: "JAWAHAR AGENCY", location: "Main Road, Near Police Station, Kopargaon", contact: "02423222195" },
  { name: "KAMALA MEDICAL AGENCY", location: "Malegaon", contact: "9860054414, 02554231018" },
  { name: "PHARMA PLUS", location: "Goa", contact: "08322227765" },
  { name: "WESTERN PHARMA", location: "Dahisar", contact: "8149952825" },
];

const Dealers = () => {
  return (
    <div className="container mx-auto px-4 py-10 mb-10 min-h-screen">
      <h1 className="text-5xl font-bold text-center text-lime-600 mb-8">Our Dealers</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {dealers.map((dealer, index) => (
          <div key={index} className="bg-white shadow-md p-4  hover:scale-105 rounded-md border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">{dealer.name}</h2>
            <p className="text-gray-600">{dealer.location}</p>
            {dealer.contact && <p className="text-blue-500 mt-2">📞 {dealer.contact}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dealers;
