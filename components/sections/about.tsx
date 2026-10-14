export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-8 py-20">
      <div className="mb-12">
        <p className="text-sm font-medium tracking-widest text-brand uppercase">
          GET TO KNOW ME
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
          About Me
        </h2>
      </div>

      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h3 className="text-2xl font-bold text-foreground">
            Hi, I&apos;m Karl Hen&apos;z Ferrer.
          </h3>

          <p className="mt-5 leading-relaxed text-foreground/80">
            I&apos;m a Computer Engineering graduate focused on full-stack
            development and software engineering. I build web applications using
            modern technologies, with an emphasis on clean code, maintainable
            architecture, and practical solutions to real-world problems.
          </p>

          <p className="mt-4 leading-relaxed text-foreground/80">
            Through hands-on projects, I&apos;m continuously developing my
            skills in frontend development, backend systems, database design,
            and software architecture.
          </p>
        </div>

        <div className="rounded-3xl border border-[#e8d7c4] bg-[#fff4e6] p-8 shadow-[8px_8px_18px_#d6c8b8] dark:border-[#3c2f2f] dark:bg-[#4b3832] dark:shadow-[8px_8px_18px_#2a201d]">
          <h3 className="text-xl font-bold text-foreground">
            What I&apos;m focused on
          </h3>

          <ul className="mt-5 space-y-4 text-foreground/80">
            <li>Building full-stack web applications</li>
            <li>Writing clean, maintainable code</li>
            <li>Learning software architecture and backend fundamentals</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
