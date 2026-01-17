"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";
import {
  GraduationCap,
  BookOpen,
  FlaskConical,
  BriefcaseBusiness,
} from "lucide-react";
import React from "react";
import SectionHeading from "@/components/section-heading";

const universityProjects = [
  {
    title: "Academic Assignments",
    description:
      "Coursework-based assignments focused on software engineering principles, system design, problem-solving, and technical documentation.",
    icon: BookOpen,
  },
  {
    title: "University Projects",
    description:
      "Individual and group projects developed as part of university programs, covering full-stack development, IoT systems, and applied computing.",
    icon: GraduationCap,
  },
  {
    title: "Research & Experimental Work",
    description:
      "Research-oriented work including experimentation, model evaluation, data analysis, and prototype development for academic studies.",
    icon: FlaskConical,
  },
];

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <motion.main
      ref={ref}
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-10 scroll-mt-15"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* University Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-left relative"
      >
        {/* Heading */}
        <div className="max-w-2xl mb-14 mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-blue-600 dark:text-blue-400">
            <GraduationCap className="w-4 h-4" />
            <span className="font-medium">Academic & Research</span>
          </div>

          {/* Decorative blobs (desktop only) */}
          <div className="hidden sm:block pointer-events-none absolute left-1/2 -translate-x-1/2 -z-10">
            <div className="absolute -top-40 -left-[48rem] h-[32rem] w-[32rem] rounded-full bg-blue-500/20 dark:bg-blue-500/30 blur-3xl" />
          </div>

          <SectionHeading>University Projects</SectionHeading>

          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Selected academic and research projects developed as part of
            university coursework and applied research initiatives.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {universityProjects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.25 },
                }}
                className="group relative rounded-3xl border border-gray-200/70 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent" />
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 6, scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 relative z-10"
                >
                  <Icon className="w-6 h-6" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white relative z-10">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
                  {project.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-300 group-hover:w-24 -translate-x-1/2" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* CTA Section – Service-aware */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 120,
          damping: 18,
        }}
        viewport={{ once: true }}
        className="sm:mt-20 mt-14 p-8 sm:p-10 rounded-2xl
             bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-blue-500/5
             dark:from-blue-500/5 dark:via-indigo-500/40 dark:to-pink-500/5
             border border-gray-200/50 dark:border-gray-700/50
             backdrop-blur-sm"
      >
        <div className="flex flex-col gap-8">
          {/* CTA Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-3">
              Let’s build something meaningful together
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Whether it’s a commercial product, digital brand presence, or an
              academic project — we’re ready to collaborate.
            </p>
          </div>

          {/* Service Tags */}
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
              Web & Mobile Development
            </span>
            <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              UI / UX Design
            </span>
            <span className="px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400">
              Social Media & Branding
            </span>
            <span className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
              Academic & Research Work
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="
          px-8 py-3 rounded-full
          bg-gradient-to-r from-blue-600 to-indigo-600
          text-white font-medium
          hover:shadow-lg hover:shadow-blue-500/30
          transition-all duration-300
          flex items-center gap-2
        "
            >
              <BriefcaseBusiness className="w-5 h-5" />
              Start a Business Project
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-7 py-3 rounded-full
                bg-white/70 dark:bg-gray-900/70
                border border-gray-300/50 dark:border-gray-700/50
                text-gray-800 dark:text-gray-200
                hover:bg-white dark:hover:bg-gray-900
                transition-all duration-300
                flex items-center gap-2
              "
            >
              <GraduationCap className="w-5 h-5" />

              {/* Mobile */}
              <span className="sm:hidden">Academic / University</span>

              {/* Desktop */}
              <span className="hidden sm:inline">
                Academic / University Collaboration
              </span>
            </motion.button>
          </div>
        </div>

        {/* Decorative blobs (desktop only) */}
        <div className="hidden sm:block pointer-events-none absolute left-1/2 -translate-x-1/2 -z-10">
          <div className="absolute top-20 -right-[46rem] h-[22rem] w-[22rem] rounded-full bg-indigo-500/20 dark:bg-indigo-500/40 blur-3xl" />
        </div>
      </motion.div>
    </motion.main>
  );
}
