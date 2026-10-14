import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-8 pb-8 pt-4">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-[#e8d7c4] pt-6 text-center dark:border-[#654c45] sm:flex-row sm:text-left">
        <p className="text-sm text-foreground/70">
          © 2026 Karl Hen&apos;z Ferrer. All rights reserved.
        </p>

        <Link
          href="/"
          className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand"
        >
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}
