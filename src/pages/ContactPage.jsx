import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "../components/CursorContext";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const { setCursorVariant } = useCursor();

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-white to-gray-100 text-red-600 px-6 md:px-12 lg:px-20 xl:px-28 overflow-hidden"
    >
      {/* Left Side - Text Content & Contact Details */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full md:w-1/2 text-center md:text-left space-y-6"
      >
        <h2 className="text-5xl font-bold">Get in Touch</h2>
        <p className="text-lg text-gray-700">
          Have questions or need assistance? Contact us and we'll be happy to help! Our team is available 24/7 to address your concerns.
        </p>
        
        {/* Contact Details & Socials */}
        <div className="text-gray-700 space-y-4 text-left mt-6">
          <div className="flex items-center space-x-3">
            <FaPhone className="text-red-600 text-xl" />
            <p>+91 79747 74223</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaWhatsapp className="text-green-600 text-xl" />
            <p>+91 78030 37497</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-red-600 text-xl" />
            <p>HouseStar.in@gmail.com</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaInstagram className="text-pink-600 text-xl" />
            <a
              href="https://www.instagram.com/housestar.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @housestar.in
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-blue-600 text-xl" />
            <p>123, Raipur, Chhattisgarh, India</p>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full md:w-1/2 flex justify-end"
      >
        <div className="bg-white shadow-xl p-8 rounded-xl w-full max-w-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-red-700 transition"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
