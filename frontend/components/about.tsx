"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useSectionInView } from "@/lib/hook";
import {
  Users,
  Target,
  Eye,
  HeartHandshake,
  Rocket,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/section-heading";

/* ---------------- ANIMATION VARIANTS ---------------- */

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.94,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

/* ---------------- CORE VALUES DATA ---------------- */

type CoreValue = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const coreValues: CoreValue[] = [
  {
    title: "Our Mission",
    description:
      "To build reliable, thoughtfully designed software that solves real problems for businesses and academic institutions alike.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "To grow into a trusted name in software development, known for quality, innovation, and long-term client partnerships.",
    icon: Eye,
  },
  {
    title: "Integrity & Trust",
    description:
      "We believe in honest communication, transparent processes, and delivering exactly what we promise, every time.",
    icon: HeartHandshake,
  },
  {
    title: "Innovation",
    description:
      "We stay curious and keep learning, applying modern tools and practices to build products that stand the test of time.",
    icon: Rocket,
  },
  {
    title: "Quality First",
    description:
      "Every product we ship is tested, refined, and held to a high standard before it ever reaches our clients.",
    icon: ShieldCheck,
  },
  {
    title: "Collaboration",
    description:
      "We work closely with our clients at every stage, treating their goals as our own throughout the project.",
    icon: Users,
  },
];

/* ---------------- COMPONENT ---------------- */

export default function About() {
  const { ref } = useSectionInView("About Us", 0.5);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="scroll-mt-10 max-w-7xl mx-auto px-4 sm:px-6 py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
    >
      {/* ---------- HEADER ---------- */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <div className="flex items-center justify-center gap-2 mb-4 text-blue-600 dark:text-blue-400">
          <Users className="w-5 h-5" />
          <span className="text-sm font-medium">Who We Are</span>
        </div>

        <SectionHeading>About DevPlux</SectionHeading>
      </div>

      {/* ---------- OUR STORY ---------- */}
      <div
        className="
          relative max-w-5xl mx-auto mb-24 rounded-3xl border border-gray-200/60
          dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden
        "
      >
        {/* Decorative gradient blobs */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-500/10 dark:bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-indigo-500/10 dark:bg-indigo-500/10 blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5">
          {/* ---- Left: Est. year panel ---- */}
          <div
            className="
              lg:col-span-2 flex flex-col justify-between
              p-8 sm:p-10 lg:border-r border-gray-200/60 dark:border-gray-800
            "
          >
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase">
                Est.
              </span>
              <div className="mt-2 text-6xl sm:text-7xl font-bold bg-gradient-to-br from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
                2025
              </div>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 max-w-xs">
                The year DevPlux IT Solutions began its journey.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-10 relative pl-6">
              <div className="absolute left-[7px] top-1 bottom-1 w-px bg-gradient-to-b from-blue-500/60 via-gray-300 dark:via-gray-700 to-transparent" />

              <div className="relative mb-6">
                <span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/15" />
                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                  2025 — Founded
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  DevPlux started as a small, focused team of developers.
                </div>
              </div>

              <div className="relative">
                <span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700 ring-4 ring-gray-200/60 dark:ring-gray-800" />
                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                  Today — Growing
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Building products for businesses and academia alike.
                </div>
              </div>
            </div>
          </div>

          {/* ---- Right: Narrative ---- */}
          <div className="lg:col-span-3 p-8 sm:p-10">
            <span className="text-xs font-semibold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase">
              Our Story
            </span>

            <p className="mt-4 text-lg sm:text-xl font-medium text-gray-900 dark:text-white leading-snug">
              Built on a simple idea: software should genuinely help the people
              who use it.
            </p>

            <div className="mt-5 space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                What started as a small group of developers working on academic
                and personal projects quickly grew into a company focused on
                delivering real, practical solutions for businesses and
                institutions.
              </p>
              <p>
                Since then, we&apos;ve worked on web applications, backend
                systems, and digital products across different industries,
                learning something new with every project. We combine
                engineering, design, and problem-solving to turn ideas into
                products that are reliable, scalable, and easy to use.
              </p>
              <p>
                Today, DevPlux continues to grow as a multidisciplinary team
                dedicated to quality craftsmanship, honest client relationships,
                and building technology that makes a lasting difference.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- MISSION / VALUES GRID ---------- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {coreValues.map((value, i) => {
          const Icon = value.icon;

          return (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.25 },
              }}
              className="
                group relative rounded-3xl border border-gray-200/60 dark:border-gray-800
                bg-white dark:bg-gray-900 p-6 overflow-hidden
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent" />
              </div>

              {/* Icon */}
              <div className="relative z-10 mb-4">
                <div
                  className="
                    w-14 h-14 rounded-2xl flex items-center justify-center
                    bg-blue-50 dark:bg-blue-950/40
                    text-blue-600 dark:text-blue-400
                    border border-gray-200 dark:border-gray-700
                    transition-transform duration-300 group-hover:scale-105
                  "
                >
                  <Icon className="w-6 h-6" />
                </div>
              </div>

              <h3 className="relative z-10 text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {value.title}
              </h3>

              <p className="relative z-10 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {value.description}
              </p>

              <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-300 group-hover:w-24 -translate-x-1/2" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
