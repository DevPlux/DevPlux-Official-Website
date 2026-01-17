"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";
import {
  Code2,
  Palette,
  Smartphone,
  BookOpen,
  GraduationCap,
  FlaskConical,
  Database,
  Shield,
  Rocket,
  Zap,
  Cpu,
  Globe,
  Users,
  Briefcase,
  BriefcaseBusiness,
} from "lucide-react";
import { BsBag, BsSuitcase } from "react-icons/bs";

const services = [
  {
    title: "Custom Web Development",
    description:
      "Tailored web applications built with modern frameworks like React, Next.js, and Node.js for optimal performance and scalability.",
    icon: Code2,
    color: "blue",
    delay: 0.1,
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design solutions that combine aesthetics with functionality for seamless digital experiences.",
    icon: Palette,
    color: "purple",
    delay: 0.2,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications using React Native and Flutter for consistent performance across iOS and Android.",
    icon: Smartphone,
    color: "green",
    delay: 0.3,
  },
  {
    title: "Social Media Management",
    description:
      "Professional management of social media platforms including content planning, posting, engagement.",
    icon: Globe,
    color: "orange",
    delay: 0.4,
  },
  {
    title: "Database Management",
    description:
      "Efficient database design, optimization, and maintenance for reliable data storage and retrieval.",
    icon: Database,
    color: "pink",
    delay: 0.5,
  },
  {
    title: "Brand & Page Management",
    description:
      "End-to-end handling of business pages, brand consistency, profile optimization, and digital presence across social platforms.",
    icon: Users,
    color: "red",
    delay: 0.6,
  },
];

const colorClasses = {
  blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  purple:
    "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  green:
    "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  orange:
    "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  pink: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
  red: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
};

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

export default function Services() {
  const { ref } = useSectionInView("Services", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-mt-28 relative"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="services"
    >
      {/* Decorative background elements (DESKTOP ONLY) */}
      <div className="hidden sm:block absolute -top-20 -right-20 w-64 h-64 bg-blue-300/10 dark:bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="hidden sm:block absolute -bottom-20 -left-20 w-64 h-64 bg-purple-300/10 dark:bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

      <SectionHeading>Our Services</SectionHeading>

      {/* Services description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-16 max-w-3xl mx-auto"
      >
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          We provide comprehensive digital solutions tailored to your business
          needs
        </p>
        {/* Desktop layout */}
        <div className="hidden sm:flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <Rocket className="w-4 h-4 text-blue-500" />
            <span>Innovative Solutions</span>
          </div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span>Fast Delivery</span>
          </div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-500" />
            <span>Secure & Reliable</span>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="sm:hidden grid grid-cols-3 gap-4 mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-500/10">
              <Rocket className="w-5 h-5 text-blue-500" />
            </div>
            <span className="font-medium">Innovative</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-yellow-500/10">
              <Zap className="w-5 h-5 text-yellow-500" />
            </div>
            <span className="font-medium">Fast</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-green-500/10">
              <Shield className="w-5 h-5 text-green-500" />
            </div>
            <span className="font-medium">Secure</span>
          </div>
        </div>
      </motion.div>

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: service.delay,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="group relative"
            >
              {/* Card background with hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-100/50 dark:from-gray-800/30 dark:to-gray-900/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 -z-10"></div>

              {/* Main card */}
              <div
                className={`
                relative p-6 rounded-2xl border 
                bg-white/70 dark:bg-gray-800/70 
                backdrop-blur-sm
                border-gray-200/50 dark:border-gray-700/50
                hover:border-gray-300 dark:hover:border-gray-600
                transition-all duration-300
                group-hover:shadow-xl group-hover:shadow-blue-500/5 dark:group-hover:shadow-blue-500/10
                h-full
              `}
              >
                {/* Icon container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`
                    w-14 h-14 rounded-xl 
                    ${colorClasses[service.color as keyof typeof colorClasses]}
                    flex items-center justify-center
                    mb-5 mx-auto
                    border
                  `}
                >
                  <IconComponent className="w-7 h-7" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div
                  className="
                  absolute bottom-0 left-1/2 transform -translate-x-1/2
                  w-0 group-hover:w-16 h-0.5
                  bg-gradient-to-r from-transparent via-blue-500 to-transparent
                  transition-all duration-300
                "
                ></div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Section Divider */}
      <div className="my-14 flex items-center justify-center">
        <div className="h-px w-full max-w-xl bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />
      </div>

      {/* University Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-left"
      >
        {/* Heading */}
        <div className="max-w-2xl mb-14 mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-blue-600 dark:text-blue-400">
            <GraduationCap className="w-4 h-4" />
            <span className="font-medium">Academic & Research</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            University Projects
          </h2>

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
                className="group relative rounded-2xl border border-gray-200/70 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 overflow-hidden"
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
        className="mt-24 p-8 sm:p-10 rounded-2xl
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
      </motion.div>
    </motion.section>
  );
}
