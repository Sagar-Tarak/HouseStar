import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "./CursorContext";

function Header() {
  const { setCursorVariant } = useCursor();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Variants for header entrance animation
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Variants for nav item hover animation (text becomes white)
  const navItemVariants = {
    hover: { scale: 1.1, color: "#FFFFFF", transition: { duration: 0.3 } },
  };

  // Variants for mobile menu appearance
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // Updated class for nav links: larger text, increased padding, fully rounded shape
  const linkClass =
    "text-xl text-gray-700 transition px-6 py-3 rounded-full hover:bg-red-600 hover:text-white";

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Brand */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-600 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ rotate: 360, transition: { duration: 1 } }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
              </motion.svg>
              <motion.span
                className="text-2xl font-bold text-red-600"
                whileHover={{ scale: 1.05 }}
              >
                HouseStar
              </motion.span>
            </a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <motion.a
              href="#home"
              onMouseEnter={() => setCursorVariant("dissolve")}
              onMouseLeave={() => setCursorVariant("default")}
              className={linkClass}
              variants={navItemVariants}
              whileHover="hover"
            >
              Home
            </motion.a>
            <motion.a
              href="#services"
              onMouseEnter={() => setCursorVariant("dissolve")}
              onMouseLeave={() => setCursorVariant("default")}
              className={linkClass}
              variants={navItemVariants}
              whileHover="hover"
            >
              Services
            </motion.a>
            <motion.a
              href="#about"
              onMouseEnter={() => setCursorVariant("dissolve")}
              onMouseLeave={() => setCursorVariant("default")}
              className={linkClass}
              variants={navItemVariants}
              whileHover="hover"
            >
              About
            </motion.a>
            <motion.a
              href="#contact"
              onMouseEnter={() => setCursorVariant("dissolve")}
              onMouseLeave={() => setCursorVariant("default")}
              className={linkClass}
              variants={navItemVariants}
              whileHover="hover"
            >
              Contact
            </motion.a>
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="text-gray-700 hover:text-red-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <nav className="px-2 pt-2 pb-3 space-y-1">
              <motion.a
                href="#home"
                onMouseEnter={() => setCursorVariant("dissolve")}
                onMouseLeave={() => setCursorVariant("default")}
                className={linkClass}
                variants={navItemVariants}
                whileHover="hover"
              >
                Home
              </motion.a>
              <motion.a
                href="#services"
                onMouseEnter={() => setCursorVariant("dissolve")}
                onMouseLeave={() => setCursorVariant("default")}
                className={linkClass}
                variants={navItemVariants}
                whileHover="hover"
              >
                Services
              </motion.a>
              <motion.a
                href="#about"
                onMouseEnter={() => setCursorVariant("dissolve")}
                onMouseLeave={() => setCursorVariant("default")}
                className={linkClass}
                variants={navItemVariants}
                whileHover="hover"
              >
                About
              </motion.a>
              <motion.a
                href="#contact"
                onMouseEnter={() => setCursorVariant("dissolve")}
                onMouseLeave={() => setCursorVariant("default")}
                className={linkClass}
                variants={navItemVariants}
                whileHover="hover"
              >
                Contact
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
