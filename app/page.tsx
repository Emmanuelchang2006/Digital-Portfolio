"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import Terminal from "@/components/Terminal";

const supportingCapabilities = [
  {
    title: "Security Engineering",
    desc:
      "Applying secure-configuration principles across authentication, access control and infrastructure. Translating security requirements into technical decisions.",
  },
  {
    title: "AI Security & Assurance",
    desc:
      "Security assessment of AI-enabled cybersecurity systems. Capability-based access, agent evaluation and evidence-grounded assurance workflows.",
  },
  {
    title: "Threat Intelligence & Offensive",
    desc:
      "Multi-source IOC enrichment. Web exploitation, cryptography and OSINT through Hack The Box, BrainHack and academic pentest work.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section className="hero-glow pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-7">
            <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-white shadow-[0_0_0_1px_rgb(203_213_225),0_8px_24px_-8px_rgba(37,99,235,0.35)] flex-shrink-0">
              <Image
                src="/profile.jpg"
                alt="Emmanuel Chang"
                width={56}
                height={56}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-700 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue-600" />
                Cybersecurity / Security Engineering
              </p>
              <p className="text-xs text-slate-500 mt-1">Singapore</p>
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.02] mb-6">
            Emmanuel
            <br />
            Chang<span className="text-blue-600">.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl">
            DFIR foundation with industry exposure across cybersecurity
            analysis, AI security engineering, incident management systems
            and security assurance.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-9">
            <Link
              href="/experience"
              className="btn-primary inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium"
            >
              View my work
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/resume"
              className="btn-outline inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium"
            >
              <Download className="w-3.5 h-3.5" />
              View resume
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-blue-700 transition-colors px-2 py-1.5"
            >
              Contact
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* ────────────────────── WHAT I DO (tinted) ────────────────────── */}
      <section className="section-tinted border-y border-blue-100/70 py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-700 mb-2 flex items-center gap-2">
                <Sparkles className="w-3 h-3" />
                What I do
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
                Where I work.
              </h2>
            </div>
            <p className="hidden sm:block text-sm text-slate-500 max-w-xs text-right">
              A primary focus in DFIR, extended into security engineering and
              AI security.
            </p>
          </div>

          {/* Featured DFIR panel: blue-indigo gradient */}
          <article className="card-gradient relative overflow-hidden p-6 sm:p-8 mb-5">
            <div
              aria-hidden
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-indigo-400/20 blur-3xl pointer-events-none"
            />
            <div className="relative grid lg:grid-cols-[1fr_18rem] gap-6 lg:gap-10">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-100/90 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                  Primary focus
                </p>
                <h3 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight leading-tight mb-4">
                  Digital Forensics &amp; Incident Response
                </h3>
                <p className="text-[15px] sm:text-base text-blue-50/90 leading-relaxed max-w-2xl">
                  My cybersecurity foundation is rooted in DFIR. Experience
                  across Windows and Linux environments, endpoint investigation,
                  IOC analysis, malware artefacts, incident response workflows
                  and evidence handling.
                </p>

                <div className="mt-6 pt-5 border-t border-white/15 flex items-start gap-3">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-blue-200 flex-shrink-0 mt-0.5">
                    Now
                  </p>
                  <p className="text-sm text-blue-50/95 leading-relaxed">
                    AI-assisted and agentic DFIR workflows using LLMs and MCP.
                  </p>
                </div>

                <Link
                  href="/experience"
                  className="inline-flex items-center gap-1.5 mt-6 text-sm text-white/90 hover:text-white group"
                >
                  <span className="border-b border-white/40 group-hover:border-white pb-0.5">See case files</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              <div className="bg-white/[0.07] backdrop-blur-sm border border-white/15 rounded-xl p-5">
                <p className="text-[11px] font-mono uppercase tracking-wider text-blue-200 mb-3">
                  Selected tools
                </p>
                <ul className="text-[14px] text-white space-y-1.5">
                  <li>Velociraptor</li>
                  <li>KAPE</li>
                  <li>FTK Imager</li>
                  <li>Magnet AXIOM</li>
                  <li>MITRE ATT&amp;CK</li>
                </ul>
                <p className="text-[11px] font-mono uppercase tracking-wider text-blue-200 mt-5 mb-2">
                  Platforms
                </p>
                <p className="text-[14px] text-white">Windows, Linux</p>
              </div>
            </div>
          </article>

          {/* Supporting capabilities: white rounded cards with hover-lift */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
            {supportingCapabilities.map((c) => (
              <article
                key={c.title}
                className="card group p-5 sm:p-6"
              >
                <h3 className="text-[16px] font-semibold text-slate-900 mb-2.5 leading-snug group-hover:text-blue-700 transition-colors">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {c.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── TERMINAL (dark) ─────────────────────────── */}
      <section className="section-dark-glow py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-dark opacity-40 pointer-events-none" aria-hidden />
        <div className="relative max-w-3xl mx-auto">
          <Terminal />
        </div>
      </section>

      {/* ─────────────────────── CLOSING CTA (dark, gradient) ─────────────────────── */}
      <section className="section-dark border-t border-slate-800 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-[color:var(--bg-dark-2)] to-slate-900 p-6 sm:p-10">
            <div
              aria-hidden
              className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-600/25 blur-3xl pointer-events-none"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none"
            />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-300 mb-2">
                  Get in touch
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  Open to opportunities.
                </h2>
                <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-xl leading-relaxed">
                  Cybersecurity, DFIR and AI security opportunities welcome.
                  I respond within 24 hours.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-5 py-3 bg-white text-slate-900 text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors shadow-lg shadow-blue-500/20"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Contact
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-1.5 px-5 py-3 bg-transparent text-white text-sm font-medium rounded-lg border border-slate-700 hover:border-blue-400 hover:bg-white/5 transition-colors"
                >
                  Resume
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
