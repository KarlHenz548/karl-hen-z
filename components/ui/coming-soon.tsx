import Link from "next/link";

type ComingSoonProps = {
  title: string;
  description: string;
};

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-8 py-20 text-center">
      <p className="text-sm font-medium tracking-widest text-brand uppercase">
        UNDER CONSTRUCTION
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        {title}
      </h1>

      <p className="mt-4 max-w-xl leading-relaxed text-foreground/80">
        {description}
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#854442] px-6 py-3 font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
      >
        <span aria-hidden="true">←</span>
        Back to Home
      </Link>
    </section>
  );
}
