import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { siGithub } from "simple-icons";

const footerLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-6 pb-8 pt-12 sm:px-8">
      <div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="Karl Henz home"
              className="inline-flex items-center gap-3"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-[#854442] text-lg font-bold text-[#fff4e6]">
                KH
              </span>

              <span className="text-lg font-bold text-foreground">
                Karl Henz
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/70">
              Building modern web applications with thoughtful design and
              reliable code.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-sm font-bold tracking-widest text-brand uppercase">
              Quick Links
            </h2>

            <nav
              aria-label="Footer navigation"
              className="mt-4 flex flex-wrap gap-x-5 gap-y-3"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-foreground/75 transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social links */}
          <div>
            <h2 className="text-sm font-bold tracking-widest text-brand uppercase">
              Connect
            </h2>

            <div className="mt-4 flex gap-3">
              <Link
                href="https://github.com/KarlHenz548"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex size-11 items-center justify-center rounded-xl text-foreground transition-colors hover:text-brand"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="size-6 fill-current"
                >
                  <path d={siGithub.path} />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#e8d7c4] pt-6 text-center dark:border-[#654c45] sm:flex-row sm:text-left">
          <p className="text-xs leading-relaxed text-foreground/60">
            © 2026 Karl Henz Ferrer. All rights reserved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-brand"
          >
            Back to top
            <ArrowUp size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
