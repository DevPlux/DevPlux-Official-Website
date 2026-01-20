"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useSectionInView } from "@/lib/hook";
import SectionHeading from "@/components/section-heading";
import toast from "react-hot-toast";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  BriefcaseBusiness,
  GraduationCap,
  Send,
  Loader2,
} from "lucide-react";

import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { sendEmail } from "@/actions/sendEmail";

/* ---------------- ANIMATIONS ---------------- */

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 130, damping: 18 },
  },
};

/* ---------------- COMPONENT ---------------- */

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);
  const [contactType, setContactType] = useState<
    "Business" | "Academic" | "General"
  >("Business");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    if (isSending) return; // Prevent multiple submissions

    setIsSending(true);

    try {
      // Add contact type to form data
      formData.append("contactType", contactType);

      const { data, error } = await sendEmail(formData);

      if (error) {
        toast.error(error);
        return;
      }

      toast.success("Message sent successfully!");

      // Reset form after successful submission
      const form = document.querySelector("form") as HTMLFormElement;
      if (form) {
        form.reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
      className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 py-24 relative"
    >
      {/* ---------------- HERO ---------------- */}
      <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto">
        <p className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
          <Send className="w-4 h-4" />
          Get in Touch
        </p>

        <SectionHeading>Contact Us</SectionHeading>

        <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          Whether you're planning a business solution, academic project, or
          research collaboration — we're ready to help.
        </p>
      </motion.div>

      {/* ---------------- CONTACT TYPE SELECTOR ---------------- */}
      <motion.div
        variants={fadeUp}
        className="mt-10 flex flex-wrap justify-center gap-3"
      >
        <button
          onClick={() => setContactType("Business")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition
            ${
              contactType === "Business"
                ? "bg-blue-600 text-white"
                : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
            } ${isSending ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={isSending}
        >
          <BriefcaseBusiness className="inline w-4 h-4 mr-1" />
          Business Project
        </button>

        <button
          onClick={() => setContactType("Academic")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition
            ${
              contactType === "Academic"
                ? "bg-indigo-600 text-white"
                : "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
            } ${isSending ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={isSending}
        >
          <GraduationCap className="inline w-4 h-4 mr-1" />
          Academic / University
        </button>

        <button
          onClick={() => setContactType("General")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition
            ${
              contactType === "General"
                ? "bg-gray-800 text-white"
                : "bg-gray-500/10 text-gray-600 dark:text-gray-400"
            } ${isSending ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={isSending}
        >
          General Inquiry
        </button>
      </motion.div>

      <motion.div
        className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium mt-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className={`bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15]
                    active:scale-105 transition duration-300 ease-in-out cursor-pointer border border-black/10 dark:text-white/60 dark:bg-white/10 relative
                    ${isSending ? "pointer-events-none opacity-50" : ""}`}
          href="#"
          target="_blank"
          tabIndex={isSending ? -1 : 0}
        >
          <BsLinkedin className="hover:text-blue-500 transition duration-300 ease-in" />
        </a>

        <a
          className={`bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15]
                    active:scale-105 transition cursor-pointer border border-black/10 dark:text-white/60 dark:bg-white/10 relative
                    ${isSending ? "pointer-events-none opacity-50" : ""}`}
          href="https://github.com/DevPlux"
          target="_blank"
          tabIndex={isSending ? -1 : 0}
        >
          <BsGithub className="hover:text-green-500 transition duration-300 ease-in" />
        </a>

        <a
          className={`bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15]
                    active:scale-105 transition cursor-pointer border border-black/10 dark:text-white/60 dark:bg-white/10 relative
                    ${isSending ? "pointer-events-none opacity-50" : ""}`}
          href="#"
          target="_blank"
          tabIndex={isSending ? -1 : 0}
        >
          <BsFacebook className="hover:text-blue-600 transition duration-300 ease-in" />
        </a>

        <a
          className={`bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15]
                    active:scale-105 transition cursor-pointer border border-black/10 dark:text-white/60 dark:bg-white/10 relative
                    ${isSending ? "pointer-events-none opacity-50" : ""}`}
          href="#"
          target="_blank"
          tabIndex={isSending ? -1 : 0}
        >
          <BsInstagram className="hover:text-pink-600 transition duration-300 ease-in" />
        </a>
      </motion.div>

      <motion.div
        className="flex flex-row items-center justify-center text-xs mt-15"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <p className="text-gray-700 -mt-6 dark:text-white/80">
          You can contact us directly at{" "}
          <a
            href="mailto:devplux.info@gmail.com"
            className={`underline font-semibold italic dark:text-blue-200 text-blue-800 ${
              isSending ? "pointer-events-none opacity-50" : ""
            }`}
            tabIndex={isSending ? -1 : 0}
          >
            devplux.info@gmail.com
          </a>{" "}
          or through this form.
        </p>
      </motion.div>

      {/* ---------------- CONTENT GRID ---------------- */}
      <motion.div
        variants={fadeUp}
        className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        {/* ---------- LEFT: CONTACT INFO ---------- */}
        <div className="space-y-6">
          {[
            {
              icon: Mail,
              label: "Email",
              value: "devplux.info@gmail.com",
            },
            {
              icon: Phone,
              label: "Phone / WhatsApp",
              value: "+94 70 299 9173",
            },
            {
              icon: MapPin,
              label: "Location",
              value: "Sri Lanka (Remote Friendly)",
            },
            {
              icon: Clock,
              label: "Response Time",
              value: "Within 24–48 hours",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="flex items-start gap-4 rounded-2xl border border-gray-200/60 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 backdrop-blur-sm p-5"
            >
              <div className="h-11 w-11 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <item.icon className="w-5 h-5" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-medium text-gray-900 dark:text-white">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ---------- RIGHT: FORM ---------- */}
        <motion.form
          variants={fadeUp}
          className="rounded-3xl border border-gray-200/60 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm p-6 sm:p-8 space-y-5"
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            await handleSubmit(formData);
          }}
        >
          <input type="hidden" name="contactType" value={contactType} />

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Full Name
            </label>
            <input
              type="text"
              name="senderName"
              required
              placeholder="Your name"
              className="mt-2 w-full rounded-xl border border-gray-300/60 dark:border-gray-700 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSending}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Email Address
            </label>
            <input
              type="email"
              name="senderEmail"
              required
              placeholder="you@email.com"
              className="mt-2 w-full rounded-xl border border-gray-300/60 dark:border-gray-700 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSending}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder={
                contactType === "Academic"
                  ? "Tell us about your university or research project..."
                  : contactType === "Business"
                    ? "Tell us about your business idea or requirements..."
                    : "Write your message..."
              }
              className="mt-2 w-full rounded-xl border border-gray-300/60 dark:border-gray-700 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-blue-500 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSending}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={!isSending ? { scale: 1.04 } : {}}
            whileTap={!isSending ? { scale: 0.95 } : {}}
            disabled={isSending}
            className={`w-full mt-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-medium flex items-center justify-center gap-2 transition
              ${
                isSending
                  ? "cursor-wait opacity-70"
                  : "hover:shadow-lg hover:shadow-blue-500/30"
              }`}
          >
            {isSending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </motion.button>

          {isSending && (
            <p className="text-center text-xs text-gray-500 dark:text-gray-400 animate-pulse">
              Please wait while we send your message...
            </p>
          )}
        </motion.form>
      </motion.div>
    </motion.section>
  );
}
