import { motion } from "framer-motion";
import { useCursor } from "../components/CursorContext";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutPage = () => {
  const { setCursorVariant } = useCursor();

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-white to-gray-100 text-red-600 px-6 md:px-12 lg:px-20 xl:px-28 overflow-hidden"
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
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center md:text-left max-w-2xl w-full md:w-1/2 space-y-8 px-4 sm:px-0"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-gray-800"
          onMouseEnter={() => setCursorVariant("text")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          About <span className="text-red-600">HouseStar</span>
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl text-gray-700 leading-relaxed"
          onMouseEnter={() => setCursorVariant("text")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          HouseStar is a reliable platform designed to make your home care effortless. Our on-demand services like car washing, home cleaning, and bathroom cleaning bring expert cleaning professionals to your doorstep, whenever you need them.
        </motion.p>
      </motion.div>

      {/* Mission & Vision Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="mt-20 md:mt-28 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <div
          className="space-y-4 p-6 rounded-xl shadow-lg transition-all duration-300 hover:bg-red-600 hover:text-white hover:cursor-pointer floatEffect"
          onMouseEnter={() => setCursorVariant("dissolve")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          <motion.h2 className="text-3xl font-semibold text-gray-800 hover:text-white">
            Our Mission
          </motion.h2>
          <p className="text-lg text-gray-600 hover:text-white">
            To provide affordable, high-quality, and convenient home care services, empowering people to maintain clean and healthy living spaces. We aim to exceed expectations by offering exceptional customer service, reliability, and professionalism.
          </p>
        </div>
        <div
          className="space-y-4 p-6 rounded-xl shadow-lg transition-all duration-300 hover:bg-red-600 hover:text-white hover:cursor-pointer floatEffect"
          onMouseEnter={() => setCursorVariant("dissolve")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          <motion.h2 className="text-3xl font-semibold text-gray-800 hover:text-white">
            Our Vision
          </motion.h2>
          <p className="text-lg text-gray-600 hover:text-white">
            To revolutionize the on-demand service industry with innovative solutions, enabling people to take control of their homes without the hassle. Our vision is to be the go-to platform for any home care need, making life simpler for our customers.
          </p>
        </div>
      </motion.div>

      {/* Add keyframes for floating effect */}
      <style jsx>{`
        @keyframes floatEffect {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .floatEffect {
          animation: floatEffect 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutPage;
