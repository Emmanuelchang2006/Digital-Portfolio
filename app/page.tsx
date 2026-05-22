"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Mail,
  Shield,
  Brain,
  Fingerprint,
  Trophy,
  ChevronDown,
} from "lucide-react";
import Terminal from "@/components/Terminal";
import TypewriterText from "@/components/TypewriterText";

const highlights = [
  {
    icon: Shield,
    title: "Cybersecurity and Threat Intelligence",
    desc: "Proactive threat analysis, vulnerability assessment, and security operations to defend against evolving cyber threats.",
  },
  {
    icon: Brain,
    title: "AI Security and Machine Learning",
    desc: "Applying machine learning techniques to detect anomalies, automate threat detection, and strengthen AI-driven security systems.",
  },
  {
    icon: Fingerprint,
    title: "Digital Forensics & Incident Response",
    desc: "Evidence acquisition, memory analysis, and structured incident response following chain-of-custody protocols.",
  },
  {
    icon: Trophy,
    title: "CTF Competitions",
    desc: "Hands-on capture-the-flag challenges spanning web exploitation, reverse engineering, cryptography, and OSINT.",
  },
];

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-grid pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-slate-200 shadow-md overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Emmanuel Chang"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-400 rounded-full border-2 border-white shadow-sm" />
            </div>
          </motion.div>

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 text-green-700 text-xs font-medium rounded-full">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Available for Internships & Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-bold text-slate-900 tracking-tight mb-3"
          >
            Emmanuel Chang
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl font-medium text-blue-600 mb-6 min-h-[1.75rem]"
          >
            <TypewriterText
              text="Cybersecurity & Digital Forensics Student · Aspiring Security Engineer"
              speed={38}
              startDelay={900}
            />
          </motion.p>

          {/* Introduction paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl mx-auto space-y-4 mb-10"
          >
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              I&apos;m Emmanuel, a dedicated student currently pursuing a Diploma in
              Cybersecurity and Digital Forensics. Beyond my passion for tackling
              cybersecurity&apos;s emerging threats and mitigating risks, I enjoy playing
              basketball and challenging myself with new opportunities to grow.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              As Heraclitus wisely said, &ldquo;Change is the only constant.&rdquo; Embracing
              this philosophy, I continuously upskill myself to stay ahead of trends,
              leveraging my knowledge and skills to combat cyberattacks effectively.
            </p>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
              Feel free to explore my website and learn more about my journey!
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            <Link
              href="/resume"
              className="glitch-btn inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 text-sm font-mono font-medium rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm"
            >
              <Download className="w-4 h-4" />
              View Resume
            </Link>
            <Link
              href="/contact"
              className="glitch-btn inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-sm"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </Link>
            <Link
              href="/experience"
              className="glitch-btn inline-flex items-center gap-2 px-6 py-3 bg-transparent text-slate-600 text-sm font-mono font-medium rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-white hover:text-slate-900 transition-all duration-200"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Terminal Section ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-center text-xs font-mono text-slate-400 mb-5 uppercase tracking-widest select-none">
              // interactive terminal
            </p>
            <Terminal />
          </motion.div>
        </div>
      </section>

      {/* ── Quote Section ── */}
      <section className="py-20 bg-slate-100 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl text-blue-500 font-serif leading-none mb-4">&ldquo;</div>
            <blockquote className="text-xl sm:text-2xl font-medium text-slate-800 leading-relaxed mb-6 italic">
              Change is the only constant. Embracing this philosophy, I
              continuously upskill myself to stay ahead of trends, leveraging my
              knowledge and skills to combat cyberattacks effectively.
            </blockquote>
            <div className="w-12 h-0.5 bg-blue-500 mx-auto mb-4" />
            <p className="text-slate-400 text-sm font-medium tracking-wide uppercase">
              Emmanuel Chang
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Highlight Cards ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">What I Do</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Combining technical depth with hands-on experience across cybersecurity, AI, and digital forensics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors duration-200">
                    <Icon className="w-6 h-6 text-slate-500 group-hover:text-blue-600 transition-colors duration-200" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />
        <div className="relative max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Let&apos;s build something secure together
            </h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
              Open to internships, part-time roles, and collaborative projects in cybersecurity and software engineering.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-500 transition-all duration-200"
              >
                Get In Touch
              </Link>
              <Link
                href="/resume"
                className="px-6 py-3 bg-white/10 text-white text-sm font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                View Resume
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
