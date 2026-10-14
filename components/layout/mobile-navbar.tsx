"use client";

import Link from "next/link";
import ThemeSwitch from "../ui/theme-switch";
import { useEffect, useState } from "react";

export default function Mobilenavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Blog", href: "#blog" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full px-4">
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-500 ease-in-out ${
          isScrolled
            ? "mt-3 max-w-md rounded-2xl bg-[#fff4e6] px-4 py-3 shadow-[8px_8px_18px_#d6c8b8] dark:bg-[#4b3832] dark:shadow-[8px_8px_18px_#2a201d]"
            : "max-w-7xl px-2 py-4"
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-[#854442] font-bold text-[#fff4e6] shadow-[4px_4px_8px_#d6c8c4] dark:shadow-[4px_4px_8px_#2a201d]">
            KH
          </span>

          <span
            className={`overflow-hidden whitespace-nowrap font-bold text-foreground transition-all duration-300 ${
              isScrolled ? "max-w-0 opacity-0" : "max-w-40 opacity-100"
            }`}
          >
            Karl Hen&apos;z
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex size-10 items-center justify-center rounded-xl border border-[#e8d7c4] bg-[#fff4e6] text-xl text-[#3c2f2f] shadow-[4px_4px_8px_#d6c8b8] transition-all active:scale-95 dark:border-[#3c2f2f] dark:bg-[#4b3832] dark:text-[#fff4e6] dark:shadow-[4px_4px_8px_#2a201d]"
          >
            {isMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mx-auto mt-3 grid max-w-md grid-cols-2 gap-3 rounded-2xl bg-[#fff4e6] p-4 shadow-[8px_8px_18px_#d6c8b8] dark:bg-[#4b3832] dark:shadow-[8px_8px_18px_#2a201d]">
          <div className="col-span-2 mt-2 flex items-center justify-between rounded-xl px-4 py-3">
            <span className="text-sm font-semibold text-foreground">
              Appearance
            </span>

            <ThemeSwitch />
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-xl bg-[#fff4e6] px-4 py-3 text-center text-sm font-semibold text-[#3c2f2f] shadow-[4px_4px_8px_#d6c8b8] transition-all active:scale-95 dark:bg-[#4b3832] dark:text-[#fff4e6] dark:shadow-[4px_4px_8px_#2a201d]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
