"use client";

import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        w-full min-h-screen flex items-center justify-center
        bg-linear-to-br from-white to-gray-50
        px-6 sm:px-8 lg:px-12 py-20
      "
    >
      <motion.div
        className="text-center max-w-3xl space-y-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Headline */}
        <motion.h1
          className="
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
            font-bold tracking-tight text-black leading-tight
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Building Modern
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-black to-gray-700">
            Web Experiences
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="
            text-base sm:text-lg md:text-xl
            text-black/70 leading-relaxed
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I’m a fresh Computer Engineering graduate crafting **clean,
          responsive, and high-performance web applications** using{" "}
          <span className="font-semibold">Next.js</span>,{" "}
          <span className="font-semibold">TypeScript</span>, and{" "}
          <span className="font-semibold">TailwindCSS</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="
              group flex items-center justify-center gap-2
              px-6 py-3 bg-black text-white rounded-lg font-semibold
              shadow-sm hover:bg-white hover:text-black border border-black
              transition-all duration-300
            "
          >
            View Projects
            <IconArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="
              px-6 py-3 border-2 border-black text-black font-semibold rounded-lg
              hover:bg-black hover:text-white transition-all duration-300
            "
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
