"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";

import {
  Code2,
  Palette,
  Smartphone,
  Database,
  Shield,
  Rocket,
  Zap,
  Globe,
  Users,
  Brain,
  Cog,
  Cpu,
  Wifi,
  Activity,
  CircuitBoard,
  Bot,
  Network,
  RadioTower,
  FlaskConical,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

/* =========================================================
   EXISTING SERVICES
========================================================= */

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

/* =========================================================
   NEW IOT / AI SERVICE DATA
========================================================= */

const intelligentServices: {
  title: string;
  icon: LucideIcon;
}[] = [
  {
    title: "IoT Solutions",
    icon: Wifi,
  },
  {
    title: "AI & ML Automation",
    icon: Brain,
  },
  {
    title: "Research & Prototyping",
    icon: FlaskConical,
  },
  {
    title: "Smart Monitoring",
    icon: Activity,
  },
  {
    title: "Industrial Automation",
    icon: Cog,
  },
  {
    title: "Intelligent Control",
    icon: Bot,
  },
];

const devices: {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Raspberry Pi",
    subtitle: "Edge Computing",
    icon: CircuitBoard,
  },
  {
    title: "ESP32",
    subtitle: "IoT Controller",
    icon: Cpu,
  },
  {
    title: "Smart Sensors",
    subtitle: "Real-Time Data",
    icon: RadioTower,
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Services() {
  const { ref } = useSectionInView("Services", 0.5);

  return (
    <motion.section
      ref={ref}
      id="services"
      className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-mt-28 relative"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.12] dark:opacity-[0.18]"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
              linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",

            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",

            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
          }}
        />
      </div>

      {/* =====================================================
          HEADING
      ===================================================== */}

      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 sm:-mb-4 mb-5 sm:mt-7 text-sm text-blue-600 dark:text-blue-400">
          <Brain className="w-4 h-4" />

          <span className="font-medium">What We Offer</span>
        </div>

        {/* Decorative glow */}
        <div className="hidden sm:block pointer-events-none absolute left-1/2 -translate-x-1/2 -z-10">
          <div className="absolute -top-40 -left-[48rem] h-[32rem] w-[32rem] rounded-full bg-blue-500/20 dark:bg-blue-500/30 blur-3xl" />
        </div>

        <SectionHeading>Our Services</SectionHeading>
      </div>

      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-12 max-w-3xl mx-auto"
      >
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          From digital products to intelligent connected systems — we build
          technology for the next generation.
        </p>

        {/* Desktop */}
        <div className="hidden sm:flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <Rocket className="w-4 h-4 text-blue-500" />
            <span>Innovative Solutions</span>
          </div>

          <div className="w-1 h-1 bg-gray-400 rounded-full" />

          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span>Fast Delivery</span>
          </div>

          <div className="w-1 h-1 bg-gray-400 rounded-full" />

          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-500" />
            <span>Secure & Reliable</span>
          </div>
        </div>

        {/* Mobile */}
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

      {/* =====================================================
      NEW FEATURED IOT / AI SERVICE
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 70,
          damping: 18,
        }}
        whileHover={{
          y: -6,
          scale: 1.005,
        }}
        className="relative mb-12 group perspective-[1200px]"
      >
        {/* =====================================================
        OUTER GLOW
        ===================================================== */}

        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.01, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
      absolute
      -inset-[2px]
      rounded-[2rem]
      bg-gradient-to-r
      from-blue-500/60
      via-cyan-400/50
      to-violet-500/60
      blur-xl
      opacity-30
    "
        />

        {/* =====================================================
             MAIN CARD
             ===================================================== */}

        <motion.div
          whileHover={{
            rotateX: 1,
            rotateY: -1,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 14,
          }}
          className="
      relative
      overflow-hidden
      rounded-[2rem]
      border
      border-blue-200/70
      dark:border-blue-500/20
      bg-white/90
      dark:bg-gray-900/80
      backdrop-blur-xl
      shadow-2xl
      shadow-blue-500/10
      dark:shadow-blue-500/10
    "
        >
          {/* =====================================================
        ANIMATED BACKGROUND BLOBS
    ===================================================== */}

          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, 30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
        pointer-events-none
        absolute
        -top-32
        -right-20
        w-96
        h-96
        rounded-full
        bg-blue-500/15
        dark:bg-blue-500/20
        blur-3xl
      "
          />

          <motion.div
            animate={{
              x: [0, -50, 0],
              y: [0, -35, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
        pointer-events-none
        absolute
        -bottom-40
        -left-20
        w-96
        h-96
        rounded-full
        bg-violet-500/15
        dark:bg-violet-500/20
        blur-3xl
      "
          />

          {/* =====================================================
        MOVING GRADIENT SWEEP
    ===================================================== */}

          <motion.div
            animate={{
              x: ["-120%", "120%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 1,
            }}
            className="
        pointer-events-none
        absolute
        top-0
        bottom-0
        w-[30%]
        rotate-12
        bg-gradient-to-r
        from-transparent
        via-white/10
        to-transparent
        blur-2xl
      "
          />

          {/* =====================================================
        TECHNOLOGY GRID
    ===================================================== */}

          <motion.div
            animate={{
              backgroundPosition: ["0px 0px", "32px 32px"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.035]
        dark:opacity-[0.07]
      "
            style={{
              backgroundImage: `
          linear-gradient(to right, currentColor 1px, transparent 1px),
          linear-gradient(to bottom, currentColor 1px, transparent 1px)
        `,
              backgroundSize: "32px 32px",
            }}
          />

          {/* =====================================================
        PARTICLES
    ===================================================== */}

          {[...Array(8)].map((_, index) => (
            <motion.span
              key={index}
              className="
          absolute
          w-1.5
          h-1.5
          rounded-full
          bg-blue-500/60
          shadow-lg
          shadow-blue-500/50
        "
              style={{
                left: `${10 + index * 11}%`,
                top: `${20 + (index % 4) * 18}%`,
              }}
              animate={{
                y: [0, -14, 0],
                opacity: [0.2, 1, 0.2],
                scale: [0.7, 1.3, 0.7],
              }}
              transition={{
                duration: 2.5 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.25,
              }}
            />
          ))}

          {/* =====================================================
        NEW BADGE
    ===================================================== */}

          <div className="absolute top-5 right-5 sm:top-7 sm:right-7 z-20">
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                rotate: [0, 360],
                boxShadow: [
                  "0 0 0px rgba(59,130,246,0)",
                  "0 0 30px rgba(59,130,246,0.45)",
                  "0 0 0px rgba(59,130,246,0)",
                ],
              }}
              transition={{
                scale: {
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                },
                boxShadow: {
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
      relative
      w-14
      h-14
      sm:w-16
      sm:h-16
      rounded-full
      flex
      items-center
      justify-center
      border
      border-blue-500/30
      bg-blue-500/10
      dark:bg-blue-500/10
      backdrop-blur-md
    "
            >
              {/* Outer rotating ring */}
              <div
                className="
        absolute
        inset-1
        rounded-full
        border
        border-dashed
        border-blue-500/40
      "
              />

              {/* Inner glow circle */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
        absolute
        w-7
        h-7
        sm:w-8
        sm:h-8
        rounded-full
        bg-gradient-to-br
        from-blue-500
        via-cyan-400
        to-violet-500
        shadow-lg
        shadow-blue-500/40
      "
              />

              {/* Bot Face */}
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  rotate: [0, 4, -4, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
    relative
    z-10
    w-8
    h-8
    sm:w-9
    sm:h-9
    rounded-full
    flex
    items-center
    justify-center
    bg-white
    dark:bg-gray-900
    shadow-lg
    shadow-blue-500/20
  "
              >
                <Bot
                  className="
      w-5
      h-5
      sm:w-6
      sm:h-6
      text-blue-600
      dark:text-cyan-400
    "
                />
              </motion.div>
            </motion.div>
          </div>

          {/* =====================================================
        MAIN CONTENT
    ===================================================== */}

          <div
            className="
        relative
        z-10
        grid
        lg:grid-cols-[1.15fr_0.85fr]
        gap-8
        lg:gap-12
        p-6
        sm:p-8
        lg:p-10
        xl:p-12
      "
          >
            {/* =================================================
          LEFT CONTENT
      ================================================= */}

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              className="text-left"
            >
              {/* Category */}

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -25,
                  },
                  show: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
            inline-flex
            items-center
            gap-2
            mb-5
            px-3
            py-1.5
            rounded-full
            bg-cyan-500/10
            border
            border-cyan-500/20
            text-cyan-700
            dark:text-cyan-400
            text-xs
            sm:text-sm
            font-semibold
          "
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Network className="w-4 h-4" />
                </motion.div>
                IoT • AI • AUTOMATION
              </motion.div>

              {/* Title */}

              <motion.h3
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.55,
                }}
                className="
            text-3xl
            sm:text-4xl
            lg:text-[2.7rem]
            lg:leading-[1.1]
            font-bold
            tracking-tight
            text-gray-900
            dark:text-white
            mb-5
            max-w-2xl
          "
              >
                IoT, AI & Intelligent{" "}
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
              bg-gradient-to-r
              from-blue-600
              via-cyan-500
              to-violet-600
              bg-[length:200%_200%]
              bg-clip-text
              text-transparent
            "
                >
                  Automation
                </motion.span>
              </motion.h3>

              {/* Description */}

              <motion.p
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.55,
                }}
                className="
            text-base
            sm:text-lg
            leading-relaxed
            text-gray-600
            dark:text-gray-300
            mb-7
            max-w-2xl
          "
              >
                We design and implement intelligent connected systems that
                combine IoT hardware, real-time sensor data, AI, machine
                learning and automation to solve modern business, industrial and
                research challenges.
              </motion.p>

              {/* Service items */}

              <motion.div
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
                className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-3
            mb-8
          "
              >
                {intelligentServices.map((item) => {
                  const ItemIcon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 20,
                          scale: 0.96,
                        },
                        show: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        },
                      }}
                      whileHover={{
                        scale: 1.03,
                        x: 4,
                        borderColor: "rgba(59,130,246,0.4)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 18,
                      }}
                      className="
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-xl
                  border
                  border-gray-200/70
                  dark:border-gray-700/60
                  bg-white/60
                  dark:bg-gray-800/40
                  cursor-default
                "
                    >
                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.12,
                        }}
                        className="
                    w-9
                    h-9
                    shrink-0
                    rounded-lg
                    flex
                    items-center
                    justify-center
                    bg-blue-500/10
                    text-blue-600
                    dark:text-blue-400
                  "
                      >
                        <ItemIcon className="w-4 h-4" />
                      </motion.div>

                      <span
                        className="
                    text-sm
                    font-medium
                    text-gray-700
                    dark:text-gray-200
                  "
                      >
                        {item.title}
                      </span>

                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.3,
                          type: "spring",
                        }}
                        className="ml-auto"
                      >
                        <CheckCircle2
                          className="
                      w-4
                      h-4
                      text-emerald-500
                      opacity-80
                    "
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Technologies */}

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
              >
                <p
                  className="
              text-xs
              uppercase
              tracking-[0.2em]
              font-semibold
              text-gray-400
              dark:text-gray-500
              mb-3
            "
                >
                  Technologies & Platforms
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Raspberry Pi",
                    "ESP32",
                    "Sensors",
                    "Computer Vision",
                    "AI / ML",
                    "Cloud",
                    "Edge Computing",
                  ].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{
                        opacity: 0,
                        y: 10,
                        scale: 0.9,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.5 + index * 0.07,
                        type: "spring",
                      }}
                      whileHover={{
                        y: -3,
                        scale: 1.05,
                      }}
                      className="
                  px-3
                  py-1.5
                  rounded-lg
                  bg-gray-100/80
                  dark:bg-gray-800
                  border
                  border-gray-200
                  dark:border-gray-700
                  text-xs
                  font-medium
                  text-gray-600
                  dark:text-gray-300
                  cursor-default
                "
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* =================================================
          RIGHT DEVICE VISUAL
      ================================================= */}

            <div
              className="
          relative
          flex
          items-center
          justify-center
          min-h-[390px]
          lg:min-h-[450px]
        "
            >
              {/* Orbit outer */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
            absolute
            w-72
            h-72
            sm:w-80
            sm:h-80
            rounded-full
            border
            border-dashed
            border-blue-400/25
          "
              />

              {/* Orbit inner */}

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
            absolute
            w-56
            h-56
            sm:w-64
            sm:h-64
            rounded-full
            border
            border-dashed
            border-cyan-400/25
          "
              />

              {/* =================================================
            CONNECTION LINES
        ================================================= */}

              <motion.div
                animate={{
                  opacity: [0.15, 0.7, 0.15],
                  scaleX: [0.95, 1, 0.95],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="
            absolute
            top-[28%]
            left-1/2
            -translate-x-1/2
            w-[2px]
            h-[90px]
            bg-gradient-to-b
            from-blue-500/70
            to-transparent
          "
              />

              <motion.div
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                }}
                className="
            absolute
            left-[24%]
            bottom-[31%]
            w-[95px]
            h-[2px]
            rotate-[35deg]
            origin-left
            bg-gradient-to-r
            from-cyan-500/70
            to-transparent
          "
              />

              <motion.div
                animate={{
                  opacity: [0.8, 0.2, 0.8],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                }}
                className="
            absolute
            right-[24%]
            bottom-[31%]
            w-[95px]
            h-[2px]
            -rotate-[35deg]
            origin-right
            bg-gradient-to-l
            from-violet-500/70
            to-transparent
          "
              />

              {/* =================================================
            AI CORE
        ================================================= */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 1.5, -1.5, 0],
                  boxShadow: [
                    "0 20px 50px rgba(59,130,246,0.25)",
                    "0 20px 65px rgba(6,182,212,0.45)",
                    "0 20px 50px rgba(139,92,246,0.3)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: 3,
                }}
                className="
            absolute
            z-20
            w-28
            h-28
            sm:w-32
            sm:h-32
            rounded-[2rem]
            flex
            flex-col
            items-center
            justify-center
            bg-gradient-to-br
            from-blue-600
            via-cyan-500
            to-violet-600
            text-white
          "
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Brain className="w-10 h-10 sm:w-12 sm:h-12 mb-2" />
                </motion.div>

                <motion.span
                  animate={{
                    opacity: [0.75, 1, 0.75],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                  }}
                  className="text-xs font-semibold tracking-wider"
                >
                  AI CORE
                </motion.span>
              </motion.div>

              {/* =================================================
            DEVICE 1 - RASPBERRY PI
        ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: -30,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -9, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  opacity: { duration: 0.6 },
                  scale: { duration: 0.6 },
                  y: {
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                }}
                className="
            absolute
            top-2
            left-1/2
            -translate-x-1/2
            z-20
          "
              >
                <DeviceCard
                  title={devices[0].title}
                  subtitle={devices[0].subtitle}
                  icon={devices[0].icon}
                />
              </motion.div>

              {/* =================================================
            DEVICE 2 - ESP32
        ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -35,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                animate={{
                  x: [0, 7, 0],
                  y: [0, -4, 0],
                }}
                transition={{
                  x: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: -2,
                }}
                className="
            absolute
            left-0
            sm:left-2
            bottom-12
            z-20
          "
              >
                <DeviceCard
                  title={devices[1].title}
                  subtitle={devices[1].subtitle}
                  icon={devices[1].icon}
                />
              </motion.div>

              {/* =================================================
            DEVICE 3 - SENSORS
        ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 35,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                animate={{
                  x: [0, -7, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  x: {
                    duration: 4.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  y: {
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                }}
                className="
            absolute
            right-0
            sm:right-2
            bottom-12
            z-20
          "
              >
                <DeviceCard
                  title={devices[2].title}
                  subtitle={devices[2].subtitle}
                  icon={devices[2].icon}
                />
              </motion.div>

              {/* =================================================
            DATA PULSES
        ================================================= */}

              <motion.div
                animate={{
                  y: [0, -70],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="
            absolute
            left-1/2
            bottom-[47%]
            w-2
            h-2
            rounded-full
            bg-blue-500
            shadow-lg
            shadow-blue-500/70
          "
              />

              <motion.div
                animate={{
                  x: [0, 75],
                  y: [0, -38],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5,
                }}
                className="
            absolute
            left-[28%]
            bottom-[29%]
            w-2
            h-2
            rounded-full
            bg-cyan-500
            shadow-lg
            shadow-cyan-500/70
          "
              />

              <motion.div
                animate={{
                  x: [0, -75],
                  y: [0, -38],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 1,
                }}
                className="
            absolute
            right-[28%]
            bottom-[29%]
            w-2
            h-2
            rounded-full
            bg-violet-500
            shadow-lg
            shadow-violet-500/70
          "
              />

              {/* =================================================
            CONNECTED STATUS
        ================================================= */}

              <motion.div
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            flex
            items-center
            gap-2
            whitespace-nowrap
            px-4
            py-2
            rounded-full
            border
            border-emerald-500/20
            bg-emerald-500/10
            text-emerald-600
            dark:text-emerald-400
            text-xs
            font-medium
          "
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="
                animate-ping
                absolute
                inline-flex
                h-full
                w-full
                rounded-full
                bg-emerald-500
                opacity-75
              "
                  />

                  <span
                    className="
                relative
                inline-flex
                rounded-full
                h-2
                w-2
                bg-emerald-500
              "
                  />
                </span>
                Intelligent Systems Connected
              </motion.div>
            </div>
          </div>

          {/* =====================================================
        BOTTOM ANIMATED LINE
    ===================================================== */}

          <motion.div
            animate={{
              opacity: [0.3, 1, 0.3],
              scaleX: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
        absolute
        bottom-0
        left-[10%]
        right-[10%]
        h-[2px]
        bg-gradient-to-r
        from-transparent
        via-blue-500
        to-transparent
      "
          />
        </motion.div>
      </motion.div>

      {/* =====================================================
          EXISTING SERVICES GRID
      ===================================================== */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const IconComponent = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: service.delay,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.2,
                },
              }}
              className="group relative"
            >
              {/* Background */}

              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-100/50 dark:from-gray-800/30 dark:to-gray-900/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 -z-10" />

              {/* Card */}

              <div className="relative p-6 rounded-3xl border bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/5 dark:group-hover:shadow-blue-500/10 h-full">
                {/* Icon */}

                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className={`
                    w-14
                    h-14
                    rounded-xl
                    ${colorClasses[service.color as keyof typeof colorClasses]}
                    flex
                    items-center
                    justify-center
                    mb-5
                    mx-auto
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

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-300" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <div className="my-14 flex items-center justify-center">
        <div className="h-px w-full max-w-xl bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />
      </div>
    </motion.section>
  );
}

/* =========================================================
   DEVICE CARD COMPONENT
========================================================= */

type DeviceCardProps = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
};

function DeviceCard({ title, subtitle, icon: Icon }: DeviceCardProps) {
  return (
    <div className="min-w-[120px] sm:min-w-[140px] p-3 sm:p-4 rounded-2xl border border-gray-200/80 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl shadow-lg shadow-black/5">
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mx-auto mb-2 bg-gradient-to-br from-blue-500/15 to-cyan-500/15 border border-blue-500/15 text-blue-600 dark:text-blue-400">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>

      <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-white">
        {title}
      </p>

      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5">
        {subtitle}
      </p>
    </div>
  );
}
