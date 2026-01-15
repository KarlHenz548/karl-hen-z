"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  {
    name: "Next.js",
    icon: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  },
  {
    name: "TailwindCSS",
    icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
  },
  { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "HTML", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
  { name: "CSS", icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
  {
    name: "JavaScript",
    icon: "https://cdn.worldvectorlogo.com/logos/javascript-r.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-gray-50 to-white px-6 sm:px-12 lg:px-20 py-20"
    >
      {/* Intro */}
      <motion.div
        className="text-center max-w-3xl mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          My Skills
        </h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
          These are some of the tools and technologies I use to build modern,
          responsive, and scalable web applications.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 w-full max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
          >
            <div className="w-16 h-16 relative mb-3">
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-900 font-medium text-sm sm:text-base text-center">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
