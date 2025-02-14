import React from "react";
import { motion } from "framer-motion";

function Loader() {
  const dotCount = 8; // Number of dots in the circle
  const radius = 40; // Radius of the circle (increased for a more spacious look)
  const dotSize = 10; // Diameter of each dot

  // Create an array for mapping dots
  const dots = Array.from({ length: dotCount });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-white to-gray-200">
      <div
        className="relative"
        style={{ width: 2 * (radius + dotSize), height: 2 * (radius + dotSize) }}
      >
        {/* Circular pulsating dots */}
        {dots.map((_, i) => {
          // Calculate angle in radians for each dot
          const angle = (i * 360 / dotCount) * (Math.PI / 180);
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          return (
            <motion.div
              key={i}
              className="absolute bg-red-600 rounded-full shadow-md"
              style={{
                width: dotSize,
                height: dotSize,
                top: `calc(50% + ${y}px - ${dotSize / 2}px)`,
                left: `calc(50% + ${x}px - ${dotSize / 2}px)`,
              }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Central animated rotating & pulsating star */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{
            rotate: { duration: 3, ease: "linear", repeat: Infinity },
            scale: { duration: 1.5, ease: "easeInOut", repeat: Infinity },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-red-600 drop-shadow-lg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
          </svg>
        </motion.div>
      </div>

      {/* Animated "Loading..." text */}
      <motion.div
        className="mt-8 text-red-600 font-bold text-xl drop-shadow"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Loading...
      </motion.div>
    </div>
  );
}

export default Loader;
