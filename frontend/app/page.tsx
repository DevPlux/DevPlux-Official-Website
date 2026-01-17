"use client";

import Intro from "@/components/intro";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Services />
    </main>
  );
}
