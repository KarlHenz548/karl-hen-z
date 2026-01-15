export interface Post {
    title: string;
    slug: string;
    description: string;
    image: string;
    date: string;
    content: string;
}

// Your posts
export const posts: Post[] = [
    {
        title: "How I Build Modern Web Apps",
        slug: "how-i-build-modern-web-apps",
        description: "A breakdown of my process using Next.js, TypeScript, and clean components.",
        image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?q=80&w=1740&auto=format&fit=crop",
        date: "Nov 21 2025",
        content: `
                Building modern web applications is both an art and a science. The key is to balance clean architecture, maintainable code, and a great user experience. In this post, I'll share my process for creating web apps that are scalable and easy to maintain.

                I start by planning the app structure, defining components, and choosing the right tech stack. For most of my projects, I use Next.js with TypeScript and TailwindCSS. Next.js provides server-side rendering and static generation, which helps with performance and SEO. TypeScript ensures type safety and reduces runtime errors, while TailwindCSS speeds up styling without writing a ton of custom CSS.

                Next comes development. I focus on creating reusable components and writing clear, modular code. This makes it easier to add new features later without breaking existing functionality. I also make use of hooks, context, and utility functions to keep the code organized.

                Testing and optimization are crucial. I write unit and integration tests to catch bugs early. I also monitor performance and optimize images, lazy-load components, and reduce unnecessary re-renders. This ensures that the app remains fast, even as it grows in complexity.

                Finally, I deploy the app using Vercel for seamless integration with Next.js. I set up proper CI/CD pipelines, monitor errors, and collect user feedback to continuously improve the application. By following this structured approach, I can consistently build modern, high-quality web apps that delight users.
`,

    },
    {
        title: "Why I Use TailwindCSS for Everything",
        slug: "why-i-use-tailwindcss-for-everything",
        description: "My thoughts on utility-first styling and why it accelerates development.",
        image: "https://images.unsplash.com/photo-1732017968601-f46d9badf229?q=80&w=874&auto=format&fit=crop",
        date: "Oct 13 2025",
        content: `
TailwindCSS has become my go-to tool for styling almost every web project I work on. The utility-first approach allows me to rapidly build custom designs without writing a ton of custom CSS. By combining small, reusable utility classes, I can create complex layouts and responsive designs efficiently.

One of the biggest advantages of TailwindCSS is its consistency. Since I’m using the same design system across all projects, I don’t have to worry about mismatched spacing, colors, or typography. Everything is defined in a single configuration file, which makes scaling and maintaining projects much easier.

Another reason I love TailwindCSS is its flexibility. I can extend it with custom plugins, create responsive variants, and apply conditional styles effortlessly. This gives me full control over the design without sacrificing speed or maintainability.

Finally, TailwindCSS integrates perfectly with modern frameworks like Next.js and React. Combined with component-based architecture, it allows me to build reusable UI elements that are easy to maintain and update. Overall, TailwindCSS has significantly accelerated my development process and improved the quality of my projects.
`,

    },
    {
        title: "Improving UI With Micro-Interactions",
        slug: "improving-ui-with-micro-interactions",
        description: "Subtle animations that elevate the user experience.",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=928&auto=format&fit=crop",
        date: "Sep 04 2025",
        content: `
Micro-interactions are small, subtle animations or design elements that guide users and enhance their experience without overwhelming them. They provide immediate feedback, making the interface feel more intuitive and alive.

For example, button hover effects, loading spinners, or input field highlights can make a huge difference in how users perceive the responsiveness of a web application. These small touches improve usability by signaling actions and system states clearly.

In addition, well-designed micro-interactions can make repetitive tasks more enjoyable. Animations for likes, notifications, or toggles create a sense of engagement and delight, keeping users more connected to the product.

By focusing on these subtle details, designers and developers can elevate a standard UI into an experience that feels polished and professional, while still being functional and fast-loading. Micro-interactions are a small investment with a big impact on overall user satisfaction.
`,

    },
];
