"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Shield,
  Mail,
  Terminal as TerminalIcon,
  Sparkles,
  Radar,
  ShieldCheck,
  Cpu,
  Code2,
} from "lucide-react";
import Terminal from "@/components/Terminal";

const supportingCapabilities = [
  {
    title: "Security Engineering",
    desc:
      "Applying secure-configuration principles across authentication, access control and infrastructure. Translating security requirements into technical decisions.",
    tools: ["SSH", "AES", "Access Control", "Network Security"],
    icon: ShieldCheck,
  },
  {
    title: "AI Security & Assurance",
    desc:
      "Security assessment of AI-enabled cybersecurity systems. Capability-based access, agent evaluation and evidence-grounded assurance workflows.",
    tools: ["LLM Security", "AI Agents", "MCP", "Assurance"],
    icon: Cpu,
  },
  {
    title: "Threat Intelligence & Offensive",
    desc:
      "Multi-source IOC enrichment. Web exploitation, cryptography and OSINT through Hack The Box, BrainHack and academic pentest work.",
    tools: ["VirusTotal", "AbuseIPDB", "Burp", "Nmap"],
    icon: Radar,
  },
];

const featuredHighlights = [
  {
    kind: "Current role",
    title: "AI Security Engineer",
    org: "Tangent9",
    desc: "Security assessment, integration and validation of an AI-powered incident management platform.",
    href: "/experience",
  },
  {
    kind: "Industry DFIR",
    title: "Junior DFIR Specialist",
    org: "ST Engineering Info-Security",
    desc: "Endpoint IOC investigation, agentic-DFIR prototyping with Velociraptor and MCP.",
    href: "/experience",
  },
  {
    kind: "Open source",
    title: "IOC Enrichment CLI",
    org: "Python, published on GitHub",
    desc: "Concurrent enrichment against VirusTotal, AbuseIPDB and Shodan with structured JSON output.",
    href: "https://github.com/Emmanuelchang2006/ioc-checker",
    external: true,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section className="hero-glow pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_20rem] gap-10 lg:gap-14 items-start">

            <div>
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
                  <p className="text-xs text-slate-600 mt-1">Singapore</p>
                </div>
              </div>

              <h1 className="text-5xl sm:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.02] mb-6">
                Emmanuel
                <br />
                Chang<span className="text-blue-600">.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-xl">
                DFIR foundation with industry exposure across cybersecurity
                analysis, AI security engineering, incident management systems
                and security assurance.
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-9">
                <Link
                  href="/experience"
                  className="btn-primary inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium"
                >
                  View experience
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/resume"
                  className="btn-outline inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium"
                >
                  <Download className="w-3.5 h-3.5" />
                  Resume
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-700 hover:text-blue-700 transition-colors px-2 py-1.5"
                >
                  Contact
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Right column: case-file style current-focus card */}
            <aside className="lg:sticky lg:top-24 self-start w-full">
              <div className="rounded-2xl border border-blue-300/70 bg-white overflow-hidden shadow-xl shadow-blue-500/15">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-300 px-4 py-2.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] border-b border-slate-800">
                  <span className="flex items-center gap-2">
                    <Shield className="w-3 h-3 text-blue-400" />
                    Current focus
                  </span>
                  <span className="text-slate-500">2026</span>
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1">Role</p>
                  <p className="text-slate-900 font-semibold text-[15px] leading-snug">
                    AI Security Engineer
                  </p>
                  <p className="text-sm text-slate-600 mt-0.5">Tangent9, contract</p>

                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1">Focus</p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Security assessment and validation of an AI-powered
                      incident management platform.
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1">Base</p>
                      <p className="text-xs text-slate-800 font-medium">DFIR</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1">Location</p>
                      <p className="text-xs text-slate-800 font-medium">Singapore</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open to opportunities
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ────────────────────── WHERE I WORK (tinted) ────────────────────── */}
      <section className="section-tinted border-y border-blue-200/70 py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-800 mb-2 flex items-center gap-2">
                <Sparkles className="w-3 h-3" />
                Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
                Where I work.
              </h2>
            </div>
            <p className="hidden sm:block text-sm text-slate-700 max-w-xs text-right">
              A primary focus in DFIR, extended into security engineering and AI
              security.
            </p>
          </div>

          {/* Featured DFIR panel: blue-indigo gradient */}
          <article className="card-gradient relative overflow-hidden p-6 sm:p-8 mb-5">
            <div
              aria-hidden
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan-400/25 blur-3xl pointer-events-none"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-indigo-400/25 blur-3xl pointer-events-none"
            />
            <div className="relative grid lg:grid-cols-[1fr_18rem] gap-6 lg:gap-10">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-100 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                  Primary focus
                </p>
                <h3 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight leading-tight mb-4">
                  Digital Forensics &amp; Incident Response
                </h3>
                <p className="text-[15px] sm:text-base text-blue-50 leading-relaxed max-w-2xl">
                  My cybersecurity foundation is rooted in DFIR. Experience
                  across Windows and Linux environments, endpoint investigation,
                  IOC analysis, malware artefacts, incident response workflows
                  and evidence handling.
                </p>

                <div className="mt-6 pt-5 border-t border-white/15 flex items-start gap-3">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-blue-200 flex-shrink-0 mt-0.5">
                    Now
                  </p>
                  <p className="text-sm text-blue-50 leading-relaxed">
                    AI-assisted and agentic DFIR workflows using LLMs and MCP.
                  </p>
                </div>

                <Link
                  href="/experience"
                  className="inline-flex items-center gap-1.5 mt-6 text-sm text-white group"
                >
                  <span className="border-b border-white/50 group-hover:border-white pb-0.5">See case files</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
                <p className="text-[11px] font-mono uppercase tracking-wider text-blue-100 mb-3">
                  Selected tools
                </p>
                <ul className="text-[14px] text-white space-y-1.5">
                  <li>Velociraptor</li>
                  <li>KAPE</li>
                  <li>FTK Imager</li>
                  <li>Magnet AXIOM</li>
                  <li>MITRE ATT&amp;CK</li>
                </ul>
                <p className="text-[11px] font-mono uppercase tracking-wider text-blue-100 mt-5 mb-2">
                  Platforms
                </p>
                <p className="text-[14px] text-white">Windows, Linux</p>
              </div>
            </div>
          </article>

          {/* Supporting capabilities: white rounded cards with hover-lift and clearer borders */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
            {supportingCapabilities.map((c) => {
              const Icon = c.icon;
              return (
                <article
                  key={c.title}
                  className="card group p-5 sm:p-6"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-blue-700" />
                    </span>
                    <h3 className="text-[16px] font-semibold text-slate-900 leading-snug group-hover:text-blue-800 transition-colors">
                      {c.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {c.desc}
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {c.tools.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono text-blue-800 bg-blue-50 border border-blue-200 rounded px-1.5 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── TERMINAL (dark) ─────────────────────────── */}
      <section className="section-dark-glow py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-dark opacity-40 pointer-events-none" aria-hidden />
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-8 sm:mb-10 max-w-2xl">
            <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-300 mb-2 flex items-center gap-2">
              <TerminalIcon className="w-3 h-3" />
              Terminal
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Poke around.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              A small interactive terminal is embedded below. Type{" "}
              <code className="font-mono text-blue-300 bg-blue-500/10 border border-blue-500/30 rounded px-1.5 py-0.5">
                help
              </code>{" "}
              to see the available commands.
            </p>
          </div>
          <Terminal />
        </div>
      </section>

      {/* ────────────────────── FEATURED HIGHLIGHTS ────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-800 mb-2 flex items-center gap-2">
                <Code2 className="w-3 h-3" />
                Featured
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
                Recent highlights.
              </h2>
            </div>
            <Link
              href="/experience"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-blue-800 hover:text-blue-950 font-medium group"
            >
              <span className="border-b border-blue-800/40 group-hover:border-blue-800 pb-0.5">
                View all experience
              </span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
            {featuredHighlights.map((h) => (
              <Link
                key={h.title}
                href={h.href}
                target={h.external ? "_blank" : undefined}
                rel={h.external ? "noopener noreferrer" : undefined}
                className="card group p-5 sm:p-6 flex flex-col"
              >
                <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-700 mb-2">
                  {h.kind}
                </p>
                <h3 className="text-[17px] font-semibold text-slate-900 leading-snug group-hover:text-blue-800 transition-colors">
                  {h.title}
                </h3>
                <p className="text-[13px] text-slate-700 mt-0.5">{h.org}</p>
                <p className="text-sm text-slate-700 leading-relaxed mt-3">
                  {h.desc}
                </p>
                <div className="mt-auto pt-5 flex items-center gap-1.5 text-sm text-blue-700 font-medium">
                  <span className="border-b border-blue-500/30 group-hover:border-blue-700 pb-0.5">
                    Explore
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── CLOSING CTA (dark) ─────────────────────── */}
      <section className="section-dark border-t border-slate-800 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-[color:var(--bg-dark-2)] to-slate-900 p-6 sm:p-10">
            <div
              aria-hidden
              className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-600/30 blur-3xl pointer-events-none"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-indigo-600/25 blur-3xl pointer-events-none"
            />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-300 mb-2">
                  Get in touch
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  Open to opportunities.
                </h2>
                <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-xl leading-relaxed">
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
                  className="inline-flex items-center gap-1.5 px-5 py-3 bg-transparent text-white text-sm font-medium rounded-lg border border-slate-600 hover:border-blue-400 hover:bg-white/5 transition-colors"
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
