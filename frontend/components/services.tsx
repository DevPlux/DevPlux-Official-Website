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
  Globe,
  Users,
  CheckCircle2,
  BriefcaseBusiness,
  Cog,
  Brain,
} from "lucide-react";

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
      className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-mt-28 relative"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="services"
    >
      {/* Subtle grid with faded edges – light & dark safe */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.12] dark:opacity-[0.18]"
          style={{
            backgroundImage: `
        linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
        linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
      `,
            backgroundSize: "60px 60px",

            /* IMPORTANT FIX */
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
          }}
        />
      </div>

      {/* Heading */}
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 -mb-4 mt-7 text-sm text-blue-600 dark:text-blue-400">
          <Brain className="w-4 h-4" />
          <span className="font-medium">What We Offer</span>
        </div>

        {/* Decorative blobs (desktop only) */}
        <div className="hidden sm:block pointer-events-none absolute left-1/2 -translate-x-1/2 -z-10">
          <div className="absolute -top-40 -left-[48rem] h-[32rem] w-[32rem] rounded-full bg-blue-500/20 dark:bg-blue-500/30 blur-3xl" />
        </div>

        <SectionHeading>Our Services</SectionHeading>
      </div>

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
                relative p-6 rounded-3xl border 
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
    </motion.section>
  );
}
