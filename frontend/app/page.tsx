"use client";

import Intro from "@/components/intro";
import Services from "@/components/services";
import Projects from "@/components/projects";
import About from "@/components/about";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Services />
      <Projects />
      <About />
      <Experience />
      <Contact />
    </main>
  );
}
