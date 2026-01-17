"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import {
  Home,
  User,
  Briefcase,
  Mail,
  FileText,
  Cpu,
  Users,
  TrendingUp,
} from "lucide-react";

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Map all possible link names to icon components
  const iconComponents: Record<string, React.ComponentType<any>> = {
    Home: Home,
    Services: Cpu,
    Projects: Briefcase,
    "About Us": Users,
    Experience: TrendingUp,
    Contact: Mail,
    Resume: FileText,
    About: User,
  };

  return (
    <header className="z-[999] relative">
      {/* Desktop background */}
      <motion.div
        className="hidden sm:block fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none
            border border-gray-400 border-opacity-40
            bg-transparent bg-opacity-80
            shadow-lg shadow-black/[0.03]
            backdrop-blur-[0.5rem]
            sm:top-6 sm:h-[3.25rem] sm:w-[46rem] sm:rounded-full
            dark:bg-transparent dark:border-gray-400 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-600 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => {
            const IconComponent = link.icon;
            return (
              <motion.li
                className="h-3/4 flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-gray-100 gap-1",
                    {
                      "text-gray-950 dark:text-white font-bold":
                        activeSection === link.name,
                    },
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  <IconComponent size={16} />
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span
                      className="bg-white rounded-full absolute inset-0 -z-10 dark:bg-gray-500"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Header */}
      <div className="sm:hidden fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-900 z-30">
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-medium text-gray-900 dark:text-white">
              <span className="font-bold text-xl">Dev</span>Plux
            </h1>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 px-2 py-2 rounded-lg outline outline-gray-500 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
            aria-label="Toggle menu"
          >
            <div className="relative w-4 h-3.5 flex flex-col justify-between">
              <span
                className={clsx(
                  "w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 origin-left",
                  isMenuOpen && "rotate-45 translate-y-1.5",
                )}
              ></span>
              <span
                className={clsx(
                  "w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300",
                  isMenuOpen && "opacity-0",
                )}
              ></span>
              <span
                className={clsx(
                  "w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 origin-left",
                  isMenuOpen && "-rotate-45 -translate-y-1.5",
                )}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Sheet Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 sm:hidden"
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 rounded-t-2xl shadow-2xl z-50 sm:hidden"
            >
              <div className="p-6">
                {/* Drag handle */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                </div>

                {/* Menu items */}
                <div className="space-y-1">
                  {links.map((link) => {
                    // Use the icon from link.icon if available, otherwise use mapped icon
                    const IconComponent =
                      link.icon || iconComponents[link.name] || Home;
                    const isActive = activeSection === link.name;

                    return (
                      <motion.div
                        key={link.hash}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: links.indexOf(link) * 0.05 }}
                      >
                        <Link
                          href={link.hash}
                          onClick={() => {
                            setActiveSection(link.name);
                            setTimeOfLastClick(Date.now());
                            setIsMenuOpen(false);
                          }}
                          className={clsx(
                            "flex items-center gap-4 px-4 py-3 rounded-xl transition-all",
                            isActive
                              ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                              : "hover:bg-gray-50 dark:hover:bg-gray-800",
                          )}
                        >
                          <div
                            className={clsx(
                              "p-2 rounded-lg",
                              isActive
                                ? "bg-blue-100 dark:bg-blue-900/30"
                                : "bg-gray-100 dark:bg-gray-800",
                            )}
                          >
                            <IconComponent size={20} />
                          </div>
                          <span className="font-medium">{link.name}</span>
                          {isActive && (
                            <div className="ml-auto w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse"></div>
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
