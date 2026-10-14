import {
  siReact,
  siNextdotjs,
  siTypescript,
  siTailwindcss,
  siZod,
  siNeon,
  siDrizzle,
  siGit,
  siGithub,
} from "simple-icons";

const authIcon = {
  hex: "854442",
  path: "M12 2a5 5 0 0 0-5 5v3H5v12h14V10h-2V7a5 5 0 0 0-5-5Zm-3 5a3 3 0 0 1 6 0v3H9V7Zm3 6a2 2 0 0 1 1 3.732V19h-2v-2.268A2 2 0 0 1 12 13Z",
};

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: siReact },
        { name: "Next.js", icon: siNextdotjs },
        { name: "TypeScript", icon: siTypescript },
        { name: "Tailwind CSS", icon: siTailwindcss },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Server Actions", icon: siNextdotjs },
        { name: "Route Handlers", icon: siNextdotjs },
        { name: "Better Auth", icon: authIcon },
        { name: "Zod", icon: siZod },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "Neon PostgreSQL", icon: siNeon },
        { name: "Drizzle ORM", icon: siDrizzle },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: siGit },
        { name: "GitHub", icon: siGithub },
        { name: "VS Code", icon: null },
      ],
    },
  ];

  return (
    <section id="skills" className=" mx-auto w-full max-w-7xl px-8 py-20">
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

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-3xl border border-[#e8d7c4] bg-[#fff4e6] p-6 shadow-[8px_8px_18px_#d6c8b8] transition-transform duration-300 hover:scale-105 dark:border-[#3c2f2f] dark:bg-[#4b3832] dark:shadow-[8px_8px_18px_#2a201d]"
          >
            <h3 className="text-lg font-bold text-foreground">{group.title}</h3>

            <ul className="mt-5 grid grid-cols-2 gap-4">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex flex-col items-center gap-3 rounded-2xl p-3 text-center"
                >
                  {skill.icon ? (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="size-9"
                      fill={`#${skill.icon.hex}`}
                    >
                      <path d={skill.icon.path} />
                    </svg>
                  ) : (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="size-9 text-[#007ACC]"
                      fill="currentColor"
                    >
                      <path d="M17.5 2 9.2 9.1 4.5 5.5 2 7l4.8 5L2 17l2.5 1.5 4.7-3.6 8.3 7.1L22 20V4l-4.5-2ZM17 6.3v11.4L10.8 12 17 6.3ZM8.2 12 5.5 14.5 4.4 13l1.1-1-1.1-1 1.1-1.5L8.2 12Z" />
                    </svg>
                  )}

                  <span className="text-sm text-foreground/80">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
