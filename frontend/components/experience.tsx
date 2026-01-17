"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useSectionInView } from "@/lib/hook";
import SectionHeading from "@/components/section-heading";
import Link from "next/link";
import {
  BriefcaseBusiness,
  GraduationCap,
  FlaskConical,
  Code2,
  Smartphone,
  Database,
  Cpu,
  GitBranch,
  Figma,
  Globe,
  Rocket,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import ReactLogo from "@/app/images/tools/React.png";
import NextDarkLogo from "@/app/images/tools/Next.js.png";
import NextLightLogo from "@/app/images/tools/NextWhite.png";
import NodeLogo from "@/app/images/tools/Node Js.png";
import MongoLogo from "@/app/images/tools/MongoDB.png";
import PythonLogo from "@/app/images/tools/Python.png";
import GitLogo from "@/app/images/tools/GitHub.png";
import FigmaLogo from "@/app/images/tools/Figma.png";
import FlutterLogo from "@/app/images/tools/Flutter.png";
import MySQLLogo from "@/app/images/tools/MySQL Logo.png";
import DockerLogo from "@/app/images/tools/Docker.png";
import PHPLogo from "@/app/images/tools/PHP.png";
import PringBootLogo from "@/app/images/tools/Spring.png";
import KotlinLogo from "@/app/images/tools/Kotlin.png";
import DotnetLogo from "@/app/images/tools/NET core.png";
import FirebaseLogo from "@/app/images/tools/Firebase.png";

type AcademicItem = {
  title: string;
  type: "Final Year Research" | "University Project" | "Assignments";
  description: string;
  highlights: string[];
  stack: string[];
};

const academicWork: AcademicItem[] = [
  {
    title: "Final Year Research Project",
    type: "Final Year Research",
    description:
      "A research-driven system focused on applying artificial intelligence and data-driven techniques to solve a real-world industrial problem with real-time analysis.",
    highlights: [
      "Experimentation and evaluation of multiple models and approaches.",
      "End-to-end system pipeline from data collection to visualization.",
      "Academic-level documentation, analysis, and formal result reporting.",
    ],
    stack: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Analysis",
      "System Design",
    ],
  },

  {
    title: "Full-Stack University Projects",
    type: "University Project",
    description:
      "Individual and group projects covering full-stack web apps, mobile apps, and applied system design.",
    highlights: [
      "Authentication, role-based dashboards, CRUD workflows.",
      "Clean architecture + reusable UI components.",
      "Testing and project documentation aligned with SE standards.",
    ],
    stack: ["React", "Next.js", ".NET", "Node.js", "MongoDB", "Tailwind"],
  },
  {
    title: "Assignments & Coursework Builds",
    type: "Assignments",
    description:
      "Coursework assignments focused on problem-solving, SE principles, system design, and technical writing.",
    highlights: [
      "Requirement analysis and structured documentation.",
      "Design diagrams (DFD/UML) + clean implementation.",
      "Presentation-ready reports and demos.",
    ],
    stack: ["Git", "Docs", "UML/DFD", "Programming Fundamentals"],
  },
];

type ClientWorkItem = {
  title: string;
  description: string;
  points: string[];
  tags: string[];
};

const startupAndClientWork: ClientWorkItem[] = [
  {
    title: "Startup / Client Websites & Dashboards",
    description:
      "Modern responsive websites, admin dashboards, and business systems tailored for small and mid-size teams.",
    points: [
      "Clean UI/UX and mobile-first layouts.",
      "Fast delivery with scalable code structure.",
      "Deployment-ready with best practices.",
    ],
    tags: ["Web Apps", "Dashboards", "UI/UX", "Deployment"],
  },
  {
    title: "Social Media & Brand Presence Support",
    description:
      "Helping brands stay consistent online through profile optimization, posting support, and engagement planning.",
    points: [
      "Brand consistency (colors, tone, design templates).",
      "Content scheduling and engagement guidance.",
      "Platform profile setup and optimization.",
    ],
    tags: ["Branding", "Pages", "Content", "Social Media"],
  },
];

type ToolItem = {
  name: string;
  logo: StaticImageData;
};

