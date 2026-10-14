import Link from "next/link";
import { siGithub, siGmail } from "simple-icons";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-8 py-20">
      <div className="mb-12">
        <p className="text-sm font-medium tracking-widest text-brand uppercase">
          LET&apos;S CONNECT
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
          Get in Touch
        </h2>

        <p className="mt-4 max-w-2xl leading-relaxed text-foreground/80">
          Have a project in mind or an opportunity to discuss? I&apos;d be happy
          to hear from you.
        </p>
      </div>

      <div className="rounded-3xl border border-[#e8d7c4] bg-[#fff4e6] p-8 shadow-[8px_8px_18px_#d6c8b8] dark:border-[#3c2f2f] dark:bg-[#4b3832] dark:shadow-[8px_8px_18px_#2a201d]">
        <h3 className="text-xl font-bold text-foreground">
          Let&apos;s work together
        </h3>

        <p className="mt-3 leading-relaxed text-foreground/80">
          I&apos;m open to opportunities where I can contribute, learn, and
          build useful software.
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=karlhenz04@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#854442] px-6 py-3 font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5"
              fill="currentColor"
            >
              <path d={siGmail.path} />
            </svg>
            Email Me
          </Link>

          <Link
            href="https://github.com/KarlHenz548"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#e8d7c4] px-6 py-3 font-semibold text-foreground transition-transform duration-300 hover:-translate-y-1 dark:border-[#654c45]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5"
              fill="currentColor"
            >
              <path d={siGithub.path} />
            </svg>
            GitHub
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
