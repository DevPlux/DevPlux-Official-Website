"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative -sm:mt-5 overflow-hidden">
      {/* Top gradient divider */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      />

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm text-gray-600 dark:text-gray-400">
          {/* BRAND */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              DevPlux
            </h4>
            <p className="mt-3 leading-relaxed">
              Crafting modern software solutions for businesses, startups, and
              academic innovation.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Explore
            </h5>
            <ul className="space-y-2">
              {[
                { name: "Services", href: "#services" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h5>

            <div className="flex items-center gap-4">
              <a
                href="mailto:devplux.info@gmail.com"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/DevPlux"
                target="_blank"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                // target="_blank"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <p className="mt-4 text-xs">
              Sri Lanka • Open for Remote & Collaborations
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} • DevPlux</p>
          <p>Built with Next.js • Tailwind CSS • Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