const tools: ToolItem[] = [
  { name: "React", logo: ReactLogo },
  { name: "Next.js", logo: NextDarkLogo },
  { name: "Node.js", logo: NodeLogo },
  { name: "MongoDB", logo: MongoLogo },
  { name: "Python", logo: PythonLogo },
  { name: "Flutter", logo: FlutterLogo },
  { name: "Git", logo: GitLogo },
  { name: "MySQL", logo: MySQLLogo },
  { name: "Figma", logo: FigmaLogo },
  { name: "Docker", logo: DockerLogo },
  { name: "PHP", logo: PHPLogo },
  { name: "Spring Boot", logo: PringBootLogo },
  { name: "Kotlin", logo: KotlinLogo },
  { name: ".NET", logo: DotnetLogo },
  { name: "Firebase", logo: FirebaseLogo },
];

const highlights = [
  { label: "Industry + Academic Blend", value: "Strong" },
  { label: "University + Client Projects", value: "10+" },
  { label: "Agile Team Workflow", value: "Yes" },
  { label: "Research & Experimentation", value: "Yes" },
];

/* ------------------------ ANIMATIONS ------------------------ */

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 130, damping: 18 },
  },
};

const softFade: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* -------------------------- UI BITS -------------------------- */

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-500/60 dark:border-indigo-300/60 bg-blue-100 dark:bg-blue-500/40 px-3 py-1 text-xs text-gray-700 dark:text-gray-200">
      {children}
    </span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

