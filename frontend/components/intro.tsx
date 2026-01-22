"use client";

import Image from "next/image";
import React from "react";
import Avatar from "../app/images/Logo.png";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BsArrowDown,
  BsArrowRight,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { useSectionInView } from "@/lib/hook";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      {/*Logo Image with Animation*/}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={Avatar}
              alt="Janindu"
              width="152"
              height="152"
              quality="95"
              priority={true}
              className="sm:h-24 sm:w-24 h-20 w-20 sm:rounded-3xl rounded-2xl object-cover border-[0.15rem] border-gray-200 shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      {/*Main Title and Subtitle with Glitch Effect*/}
      <motion.div
        className="relative mb-14 sm:mt-10 mt-6 px-4 text-center"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      >
        {/* Glitch effect layers (delayed for better perception) */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-20">
          <h1 className="text-7xl sm:text-9xl font-black tracking-tighter text-red-400 blur-sm animate-pulse delay-300">
            DEVPLUX
          </h1>
        </div>

        <div className="relative">
          {/* Main Title */}
          <motion.h1
            className="text-7xl sm:text-8xl font-black mb-4 tracking-tighter text-gray-900 dark:text-white relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="relative z-10">DEVPLUX</span>
            <span className="absolute top-0 left-0 text-blue-400 opacity-30 animate-pulse delay-500">
              DEVPLUX
            </span>
            <span className="absolute top-0.5 left-0.5 text-purple-400 opacity-30 animate-pulse delay-700">
              DEVPLUX
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-8 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <span className="text-blue-500">&lt;</span>
            IT SOLUTIONS
            <span className="text-purple-500">/&gt;</span>
          </motion.div>

          {/* Description */}
          <motion.div
            className="max-w-lg mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-center space-y-2">
              <p className="sm:text-7xl text-5xl font-medium text-gray-800 dark:text-gray-200">
                Innovative software solutions
              </p>
              <p className="text-xl font-light text-gray-600 dark:text-gray-400">
                for the digital future
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/*Separator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="my-10"
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700"></div>
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative z-10 bg-transparent dark:bg-gray-900 p-2"
          >
            <div className="w-6 h-6 border-2 border-blue-500 border-t-blue-700 border-r-blue-800 border-b-blue-500 border-l-blue-400 transform rotate-45"></div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium sm:mb-25"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group hidden sm:flex bg-gray-900 text-white px-7 py-3 items-center gap-2 rounded-full outline-none
             focus:scale-110 hover:scale-105 hover:bg-gray-950
             active:scale-105 transition duration-500 ease-in-out"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact us here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition animate-pulse" />
        </Link>

        <Link
          href="#contact"
          className="group flex sm:hidden bg-gray-900 text-white px-6 py-3 items-center gap-2 rounded-full outline-none
             focus:scale-110 hover:scale-105 hover:bg-gray-950
             active:scale-105 transition duration-500 ease-in-out mb-5"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact us here
          <BsArrowDown className="opacity-70 group-hover:translate-y-1 transition animate-bounce" />
        </Link>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15]
                    active:scale-105 transition duration-300 ease-in-out cursor-pointer border border-black/10 dark:text-white/60 dark:bg-white/10 relative"
          href="#"
          target="_blank"
        >
          <BsLinkedin className="hover:text-blue-500 transition duration-300 ease-in" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15]
                    active:scale-105 transition cursor-pointer border border-black/10 dark:text-white/60 dark:bg-white/10 relative"
          href="https://github.com/DevPlux"
          target="_blank"
        >
          <BsGithub className="hover:text-green-500 transition duration-300 ease-in" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15]
                    active:scale-105 transition cursor-pointer border border-black/10 dark:text-white/60 dark:bg-white/10 relative"
          href="#"
          target="_blank"
        >
          <BsFacebook className="hover:text-blue-600 transition duration-300 ease-in" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15]
                    active:scale-105 transition cursor-pointer border border-black/10 dark:text-white/60 dark:bg-white/10 relative"
          href="#"
          target="_blank"
        >
          <BsInstagram className="hover:text-pink-600 transition duration-300 ease-in" />
        </a>
      </motion.div>
    </section>
  );
}
