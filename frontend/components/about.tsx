"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useSectionInView } from "@/lib/hook";
import Image, { StaticImageData } from "next/image";
import {
  Github,
  Linkedin,
  Facebook,
  Users,
  Code,
  Palette,
  Cpu,
  Database,
} from "lucide-react";
import SectionHeading from "@/components/section-heading";

import JaninduProfile from "@/app/images/team_profiles/Janindu.jpg";
import ChanukaProfile from "@/app/images/team_profiles/Chanuka.jpeg";
import LakinduProfile from "@/app/images/team_profiles/Lakindu.png";
import HarshaProfile from "@/app/images/team_profiles/Harsha.jpeg";
import SajithProfile from "@/app/images/team_profiles/Sajith.png";

type SocialLinks = {
  github?: string;
  linkedin?: string;
  facebook?: string;
};

type TeamMember = {
  name: string;
  role: string;
  description: string;
  icon: React.ElementType;
  image: StaticImageData;
  links: SocialLinks;
};

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

/* ---------------- TEAM DATA ---------------- */

const teamMembers: TeamMember[] = [
  {
    name: "Janindu Chamod",
    role: "Full-Stack Engineer, UI/UX Designer, Project Manager",
    description:
      "Leads full-stack development, system architecture, UI/UX design, and project coordination to deliver scalable and user-focused solutions.",
    image: JaninduProfile,
    icon: Code,
    links: {
      github: "https://github.com/Janinduchamod2001425",
      linkedin: "https://www.linkedin.com/in/janinduchamod/",
    },
  },
  {
    name: "Lakindu Udara",
    role: "Frontend Developer, QA Engineer, Marketing Manager",
    description:
      "Contributes to frontend development, quality assurance, and digital marketing to ensure usability, reliability, and strong product visibility.",
    image: LakinduProfile,
    icon: Cpu,
    links: {
      github: "https://github.com/Lakindu02",
      linkedin: "https://www.linkedin.com/in/lakindu-vithanage/",
    },
  },
  {
    name: "Chanuka Lakshan",
    role: "Full Stack Developer, Backend Specialist",
    description:
      "Specializes in backend development and full-stack solutions, focusing on system performance, APIs, and scalable application architecture.",
    image: ChanukaProfile,
    icon: Database,
    links: {
      github: "https://github.com/ChanukaIT22560544",
      linkedin: "https://www.linkedin.com/in/chanuka-lakshan-67286b301/",
    },
  },
  {
    name: "Harsha Chathuranga",
    role: "QA Engineer, Content Writer",
    description:
      "Ensures software quality through testing and contributes clear, engaging content to support product communication and documentation.",
    image: HarshaProfile,
    icon: Palette,
    links: {
      github: "https://github.com/kariyawasam064",
      linkedin: "https://www.linkedin.com/in/harsha-chathuranga-29254530a",
    },
  },
  {
    name: "Sajith Dahanayake",
    role: "Full Stack Developer, Social Media Manager",
    description:
      "Develops full-stack application features while managing social media presence to strengthen product reach and brand engagement.",
    image: SajithProfile,
    icon: Users,
    links: {
      github: "https://github.com/SajithDahanayake",
      linkedin: "https://www.linkedin.com/in/sajith-dahanayake",
    },
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
      <div className="max-w-3xl mx-auto text-center mb-20">
        <div className="flex items-center justify-center gap-2 mb-4 text-blue-600 dark:text-blue-400">
          <Users className="w-5 h-5" />
          <span className="text-sm font-medium">Who We Are</span>
        </div>

        <SectionHeading>Our Team & Company</SectionHeading>

        <p className="mt-5 text-gray-600 dark:text-gray-400 leading-relaxed">
          DevPlux is a multidisciplinary team combining engineering, design,
          research, and innovation to build meaningful digital products for
          businesses and academia.
        </p>
      </div>

      {/* ---------- TEAM GRID ---------- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8"
      >
        {teamMembers.map((member, i) => {
          const Icon = member.icon;

          // for 5 cards: row1(3) row2(2 centered)
          const startClass = i === 3 ? "lg:col-start-2" : "";

          return (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.25 },
              }}
              className={`
              group relative rounded-3xl border border-gray-200/60 dark:border-gray-800
              bg-white dark:bg-gray-900 p-6 overflow-hidden
              lg:col-span-2
              ${startClass}
            `}
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent" />
              </div>

              {/* Avatar */}
              <div className="relative z-10 mb-4 flex items-start gap-4">
                <div
                  className="
                    relative
                    w-[110px] h-[110px]
                    rounded-2xl overflow-hidden
                    border border-gray-200 dark:border-gray-700
                  "
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="110px"
                    className="
                      object-cover
                      transition-transform duration-300
                      group-hover:scale-105
                    "
                    priority={i === 0}
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white break-words">
                    {member.name}
                  </h3>
                  <div className="flex flex-col gap-1 mt-1">
                    {member.role.split(",").map((role, index) => (
                      <span
                        key={index}
                        className="
                          text-sm text-indigo-800 dark:text-blue-300
                            rounded-md
                          whitespace-nowrap
                        "
                      >
                        {role.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="relative z-10 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {member.description}
              </p>

              <div className="relative z-10 mt-5 flex gap-4">
                {member.links.github && (
                  <a
                    href={member.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}

                {member.links.linkedin && (
                  <a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}

                {member.links.facebook && (
                  <a
                    href={member.links.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-sky-500 transition"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                )}
              </div>

              <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-300 group-hover:w-24 -translate-x-1/2" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