/* -------------------------- COMPONENT -------------------------- */

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <motion.section
      ref={ref}
      id="experience"
      className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 py-10 overflow-x-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
    >
      {/* Decorative blobs (desktop only) */}
      <div className="hidden sm:block pointer-events-none absolute left-1/2 -translate-x-1/2 -z-10">
        <div className="absolute -top-40 -left-[50rem] h-[32rem] w-[32rem] rounded-full bg-blue-500/20 dark:bg-blue-500/50 blur-3xl" />
        <div className="absolute -top-20 -right-[48rem] h-[22rem] w-[22rem] rounded-full bg-indigo-500/20 dark:bg-indigo-500/60 blur-3xl" />
      </div>

      {/* HERO */}
      <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400">
          <Rocket className="w-5 h-5" />
          <span className="text-sm font-medium">Experience & Work</span>
        </div>

        <SectionHeading>Experience</SectionHeading>

        <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          Hands-on industry experience combined with university projects and
          research-driven development — built for real outcomes.
        </p>

        {/* mini tags */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Tag>Industry</Tag>
          <Tag>University Projects</Tag>
          <Tag>Research</Tag>
          <Tag>Startup / Client Work</Tag>
        </div>
      </motion.div>

      {/* HIGHLIGHTS */}
      <motion.div
        variants={softFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5"
      >
        {highlights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: i * 0.08,
              duration: 0.5,
              type: "spring",
              stiffness: 120,
              damping: 16,
            }}
            whileHover={{
              y: -6,
              scale: 1.03,
              transition: { duration: 0.25 },
            }}
            className="
        group relative overflow-hidden
        rounded-2xl border border-gray-200/60 dark:border-gray-800
        bg-white/70 dark:bg-gray-900/70
        backdrop-blur-md
        p-5 text-left
        transition-all
      "
          >
            {/* subtle glow on hover */}
            <div
              className="
        pointer-events-none absolute inset-0 opacity-0
        group-hover:opacity-100 transition duration-300
      "
            >
              <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent" />
            </div>

            {/* label */}
            <p className="relative z-10 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
              {h.label}
            </p>

            {/* value */}
            <p className="relative z-10 mt-2 text-lg font-semibold text-gray-900 dark:text-white">
              {h.value}
            </p>

            {/* bottom accent */}
            <div
              className="
        absolute bottom-0 left-1/2 h-0.5 w-0
        bg-gradient-to-r from-transparent via-blue-500 to-transparent
        transition-all duration-300
        group-hover:w-16 -translate-x-1/2
      "
            />
          </motion.div>
        ))}
      </motion.div>

      {/* DIVIDER */}
      <div className="my-16 flex items-center justify-center">
        <div className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />
      </div>

      {/* ACADEMIC SECTION */}
      <motion.div variants={fadeUp}>
        <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
          <GraduationCap className="w-5 sm:w-8  h-5 sm:h-8 " />
          <h3 className="sm:text-3xl text-xl font-semibold">
            University & Academic Work
          </h3>
        </div>

        <p className="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Academic projects, assignments, and research-focused builds that
          sharpen real-world engineering skills — from system design to
          experimentation and documentation.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {academicWork.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="group relative rounded-3xl border border-gray-200/60 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm p-6 text-left overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent" />
              </div>

              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-blue-700 dark:text-blue-300 font-medium">
                    {item.type}
                  </p>
                  <h4 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                </div>

                <div className="shrink-0 rounded-xl bg-blue-500/10 text-blue-700 dark:text-blue-300 p-2">
                  {item.type === "Final Year Research" ? (
                    <FlaskConical className="w-5 h-5" />
                  ) : item.type === "University Project" ? (
                    <Code2 className="w-5 h-5" />
                  ) : (
                    <Database className="w-5 h-5" />
                  )}
                </div>
              </div>

              <p className="relative z-10 mt-4 text-sm font-medium text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>

              <ul className="relative z-10 mt-4 space-y-2">
                {item.highlights.map((h, hi) => (
                  <li
                    key={hi}
                    className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex gap-2"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="relative z-10 mt-5 flex flex-wrap gap-2">
                {item.stack.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>

              <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-300 group-hover:w-24 -translate-x-1/2" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* STARTUP / CLIENT WORK */}
      <motion.div variants={fadeUp} className="mt-20">
        <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
          <Rocket className="w-5 sm:w-8 h-5 sm:h-8" />
          <h3 className="sm:text-3xl text-xl font-semibold">
            Startup & Client Work
          </h3>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {startupAndClientWork.map((w, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="group rounded-3xl border border-gray-200/60 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm p-6 text-left"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {w.title}
              </h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {w.description}
              </p>

              <ul className="mt-4 space-y-2">
                {w.points.map((p, pi) => (
                  <li
                    key={pi}
                    className="flex gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {w.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* TOOLS & TECHNOLOGIES */}
      <motion.div variants={fadeUp} className="mt-20">
        <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
          <Cpu className="w-5 h-5 sm:w-8 sm:h-8" />
          <h3 className="text-xl sm:text-3xl font-semibold">
            Tools & Technologies
          </h3>
        </div>

        <p className="mt-3 text-center text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Technologies and tools we actively use across industry projects,
          academic work, and client solutions.
        </p>

        <motion.div
          variants={container}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6"
        >
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              variants={softFade}
              whileHover={{
                y: -6,
                scale: 1.05,
              }}
              transition={{ duration: 0.25 }}
              className="
          group flex flex-col items-center justify-center
          rounded-3xl border border-gray-200/60 dark:border-gray-800
          bg-white/70 dark:bg-gray-900/60
          backdrop-blur-sm p-5
        "
            >
              {/* Logo */}
              <div
                className="
            relative h-14 w-14 flex items-center justify-center
            transition-transform duration-300
            group-hover:scale-110
          "
              >
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Name */}
              <p className="mt-3 text-sm font-medium text-gray-800 dark:text-gray-200 text-center">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={fadeUp}
        className="mt-20 rounded-2xl border border-gray-200/60 dark:border-gray-800 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent dark:from-blue-500/5 dark:via-indigo-500/20 dark:to-transparent p-8 sm:p-10 text-center backdrop-blur-sm"
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Let’s build something meaningful together
        </h3>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Whether it’s a business solution, digital brand presence, or an
          academic collaboration — we’re ready.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-500/30"
          >
            <BriefcaseBusiness className="w-5 h-5" />
            Start a Business
            <ArrowRight className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition" />
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white/70 dark:bg-gray-900/70 border border-gray-300/50 dark:border-gray-700/50 px-7 py-3 text-gray-900 dark:text-gray-100 font-medium transition-all hover:bg-white dark:hover:bg-gray-900"
          >
            <GraduationCap className="w-5 h-5" />
            <span className="sm:hidden">Academic / University</span>
            <span className="hidden sm:inline">
              Academic / University Collaboration
            </span>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}
