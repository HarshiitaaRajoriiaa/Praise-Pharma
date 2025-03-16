import React from "react";
import { NavLink } from "react-router-dom";

// Sample images (Replace with actual images)
import acne from "../Images/Products/acne.webp";
import fungal from "../Images/Products/fungal.webp";
import emol from "../Images/Products/emollient.webp";
import hair from "../Images/Products/hair.webp";
import hansen from "../Images/Products/hansen.webp";
import heel from "../Images/Products/heel.webp";
import steriod from "../Images/Products/steriods.webp";
import hydrating from "../Images/Products/hydrating.webp";
import viti from "../Images/Products/vitiligo.webp";
import nerve from "../Images/Products/nerve.webp";
import muscle from "../Images/Products/muscle.webp";
import anti from "../Images/Products/anti.webp";
import protective from "../Images/Products/protective.webp";
import white from "../Images/Products/white.webp";
import sunscreen from "../Images/Products/sunscreen.webp";
import whitefield from "../Images/Products/whitefield.webp";

// Medicine Categories
const medicineCategories = [
  {
    name: "Anti Acne has 6 products ",
    imgSrc: acne,
    link: "/products/anti-acne",
  },
  {
    name: "Anti Fungal has 10 products",
    imgSrc: fungal,
    link: "/products/anti-fungal",
  },
  {
    name: "Emollient has 10 products",
    imgSrc: emol,
    link: "/products/emollient",
  },
  {
    name: "Hair Care has 3 products",
    imgSrc: hair,
    link: "/products/hair-care",
  },
  {
    name: "HANSEN'S DISEASES has 1 products",
    imgSrc: hansen,
    link: "/products/hansens-diseases",
  },
  {
    name: "HEEL MANAGEMENT has 2 products",
    imgSrc: heel,
    link: "/products/heel-management",
  },
  {
    name: "Potent Steroid( High[4], Medium[9], Low[4]) products",
    imgSrc: steriod,
    link: "/products/steroid",
  },
  {
    name: "HYDRATING AND KERATOLYTIC LOTION has 1 products",
    imgSrc: hydrating,
    link: "/products/hydrating",
  },
  
  {
    name: "Vitiligo Treatment has 6 products",
    imgSrc: viti,
    link: "/products/vitiligo",
  },

  {
    name: "Muscle Pain Killer  has 1 products",
    imgSrc: muscle,
    link: "/products/muscle-pain",
  },
  {
    name: "Nerve Pain Killer has 1 products",
    imgSrc: nerve,
    link: "/products/nerve-pain",
  },
  {
    name: "Oral Antibiotic has 3 products",
    imgSrc: anti,
    link: "/products/oral-antibiotic",
  },
  {
    name: "Oral Steroids has 1 product",
    imgSrc: steriod,
    link: "/products/oral-steroids",
  },
  {
    name: "Protective Cream & Ointment has 2 products",
    imgSrc: protective,
    link: "/products/protective-cream",
  },
  
  {
    name: "Skin Whitening Agent has 2 products",
    imgSrc: white,
    link: "/products/skin-whitening",
  },
  {
    name: "Sun Block Fairness Lotion has 1 products",
    imgSrc: sunscreen,
    link: "/products/sunblock",
  },
  {
    name: "Whitfield Ointment has 2 products",
    imgSrc: whitefield,
    link: "/products/whitfield",
  },
];

const ProductsPage = () => {
  return (
    <section className="py-12 px-6 md:px-12 mb-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-lime-600 text-center mb-8">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {medicineCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={category.imgSrc}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {category.name}
                </h3>
                <NavLink
                  to={category.link}
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  View Products →
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
