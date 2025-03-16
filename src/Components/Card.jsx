import React from "react";
import { NavLink } from "react-router-dom";
import about from "../Images/aboutt.webp";
import deal from "../Images/deal.webp";
import product from "../Images/products.webp";

const ThreeCardsSection = () => {
  const cards = [
    {
      title: "About Us",
      description:
        "Praise Pharma is a venture to help the need of the hungry and fulfill the affiliated Soul. Thanks to God for all his Grace, we acknowledge and praise his role in every transaction as Praise Pharma.",
      imgSrc: about, // Replace with actual image URL
      link: "/about",
    },
    {
      title: "Our Products",
      description:
        "Our global quest is to improve the quality of human life by enabling people to do more, feel better, live longer, help the medical practitioner by provoiding basic molecules and help the affliated soul by providing word class product.",
      imgSrc: product , // Replace with actual image URL
      link: "/products",
    },
    {
      title: "Our Dealers",
      description:
        "Meet our trusted network of dealers helping us reach those in need.",
      imgSrc:  deal , // Replace with actual image URL
      link: "/dealers",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-12 bg-gray-100 mb-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Explore More-
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <NavLink
                  to={card.link}
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  Read More →
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeCardsSection;
