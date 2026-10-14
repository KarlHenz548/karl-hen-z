export default function Projects() {
  const projects = [
    {
      title: "StockFlow",
      category: "Inventory Management",
      description:
        "An inventory management system for tracking products, stock movements, and business operations.",
    },
    {
      title: "E-Commerce Platform",
      category: "E-Commerce Website",
      description:
        "An online shopping platform featuring product browsing, a shopping cart, and order management.",
    },
    {
      title: "Booking System",
      category: "Booking Website",
      description:
        "A booking platform for managing reservations, schedules, and customer appointments.",
    },
  ];
  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-8 py-20">
      <div className="mb-12">
        <p className="text-sm font-medium tracking-widest text-brand uppercase">
          My Work
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
          Featured Projects
        </h2>

        <p className="mt-4 max-w-2xl leading-relaxed text-foreground/80">
          A selection of projects that showcase my skills in building modern web
          applications and practical software solutions.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article
            className="rounded-3xl border border-[#e8d7c4] bg-[#fff4e6] p-6 shadow-[8px_8px_18px_#d6c8b8] transition-transform duration-300 hover:scale-105 dark:border-[#3c2f2f] dark:bg-[#4b3832] dark:shadow-[8px_8px_18px_#2a201d]"
            key={project.title}
          >
            <div className="mb-5 flex aspect-video items-center justify-center rounded-2xl bg-[#f1dfcc] text-[#854442] dark:bg-[#3c2f2f] dark:text-[#be9b7b]">
              <span className="text-2xl font-bold">Project Preview</span>
            </div>

            <p className="text-sm font-medium tracking-widest text-brand uppercase">
              {project.category}
            </p>

            <h3 className="mt-2 text-2xl font-bold text-foreground">
              {project.title}
            </h3>

            <p className="mt-3 leading-relaxed text-foreground/80">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
