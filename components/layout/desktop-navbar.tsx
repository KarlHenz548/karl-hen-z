"use client";

import Link from "next/link";
import ThemeSwitch from "../ui/theme-switch";

import { useEffect, useState } from "react";
export default function DesktopNavbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
      window.scrollTo(0, 0);
    }
    const sectionIds = [
      "hero",
      "projects",
      "skills",
      "blog",
      "about",
      "contact",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinkClass = (href: string) =>
    `rounded-xl border border-[#e8d7c4] px-4 py-2 transition-all duration-300 ${
      activeSection === href
        ? "translate-y-0.5 scale-95 bg-[#fff4e6] text-[#3c2f2f] shadow-[inset_4px_4px_12px_#d6c8b8] dark:border-[#3c2f2f] dark:bg-[#4b3832] dark:text-[#fff4e6] dark:shadow-[inset_4px_4px_12px_#2a201d]"
        : "bg-[#fff4e6] text-[#3c2f2f] shadow-[6px_6px_12px_#d6c8b8] hover:scale-105 dark:border-[#3c2f2f] dark:bg-[#4b3832] dark:text-[#fff4e6] dark:shadow-[6px_6px_12px_#2a201d] dark:hover:scale-105"
    }`;

  return (
    <nav className="w-full fixed top-0 z-50 ">
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-500 ease-in-out ${
          isScrolled
            ? "mt-4 w-[90%] max-w-5xl rounded-2xl bg-[#fff4e6] px-5 py-3 shadow-[8px_8px_18px_#d6c8b8] dark:bg-[#4b3832] dark:shadow-[8px_8px_18px_#2a201d]"
            : "w-full max-w-7xl px-8 py-4"
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <span className="flex size-12 items-center justify-center rounded-xl bg-[#854442] p-2 font-bold text-[#fff4e6] shadow-[6px_6px_10px_#d6c8c4] transition-all duration-200 hover:shadow-[inset_4px_4px_8px_#663331] dark:shadow-[6px_6px_10px_#2a201d] dark:hover:shadow-[inset_4px_4px_8px_#663331]">
            KH
          </span>

          <span
            className={`overflow-hidden whitespace-nowrap text-xl font-bold tracking-tight text-foreground transition-all duration-20 ease-in-out ${
              isScrolled ? "max-w-0 opacity-0" : "max-w-40 opacity-100"
            }`}
          >
            Karl Hen&apos;z
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="#hero"
            className={navLinkClass("hero")}
            onClick={() => setActiveSection("hero")}
          >
            Home
          </Link>
          <Link
            href="#projects"
            className={navLinkClass("projects")}
            onClick={() => setActiveSection("projects")}
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className={navLinkClass("skills")}
            onClick={() => setActiveSection("skills")}
          >
            Skills
          </Link>
          <Link
            href="#blog"
            className={navLinkClass("blog")}
            onClick={() => setActiveSection("blog")}
          >
            Blog
          </Link>
          <Link
            href="#about"
            className={navLinkClass("about")}
            onClick={() => setActiveSection("about")}
          >
            About
          </Link>
          <Link
            href="#contact"
            className={navLinkClass("contact")}
            onClick={() => setActiveSection("contact")}
          >
            Contact
          </Link>
        </div>

        <ThemeSwitch />
      </div>
    </nav>
  );
}
