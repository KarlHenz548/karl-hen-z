import Link from "next/link";
import TypingCode from "../ui/typing-code";

export default function Hero() {
  return (
    <section
      id="hero"
      className=" mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center gap-10 px-4 pt-20 pb-12 sm:px-6 sm:pt-24 sm:pb-16 lg:flex-row lg:gap-12 lg:px-8 lg:pt-24 lg:pb-16"
    >
      <div className="flex flex-1 flex-col items-start gap-4">
        <p className="text-sm font-medium tracking-widest uppercase text-brand">
          Hello, i&apos;m
        </p>
        <h1 className="text-5xl font-fold tracking-tight text-foreground uppercase">
          Karl Hen&apos;z Ferrer
        </h1>
        <h2 className="text-2xl font-semibold leading-snug text-brand">
          Aspiring Software Engineer
        </h2>
        <p className="text-base leading-relaxed text-foreground/80 max-w-xl">
          I build modern web applications with thoughtful user experiences and
          reliable backend systems.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="rounded-xl border border-[#e8d7c4] bg-[#fff4e6] px-6 py-3 font-semibold text-[#3c2f2f] shadow-[6px_6px_12px_#d6c8b8] transition-all duration-200 hover:scale-105 active:translate-y-0.5 active:scale-95 active:shadow-[inset_4px_4px_12px_#d6c8b8] dark:border-[#3c2f2f] dark:bg-[#4b3832] dark:text-[#fff4e6] dark:shadow-[6px_6px_12px_#2a201d] dark:active:shadow-[inset_4px_4px_12px_#2a201d]"
          >
            View Projects
          </Link>

          <Link
            href="/resume/Resume.pdf"
            download
            className="rounded-xl border border-[#e8d7c4] bg-[#fff4e6] px-6 py-3 font-semibold text-[#3c2f2f] shadow-[6px_6px_12px_#d6c8b8] transition-all duration-200 hover:scale-105 active:translate-y-0.5 active:scale-95 active:shadow-[inset_4px_4px_12px_#d6c8b8] dark:border-[#3c2f2f] dark:bg-[#4b3832] dark:text-[#fff4e6] dark:shadow-[6px_6px_12px_#2a201d] dark:active:shadow-[inset_4px_4px_12px_#2a201d,inset_-4px_-4px_12px_#654c45]"
          >
            Download My Resume
          </Link>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center w-full h-full">
        <div className="relative flex aspect-square w-70 h-80 shrink-0 sm:w-80 lg:w-96 items-center justify-center rounded-4xl border border-[#e8d7c4] bg-[#fff4e6] shadow-[8px_8px_18px_#d6c8b8]  dark:border-[#3c2f2f] dark:bg-[#4b3832] dark:shadow-[12px_12px_24px_#2a201d]">
          <div className="w-[90%] rounded-2xl border border-[#e8d7c4] bg-[#fff4e6] p-4 shadow-[inset_4px_4px_8px_#d6c8b8,inset_-4px_-4px_8px_#ffffff] dark:border-[#3c2f2f] dark:bg-[#3c2f2f] dark:shadow-[inset_4px_4px_8px_#2a201d,inset_-4px_-4px_8px_#654c45]">
            <div className="overflow-hidden rounded-lg border border-[#be9b7b]/40 bg-[#3c2f2f]">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                <span className="size-2 rounded-full bg-[#854442]" />
                <span className="size-2 rounded-full bg-[#be9b7b]" />
                <span className="size-2 rounded-full bg-[#23da90]" />
                <span className="ml-2 text-xs text-[#fff4e6]/70">
                  portfolio.tsx
                </span>
              </div>
              <div className=" h-50 overflow-hidden space-y-3 p-4 font-mono text-xs">
                <TypingCode />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
