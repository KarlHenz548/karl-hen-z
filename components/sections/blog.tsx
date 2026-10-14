import Link from "next/link";

const blogPosts = [
  {
    category: "Next.js",
    date: "Learning in public",
    title: "Understanding Server and Client Components",
    description:
      "Learning when to use Server Components, when interactivity needs a Client Component, and how to structure a modern Next.js application.",
    readTime: "6 min read",
    number: "01",
  },
  {
    category: "Frontend",
    date: "Development notes",
    title: "Building Interfaces with React",
    description:
      "Exploring reusable components, props, state, and the fundamentals behind building maintainable user interfaces.",
    readTime: "5 min read",
    number: "02",
  },
  {
    category: "Projects",
    date: "Lessons learned",
    title: "What Building Real Projects Teaches You",
    description:
      "Reflecting on debugging, breaking features into smaller tasks, and learning to make technical decisions independently.",
    readTime: "4 min read",
    number: "03",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8 md:py-32"
    >
      <div className="space-y-12">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-brand uppercase">
            THOUGHTS & LEARNINGS
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Learning, building,
            <br />
            and sharing.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-foreground/75 md:text-lg">
            A collection of technical notes, development experiences, and
            lessons from my journey as a software developer.
          </p>
        </div>

        {/* Featured article */}
        <article className="relative overflow-hidden rounded-3xl border border-[#e8d7c4] bg-[#fff4e6] p-8 shadow-[8px_8px_18px_#d6c8b8] dark:border-[#3c2f2f] dark:bg-[#4b3832] dark:shadow-[8px_8px_18px_#2a201d] md:p-12">
          <div className="absolute -right-12 -top-12 size-48 rounded-full border border-[#be9b7b]/30 md:size-72" />
          <div className="absolute -right-4 -top-4 size-32 rounded-full border border-[#be9b7b]/30 md:size-52" />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex rounded-full border border-[#e8d7c4] px-4 py-2 text-xs font-semibold tracking-wider text-brand uppercase dark:border-[#3c2f2f]">
              Featured article
            </span>

            <h3 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Learning to think like a developer
            </h3>

            <p className="mt-5 max-w-2xl leading-8 text-foreground/75">
              Writing code is only part of software development. Understanding
              problems, choosing the right approach, debugging, and learning
              from mistakes are just as important.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-3 rounded-xl border border-[#e8d7c4] bg-[#fff4e6] px-6 py-3 font-semibold text-[#3c2f2f] shadow-[6px_6px_12px_#d6c8b8] transition-all duration-200 hover:scale-105 active:translate-y-0.5 active:shadow-[inset_4px_4px_12px_#d6c8b8] dark:border-[#3c2f2f] dark:bg-[#4b3832] dark:text-[#fff4e6] dark:shadow-[6px_6px_12px_#2a201d] dark:active:shadow-[inset_4px_4px_12px_#2a201d]"
              >
                Explore articles <span aria-hidden="true">→</span>
              </Link>

              <span className="text-sm text-foreground/60">
                A developer&apos;s ongoing journey
              </span>
            </div>
          </div>
        </article>

        {/* Article list */}
        <div>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium tracking-widest text-brand uppercase">
                THE NOTEBOOK
              </p>
              <h3 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
                Recent writings
              </h3>
            </div>

            <span className="text-sm text-foreground/60">
              Ideas worth exploring
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.number}
                className="group flex h-full flex-col rounded-3xl border border-[#e8d7c4] bg-[#fff4e6] p-7 shadow-[8px_8px_18px_#d6c8b8] transition-all duration-300 hover:scale-105 dark:border-[#3c2f2f] dark:bg-[#4b3832] dark:shadow-[8px_8px_18px_#2a201d]
                
                "
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-[#e8d7c4] px-3 py-1.5 text-xs font-semibold text-brand dark:border-[#3c2f2f]">
                    {post.category}
                  </span>

                  <span className="text-sm text-foreground/40">
                    {post.number}
                  </span>
                </div>

                <p className="mt-6 text-xs font-medium tracking-wide text-foreground/50 uppercase">
                  {post.date}
                </p>

                <h4 className="mt-3 text-xl leading-snug font-bold text-foreground">
                  {post.title}
                </h4>

                <p className="mt-4 flex-1 text-sm leading-7 text-foreground/75">
                  {post.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-[#e8d7c4] pt-5 dark:border-[#3c2f2f]">
                  <span className="text-xs text-foreground/60">
                    {post.readTime}
                  </span>

                  <Link
                    href="/blogs"
                    aria-label={`Read ${post.title}`}
                    className="inline-flex items-center gap-2 font-semibold text-brand transition-transform duration-200 group-hover:scale-105 rounded-2xl p-4
                    active:translate-y-0.5 active:shadow-[inset_4px_4px_12px_#d6c8b8] dark:border-[#3c2f2f]  dark:text-[#fff4e6] dark:active:shadow-[inset_4px_4px_12px_#2a201d]
                    "
                  >
                    Read more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Closing message */}
        <div className="rounded-3xl border border-[#e8d7c4] bg-[#fff4e6] p-8 text-center shadow-[inset_5px_5px_12px_#d6c8b8] dark:border-[#3c2f2f] dark:bg-[#4b3832] dark:shadow-[inset_5px_5px_12px_#2a201d] md:p-12">
          <h3 className="text-2xl font-bold text-foreground md:text-3xl">
            Still learning. Always building.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-foreground/75">
            Every project brings a new challenge and every challenge is an
            opportunity to understand software development a little better.
          </p>

          <Link
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl border border-[#e8d7c4] bg-[#fff4e6] px-6 py-3 font-semibold text-[#3c2f2f] shadow-[6px_6px_12px_#d6c8b8] transition-all duration-200 hover:scale-105 active:scale-95 dark:border-[#3c2f2f] dark:bg-[#4b3832] dark:text-[#fff4e6] dark:shadow-[6px_6px_12px_#2a201d]
            active:translate-y-0.5 active:shadow-[inset_4px_4px_12px_#d6c8b8]  dark:active:shadow-[inset_4px_4px_12px_#2a201d]
            "
          >
            Let&apos;s connect <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
