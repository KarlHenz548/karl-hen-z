"use client";

import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <label className="relative h-12 w-24 cursor-pointer rounded-full border border-[#be9b7b] bg-[#3c2f2f]">
      <input
        type="checkbox"
        className="peer sr-only"
        onChange={(event) => setIsDark(event.target.checked)}
      />

      {/* 1. Inner border */}
      <span className="absolute inset-[0.1em] rounded-full border border-[#854442]" />

      {/* Left-side base circle */}
      <span className="absolute left-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#be9b7b] shadow-[inset_0_2px_2px_#be9b7b]">
        <span className="size-6 rounded-full border border-[#fff4e6]" />
      </span>

      {/* 2. Right-side indicator — IDAGDAG DITO */}
      <span className="absolute right-2 top-1/2 h-1 w-6 -translate-y-1/2 rounded-full bg-[#be9b7b] shadow-inner" />

      {/* 3. Sliding knob — existing mong span */}
      <span
        className="absolute left-1 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#3c2f2f] shadow-border border-[#be9b7b] shadow-md transition-all duration-300  peer-checked:left-[calc(100%-2.75rem)]

        
      "
      >
        <span className="relative size-full rounded-full border border-[#be9b7b]">
          <span className="absolute inset-2 rounded-full bg-[#3c2f2f] shadow-inner" />
        </span>
      </span>
    </label>
  );
}
