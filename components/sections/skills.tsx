import {
  siReact,
  siNextdotjs,
  siTypescript,
  siTailwindcss,
  siZod,
  siNeon,
  siDrizzle,
} from "simple-icons";

const authIcon = {
  hex: "854442",
  path: "M12 2a5 5 0 0 0-5 5v3H5v12h14V10h-2V7a5 5 0 0 0-5-5Zm-3 5a3 3 0 0 1 6 0v3H9V7Zm3 6a2 2 0 0 1 1 3.732V19h-2v-2.268A2 2 0 0 1 12 13Z",
};

export default function Skills() {
  const skills = [
    { name: "React", icon: siReact },
    { name: "Next.js", icon: siNextdotjs },
    { name: "TypeScript", icon: siTypescript },
    { name: "Tailwind CSS", icon: siTailwindcss },
    { name: "Zod", icon: siZod },
    { name: "Better Auth", icon: authIcon },
    { name: "Neon PostgreSQL", icon: siNeon },
    { name: "Drizzle ORM", icon: siDrizzle },
  ];

  return (
    <section id="skills" className="mx-auto w-full max-w-7xl px-8 py-20">
      <div className="mb-12">
        <p className="text-sm font-medium tracking-widest text-brand uppercase">
          WHAT I WORK WITH
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
          Skills & Technologies
        </h2>

        <p className="mt-4 max-w-2xl leading-relaxed text-foreground/80">
          The tools and technologies I use to build modern, reliable web
          applications.
        </p>
      </div>

      <article className="rounded-3xl border border-[#e8d7c4] bg-[#fff4e6] p-6 shadow-[8px_8px_18px_#d6c8b8] dark:border-[#3c2f2f] dark:bg-[#4b3832] dark:shadow-[8px_8px_18px_#2a201d]">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl p-4 text-center transition-transform duration-300 hover:scale-105"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-9"
                fill={`#${skill.icon.hex}`}
              >
                <path d={skill.icon.path} />
              </svg>

              <span className="text-sm text-foreground/80">{skill.name}</span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
