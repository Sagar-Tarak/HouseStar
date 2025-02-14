import React, { useState } from "react";
import { motion } from "framer-motion";

const HeroParallax = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX - window.innerWidth / 2, y: clientY - window.innerHeight / 2 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background Abstract Layers */}
      <motion.div
        className="absolute w-72 h-72 bg-red-500 rounded-full opacity-30"
        style={{ top: "10%", left: "20%" }}
        animate={{ x: mousePos.x * 0.02, y: mousePos.y * 0.02 }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-20"
        style={{ top: "50%", right: "15%" }}
        animate={{ x: -mousePos.x * 0.03, y: -mousePos.y * 0.03 }}
      />
      <motion.div
        className="absolute w-60 h-60 bg-yellow-500 rounded-full opacity-40"
        style={{ bottom: "10%", left: "40%" }}
        animate={{ x: mousePos.x * 0.01, y: mousePos.y * 0.01 }}
      />

      {/* Hero Content */}
      <div className="text-center relative z-10">
        <h1 className="text-6xl font-bold text-gray-800">Welcome to HouseStar</h1>
        <p className="text-lg text-gray-600 mt-4">On-demand home services, just a click away.</p>
        <button className="mt-6 px-6 py-3 bg-red-600 text-white text-lg rounded-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroParallax;
