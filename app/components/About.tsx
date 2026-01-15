"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-gray-50 px-6 sm:px-12 lg:px-20 py-12"
    >
      {/* Top: Profile Image + Text */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24 w-full max-w-6xl">
        {/* Profile Image */}
        <motion.div
          className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-3xl overflow-hidden shadow-xl h-64 sm:h-80 md:h-96 lg:h-[36rem] flex-shrink-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-gray-200 to-gray-100 blur-2xl opacity-40" />
          <Image
            src="/picture.jpg"
            alt="Karl Hen’Z Profile"
            fill
            className="object-cover rounded-3xl relative z-10"
            style={{ objectPosition: "50% 20%" }}
            priority
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="flex-1 flex flex-col justify-center text-center lg:text-left space-y-6 sm:space-y-8 px-2 sm:px-0 mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            About Me
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 leading-relaxed">
            Hello! I’m <span className="font-semibold">Karl Hen’Z</span>, a
            Computer Engineering graduate passionate about crafting modern,
            responsive, and scalable web applications. I enjoy building clean
            interfaces, writing maintainable code, and continuously learning new
            technologies.
          </p>

          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 leading-relaxed">
            I have hands-on experience with{" "}
            <span className="font-semibold">Next.js</span>,{" "}
            <span className="font-semibold">TypeScript</span>, and{" "}
            <span className="font-semibold">TailwindCSS</span>. As a graduated,
            I’m eager to contribute to real-world projects and grow as a
            professional developer.
          </p>
        </motion.div>
      </div>

      {/* Skills / Highlights */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-16 justify-center w-full max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {[
          { title: "Web Development", desc: "Responsive & clean web apps" },
          { title: "UI/UX Design", desc: "Modern, intuitive interfaces" },
          { title: "Problem Solving", desc: "Efficient & scalable solutions" },
          { title: "Teamwork", desc: "Collaborative approach" },
          { title: "Continuous Learning", desc: "Exploring new technologies" },
          { title: "Fast Learner", desc: "Adapt quickly to challenges" },
        ].map((skill, idx) => (
          <motion.div
            key={idx}
            className="p-4 bg-gray-100 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx, duration: 0.6 }}
          >
            <h3 className="font-semibold text-gray-900">{skill.title}</h3>
            <p className="text-gray-700 text-sm sm:text-base">{skill.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
