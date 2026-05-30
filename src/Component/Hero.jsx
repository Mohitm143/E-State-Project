import React from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      id="Home"
      className="
        min-h-screen
        relative
        overflow-hidden
      "
    >
      {/* Background Image */}
      <img
        src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg"
        alt="Hero Background"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          -z-10
          brightness-75
        "
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          min-h-screen
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-4
          sm:px-6
          md:px-10
          lg:px-20
        "
      >
        <h1
          className="
            text-white
            font-extrabold
            leading-tight
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            max-w-5xl
          "
        >
          Explore Homes That Fit Your Dreams
        </h1>

        <p
          className="
            text-gray-200
            mt-6
            max-w-2xl
            text-sm
            sm:text-base
            md:text-lg
          "
        >
          Discover premium properties, modern apartments, and dream homes
          tailored to your lifestyle and budget.
        </p>

        {/* Buttons */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-4
            mt-10
          "
        >
          <a
            href="#Projects"
            className="
              px-6
              py-3
              rounded-lg
              border-2
              border-white
              text-white
              hover:bg-blue-500
              hover:border-blue-500
              transition-all
            "
          >
            Projects
          </a>

          <a
            href="#Contact"
            className="
              px-6
              py-3
              rounded-lg
              border-2
              border-white
              text-white
              hover:bg-blue-500
              hover:border-blue-500
              transition-all
            "
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;