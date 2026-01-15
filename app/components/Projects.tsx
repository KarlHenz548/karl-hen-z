"use client";

import Image from "next/image";

const projects = [
  {
    title: "SaaS Website",
    description:
      "A modern, responsive SaaS platform built with Next.js, TailwindCSS, and TypeScript, featuring subscription management and analytics dashboards.",
    image:
      "https://images.unsplash.com/photo-1642132652860-603f4e3c19b7?q=80&w=2320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    title: "E-commerce Store",
    description:
      "Full-stack online store using Next.js, Prisma, MySQL, and Stripe for payments.",
    image:
      "https://images.unsplash.com/photo-1688561807440-8a57dfa77ee3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    title: "Blog Platform",
    description:
      "A simple blog platform with Markdown support and dynamic routing.",
    image:
      "https://images.unsplash.com/photo-1722503585257-27201c6bbf20?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-10 text-center text-black">
        Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl overflow-hidden border border-black/10 shadow hover:shadow-lg transition"
          >
            <div className="relative h-64 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-black mb-2">
                {project.title}
              </h3>
              <p className="text-black/70">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
