import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import logo from '../Images/logo.webp'

export default function Landing() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-200 text-black p-10">
      <div data-aos="fade-up" className="text-center max-w-3xl">
        <h1 className="text-6xl tracking-wide ">
          Welcome To{" "}
          <span className="inline-block [animation:waving-hand_1.5s_ease-in-out_infinite] origin-[70%_70%]">
            ✋
          </span>{" "}
         <img src={logo} className="w-7xl"/>
        </h1>
        {/* <p className="mt-4 text-xl text-black italic drop-shadow-md font-[Dancing Script]"style={{ fontFamily: "'Dancing Script', cursive" }}>
          Belief in the Basics
        </p> */}
      </div>
    </div>
  );
}
