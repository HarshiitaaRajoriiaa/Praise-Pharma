import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function Landing() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center text-black p-10">
      <div data-aos="fade-up" className="text-center max-w-3xl">
        <h1 className="text-6xl tracking-wide drop-shadow-lg">
          Welcome To{" "}
          <span className="inline-block [animation:waving-hand_1.5s_ease-in-out_infinite] origin-[70%_70%]">
            ✋
          </span>{" "}
          <div className="text-green-500 font-bold">PRAISE PHARMACEUTICALS</div>
        </h1>
        <p className="mt-4 text-lg text-gray-600 drop-shadow-md">
          Belief in Basics
        </p>
      </div>
    </div>
  );
}
