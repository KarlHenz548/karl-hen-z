import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BlogPreview from "./components/BlogPreview";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <BlogPreview />
      <Contact />
    </>
  );
}
