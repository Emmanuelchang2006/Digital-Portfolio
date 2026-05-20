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

/* Highlight cards shown beneath the hero */
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
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Dark cyber background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#080d18] via-[#0a0f1e] to-[#080d18] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-800/10 rounded-full blur-2xl opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-950/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-slate-700 shadow-xl shadow-black/50 overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Emmanuel Chang"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-400 rounded-full border-2 border-[#080d18]" />
            </div>
          </motion.div>

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-950/50 border border-green-800/50 text-green-400 text-xs font-medium rounded-full">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Available for Internships & Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-bold text-white tracking-tight mb-3"
          >
            Emmanuel Chang
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl font-medium text-blue-400 mb-6"
          >
            Cybersecurity & Digital Forensics Student · Aspiring Security Engineer
          </motion.p>

          {/* Introduction paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl mx-auto space-y-4 mb-10"
          >
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              I&apos;m Emmanuel, a dedicated student currently pursuing a Diploma in
              Cybersecurity and Digital Forensics. Beyond my passion for tackling
              cybersecurity&apos;s emerging threats and mitigating risks, I enjoy playing
              basketball and challenging myself with new opportunities to grow.
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              As Heraclitus wisely said, &ldquo;Change is the only constant.&rdquo; Embracing
              this philosophy, I continuously upskill myself to stay ahead of trends,
              leveraging my knowledge and skills to combat cyberattacks effectively.
            </p>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white text-sm font-medium rounded-xl border border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Download className="w-4 h-4" />
              View Resume
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-500 transition-all duration-200 shadow-md hover:shadow-blue-500/25"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </Link>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-slate-300 text-sm font-medium rounded-xl border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 hover:text-white transition-all duration-200"
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
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600"
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

      {/* ── Quote Section ── */}
      <section className="py-20 bg-[#050810] px-4 sm:px-6 lg:px-8 border-y border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl text-blue-500 font-serif leading-none mb-4">&ldquo;</div>
            <blockquote className="text-xl sm:text-2xl font-medium text-slate-200 leading-relaxed mb-6 italic">
              As Heraclitus wisely said, &ldquo;Change is the only constant.&rdquo; Embracing
              this philosophy, I continuously upskill myself to stay ahead of
              trends, leveraging my knowledge and skills to combat cyberattacks
              effectively.
            </blockquote>
            <div className="w-12 h-0.5 bg-blue-500 mx-auto mb-4" />
            <p className="text-slate-500 text-sm font-medium tracking-wide uppercase">
              Emmanuel Chang
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Highlight Cards ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080d18]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">What I Do</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
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
                  className="group p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-900/40 transition-colors duration-200">
                    <Icon className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors duration-200" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Let&apos;s build something secure together
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Open to internships, part-time roles, and collaborative projects in cybersecurity and software engineering.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="px-6 py-3 bg-white text-blue-700 text-sm font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow-md"
              >
                Get In Touch
              </Link>
              <Link
                href="/resume"
                className="px-6 py-3 bg-blue-900 text-white text-sm font-semibold rounded-xl hover:bg-blue-950 transition-colors duration-200"
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
