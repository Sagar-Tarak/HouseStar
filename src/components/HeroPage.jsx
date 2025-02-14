import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCursor } from "./CursorContext";

function HeroPage() {
  const { setCursorVariant } = useCursor();
  const [chatIndex, setChatIndex] = useState(0);

  // Chat messages
  const chatMessages = [
    { sender: "user", text: "Need help with services?", avatar: "👤" },
    { sender: "bot", text: "Ask HouseStar! 🏠✨", avatar: "🤖" },
    { sender: "user", text: "How does it work?", avatar: "👤" },
    { sender: "bot", text: "Simply book a service and relax! 😌", avatar: "🤖" },
  ];

  useEffect(() => {
    if (chatIndex < chatMessages.length - 1) {
      const timer = setTimeout(() => {
        setChatIndex((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [chatIndex]);

  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const buttonVariants = {
    rest: { scale: 1, backgroundColor: "linear-gradient(90deg, #DC2626, #B91C1C)" },
    hover: { scale: 1.1, backgroundColor: "linear-gradient(90deg, #B91C1C, #DC2626)", transition: { duration: 0.3 } },
    tap: { scale: 0.97, transition: { duration: 0.1 } },
  };

  const chatBubbleVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-white to-gray-100 text-red-600 px-6 md:px-12 lg:px-20 xl:px-28 overflow-hidden"
    >
      {/* Background Elements for Depth */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <motion.div
          className="w-96 h-96 bg-red-100 rounded-full opacity-30 absolute -top-24 -left-32 hidden md:block"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        <motion.div
          className="w-80 h-80 bg-gray-100 rounded-full opacity-40 absolute bottom-16 right-0 hidden md:block"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </div>

      {/* Left Side (Text Section) */}
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={textVariants}
        className="relative z-10 text-center md:text-left max-w-2xl w-full md:w-1/2 space-y-8 px-4 sm:px-0"
      >
        <motion.h1
          variants={textVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight"
          onMouseEnter={() => setCursorVariant("text")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          Welcome to <span className="text-red-500">HouseStar</span>
        </motion.h1>
        <motion.p
          variants={textVariants}
          className="text-lg sm:text-xl text-gray-700 leading-relaxed"
          onMouseEnter={() => setCursorVariant("text")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          Your go-to platform for on-demand home services. Book professionals in just a few clicks!
        </motion.p>
        <motion.a
          href="#services"
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          onMouseEnter={() => setCursorVariant("dissolve")}
          onMouseLeave={() => setCursorVariant("default")}
          className="mt-6 inline-block text-white px-8 py-4 rounded-full font-semibold transition text-lg shadow-lg bg-red-600"
        >
          Explore Services
        </motion.a>
      </motion.div>

      {/* Right Side (Chat Animation) */}
      <div className="relative w-full md:w-1/2 flex flex-col items-center md:items-end space-y-4 mt-10 md:mt-0 px-4 sm:px-6">
        {chatMessages.slice(0, chatIndex + 1).map((msg, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={chatBubbleVariants}
            transition={{ delay: index * 0.3 }}
            className={`relative flex items-center space-x-2 p-4 sm:p-5 rounded-2xl text-white max-w-[90%] sm:max-w-[80%] md:max-w-md text-lg sm:text-xl shadow-lg ${
              msg.sender === "user"
                ? "bg-gray-800 self-start"
                : "bg-red-600 self-end"
            }`}
          >
            <span className="text-xl sm:text-2xl">{msg.avatar}</span>
            <p>{msg.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default HeroPage;