"use client";

import { useState, useEffect } from "react";
import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconBook,
  IconBrandFacebook,
  IconBrandGithub,
  IconMail,
  IconStars,
} from "@tabler/icons-react";

export default function FloatingDockNavbar() {
  const [compact, setCompact] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const links = [
    { title: "Home", href: "#hero", icon: <IconHome className="w-6 h-6" /> },
    { title: "About", href: "#about", icon: <IconUser className="w-6 h-6" /> },
    {
      title: "Projects",
      href: "#projects",
      icon: <IconBriefcase className="w-6 h-6" />,
    },
    { title: "Blog", href: "#blog", icon: <IconBook className="w-6 h-6" /> },
    {
      title: "Skills",
      href: "#skills",
      icon: <IconStars className="w-6 h-6" />,
    },
    {
      title: "Contact",
      href: "#contact",
      icon: <IconMail className="w-6 h-6" />,
    },
    {
      title: "Facebook",
      href: "https://www.facebook.com/karl.hen.z.ferrer.2025/",
      icon: <IconBrandFacebook className="w-6 h-6" />,
    },
    {
      title: "GitHub",
      href: "https://github.com/KarlHenz548",
      icon: <IconBrandGithub className="w-6 h-6" />,
    },
  ];

  // Handle scroll to hide/show and resize
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScroll && current > 50);
      setCompact(current > 20);
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Smooth scroll function
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // For external links
      window.open(href, "_blank");
    }
  };

  return (
    <nav
      className={`
        fixed top-4 left-1/2 transform -translate-x-1/2 z-50
        w-[90%] md:w-4/5 lg:w-3/5 rounded-xl backdrop-blur bg-white/20 border border-white/10
        transition-all duration-300
        ${hidden ? "-translate-y-24" : "translate-y-0"}
        ${compact ? "h-12" : "h-16"}
        shadow-lg
      `}
    >
      <div className="flex items-center justify-between h-full px-6">
        <h1
          className={`font-bold transition-all ${
            compact ? "text-lg" : "text-xl"
          }`}
        >
          MyPortfolio
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <button
              key={link.title}
              onClick={() => scrollToSection(link.href)}
              className="group relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/10 transition"
            >
              {link.icon}
              {/* Tooltip */}
              <span className="absolute -bottom-7 rounded-md bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {link.title}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile Menu */}
        <MobileMenu links={links} scrollToSection={scrollToSection} />
      </div>
    </nav>
  );
}

function MobileMenu({
  links,
  scrollToSection,
}: {
  links: { title: string; href: string; icon: React.ReactNode }[];
  scrollToSection: (href: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md hover:bg-black/10 transition"
      >
        {open ? "✕" : "☰"}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white/80 backdrop-blur rounded-xl shadow-lg p-4 flex flex-col gap-3">
          {links.map((link) => (
            <button
              key={link.title}
              onClick={() => {
                scrollToSection(link.href);
                setOpen(false);
              }}
              className="flex items-center gap-2 text-black hover:text-blue-500 transition"
            >
              {link.icon}
              <span>{link.title}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
