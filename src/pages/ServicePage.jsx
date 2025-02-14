import { motion } from "framer-motion";
import { useCursor } from "../components/CursorContext";

const services = [
  { title: "Car Wash", description: "Premium doorstep car cleaning.", icon: "🚗" },
  { title: "Bathroom Cleaning", description: "Deep cleaning solutions.", icon: "🛁" },
  { title: "Home Cleaning", description: "Comprehensive home cleaning.", icon: "🏠" },
];





const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ServicePage = () => {
  const { setCursorVariant } = useCursor();

  return (
    <section id="services">
      <div className="relative p-10 flex flex-col items-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] text-white pb-10">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-12"
      >
        Professional On-Demand Services
      </motion.h1>

      {/* Service Cards */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(248, 113, 113, 1)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-xl shadow-xl rounded-3xl flex flex-col items-center text-center border border-white/20 transition-all duration-300 relative overflow-hidden px-6 py-8"
            onMouseEnter={() => setCursorVariant("dissolve")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <div className="text-6xl">{service.icon}</div>
            <h2 className="text-2xl font-semibold mt-4">{service.title}</h2>
            <p className="text-gray-300 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default ServicePage;