import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-white to-gray-100 text-gray-900 px-6 md:px-12 lg:px-20 xl:px-28 overflow-hidden">
      
      {/* Left Section - Text & Contact Details */}
      <div className="w-full md:w-1/2 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-red-600"
        >
          Get in Touch
        </motion.h1>
        <p className="text-lg text-gray-700">
          We'd love to hear from you! Whether you have questions or want to book a service, reach out to us.
        </p>

        {/* Contact Details */}
        <div className="mt-4 space-y-2">
          <p>Phone: <a href="tel:7974774223" className="text-red-600 font-semibold hover:underline">79747 74223</a></p>
          <p>WhatsApp: <a href="https://wa.me/917803037497" className="text-red-600 font-semibold hover:underline">+91 78030 37497</a></p>
          <p>Email: <a href="mailto:HouseStar.in@gmail.com" className="text-red-600 font-semibold hover:underline">HouseStar.in@gmail.com</a></p>
          <p>Instagram: <a href="https://www.instagram.com/housestar.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="text-red-600 font-semibold hover:underline">HouseStar Instagram</a></p>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full md:w-1/2 bg-white p-8 shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-red-700 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

    </section>
  );
};

export default ContactPage;
