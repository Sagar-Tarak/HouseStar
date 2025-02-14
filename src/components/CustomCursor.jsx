// CustomCursor.jsx
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "./CursorContext";

const CustomCursor = () => {
  const { cursorVariant } = useCursor();
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth follow effect using a spring
  const springConfig = { damping: 20, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      // Center the cursor based on its dimensions
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  // Define variants:
  const variants = {
    default: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      backgroundColor: "rgba(248, 113, 113, 0.8)", // semi-transparent red
      opacity: 1,
    },
    dissolve: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.3 },
    },
    text: {
      width: 3,       // remains 3px
      height: 40,     // increased from 32px to 40px to better match text size
      borderRadius: 0,
      backgroundColor: "rgba(248, 113, 113, 1)", // fully opaque red
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={cursorVariant}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: cursorX,
        y: cursorY,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
