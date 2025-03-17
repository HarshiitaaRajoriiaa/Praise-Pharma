import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "../Images/about.webp";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 mb-20 ">
      {/* Centered Title */}
      <div data-aos="fade-up" className="text-center mb-8">
        <h2 className="text-5xl font-bold text-lime-600">About Us</h2>
      </div>

      {/* Centered Main Content */}
      <div data-aos="fade-up" className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          Praise Pharmaceuticals is dedicated to a culture of trust and respect
          for our customers and employees. Conducting Praise Pharmaceuticals
          with honesty, fairness, and integrity ensures our continued growth and
          success, helping us achieve our strategic mission of becoming the
          leader in our industry.
        </p>
      </div>

      {/* Two-Column Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side - Mission & Spirit */}
        <div data-aos="fade-right" className="md:w-1/2 space-y-8">
          <div>
            <h3 className="text-3xl font-semibold text-green-600">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our global quest is to improve the quality of human life by
              enabling people to do more, feel better, and live longer. We help
              medical practitioners by providing essential molecules and serve
              the affiliated soul by offering world-class products.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-green-600">
              Our Spirit
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We undertake our quest with the enthusiasm of entrepreneurs,
              excited by the constant search for innovation. We value
              performance achieved with integrity and will attain success as a
              humble leader, with each and every one of our people contributing
              with passion and an unmatched sense of urgency.
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div data-aos="fade-left" className="md:w-1/2">
          <img
            src={About}
            alt="About Praise Pharmaceuticals"
            className="w-full rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
