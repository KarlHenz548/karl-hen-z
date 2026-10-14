import DesktopNavbar from "@/components/layout/desktop-navbar";
import Mobilenavbar from "@/components/layout/mobile-navbar";
import Footer from "@/components/layout/footer";
import About from "@/components/sections/about";
import Blog from "@/components/sections/blog";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopNavbar />
      </div>
      <div className="lg:hidden">
        <Mobilenavbar />
      </div>

      <main>
        <ScrollReveal>
          <Hero />
        </ScrollReveal>

        <ScrollReveal>
          <Projects />
        </ScrollReveal>

        <ScrollReveal>
          <Skills />
        </ScrollReveal>

        <ScrollReveal>
          <Blog />
        </ScrollReveal>

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>

      <Footer />
    </>
  );
}
