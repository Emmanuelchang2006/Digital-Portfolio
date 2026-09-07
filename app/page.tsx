"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Shield, Mail } from "lucide-react";
import Terminal from "@/components/Terminal";

const supportingCapabilities = [
  {
    title: "Security Engineering",
    desc:
      "Applying secure-configuration principles across authentication, access control, and infrastructure. Translating security requirements into technical decisions.",
  },
  {
    title: "AI Security & Assurance",
    desc:
      "Security assessment of AI-enabled cybersecurity systems. Capability-based access, agent evaluation, and evidence-grounded assurance workflows.",
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
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_20rem] gap-10 lg:gap-14 items-start">

            {/* Left column */}
            <div>
              <div className="flex items-center gap-3 mb-7">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-white shadow-[0_0_0_1px_rgb(203_213_225)] flex-shrink-0">
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
                  <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-700">
                    Cybersecurity / Security Engineering
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Singapore</p>
                </div>
              </div>

              <h1 className="text-4xl sm:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.02] mb-6">
                Emmanuel Chang<span className="text-blue-600">.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-xl">
                DFIR foundation with industry exposure across cybersecurity
                analysis, AI security engineering, incident management systems
                and security assurance.
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-9">
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors shadow-sm"
                >
                  View experience
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-slate-900 text-sm font-medium rounded-md border border-slate-300 hover:border-slate-500 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Resume
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 transition-colors px-1"
                >
                  Contact
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Right column: case-file style current-focus card */}
            <aside className="lg:sticky lg:top-24 self-start w-full">
              <div className="rounded-lg border border-slate-200 bg-white overflow-hidden shadow-sm">
                <div className="bg-slate-900 text-slate-300 px-4 py-2.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em]">
                  <span className="flex items-center gap-2">
                    <Shield className="w-3 h-3 text-blue-400" />
                    Current
                  </span>
                  <span className="text-slate-500">2026</span>
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">Role</p>
                  <p className="text-slate-900 font-semibold text-[15px] leading-snug">
                    AI Security Engineer
                  </p>
                  <p className="text-sm text-slate-600 mt-0.5">Tangent9, contract</p>

                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">Focus</p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Security assessment and validation of an AI-powered
                      incident management platform.
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">Base</p>
                      <p className="text-xs text-slate-700">DFIR</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">Location</p>
                      <p className="text-xs text-slate-700">Singapore</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small credential row under the card */}
              <div className="mt-3 flex items-center gap-3 text-[11px] text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Available for internships &amp; roles
                </span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ────────────────────── CAPABILITIES (tinted) ────────────────────── */}
      <section className="section-tinted border-y border-slate-200 py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-700 mb-2">
                Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
                Where I work.
              </h2>
            </div>
            <p className="hidden sm:block text-sm text-slate-500 max-w-xs text-right">
              A primary focus in DFIR, extended into security engineering and AI
              security.
            </p>
          </div>

          {/* Featured DFIR panel */}
          <article className="rounded-xl border border-slate-300 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] overflow-hidden mb-4 sm:mb-5">
            <div className="grid lg:grid-cols-[1fr_18rem]">
              <div className="p-6 sm:p-8">
                <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-700 mb-3">
                  Primary focus
                </p>
                <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-tight mb-4">
                  Digital Forensics &amp; Incident Response
                </h3>
                <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed max-w-2xl">
                  My cybersecurity foundation is rooted in DFIR. Experience
                  across Windows and Linux environments, endpoint investigation,
                  IOC analysis, malware artefacts, incident response workflows
                  and evidence handling.
                </p>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-start gap-3">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex-shrink-0 mt-0.5">
                    Now
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    AI-assisted and agentic DFIR workflows using LLMs and MCP.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200 p-6 sm:p-8">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Selected tools
                </p>
                <ul className="text-[14px] text-slate-700 space-y-1.5">
                  <li>Velociraptor</li>
                  <li>KAPE</li>
                  <li>FTK Imager</li>
                  <li>Magnet AXIOM</li>
                  <li>MITRE ATT&amp;CK</li>
                </ul>
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mt-6 mb-2">
                  Platforms
                </p>
                <p className="text-[14px] text-slate-700">Windows, Linux</p>
              </div>
            </div>
          </article>

          {/* Supporting capabilities */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
            {supportingCapabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-lg border border-slate-300 bg-white p-5 sm:p-6"
              >
                <h3 className="text-[15px] font-semibold text-slate-900 mb-2.5 leading-snug">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── TERMINAL (dark) ─────────────────────────── */}
      <section className="section-dark py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 sm:mb-10 max-w-2xl">
            <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-400 mb-2">
              Terminal
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Poke around.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
              A small interactive terminal is embedded below. Type{" "}
              <code className="font-mono text-slate-200 bg-white/5 border border-slate-800 rounded px-1.5 py-0.5">
                help
              </code>{" "}
              to see the available commands.
            </p>
          </div>
          <Terminal />
        </div>
      </section>

      {/* ─────────────────────── CLOSING CTA (dark, blue accent) ─────────────────────── */}
      <section className="section-dark border-t border-slate-800 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center rounded-xl border border-slate-800 bg-[color:var(--bg-dark-2)] p-6 sm:p-10">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-400 mb-2">
                Get in touch
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Available for internship and part-time roles.
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-xl leading-relaxed">
                Cybersecurity, DFIR, and AI security opportunities welcome.
                I respond within 24 hours.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-3 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                Contact
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-1.5 px-5 py-3 bg-transparent text-white text-sm font-medium rounded-md border border-slate-700 hover:border-slate-500 hover:bg-white/5 transition-colors"
              >
                Resume
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
