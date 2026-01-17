"use client";

import Intro from "@/components/intro";
import Services from "@/components/services";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Services />
      <Projects />
    </main>
  );
}
