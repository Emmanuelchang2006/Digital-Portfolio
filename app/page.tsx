"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Mail,
  Terminal as TerminalIcon,
  Sparkles,
  Radar,
  ShieldCheck,
  Cpu,
  BadgeCheck,
  Briefcase,
  FolderGit2,
} from "lucide-react";
import Terminal from "@/components/Terminal";

/* ─── Current focus / capabilities ─── */

const supportingCapabilities = [
  {
    title: "Security Engineering",
    desc: "Applying secure-configuration principles across authentication, access control and infrastructure.",
    icon: ShieldCheck,
  },
  {
    title: "AI Security & Assurance",
    desc: "Security assessment of AI-enabled systems, agent evaluation and evidence-grounded assurance.",
    icon: Cpu,
  },
  {
    title: "Threat Intelligence & Offensive",
    desc: "Multi-source IOC enrichment and offensive skills through Hack The Box and BrainHack.",
    icon: Radar,
  },
];

/* ─── Work preview (editorial) ─── */

const workPreview = [
  {
    company: "Tangent9",
    role: "AI Security Engineer",
    duration: "July – September 2026",
    context: "Information Technology · Contract",
    desc:
      "Security assessment, integration and validation of an AI-powered incident management platform.",
  },
  {
    company: "Telsecure",
    role: "Cybersecurity Analyst",
    duration: "August – September 2026",
    context: "Cyber Security · Contractor",
    desc:
      "Applied secure-configuration principles across SSH, encryption practices and infrastructure requirements.",
  },
  {
    company: "ST Engineering Info-Security",
    role: "Junior DFIR Specialist Intern",
    duration: "September 2025 – January 2026",
    context: "Cyber Security · Internship",
    desc:
      "Endpoint IOC investigation and agentic-DFIR prototyping with Velociraptor and LLM tooling via MCP.",
  },
];

/* ─── Selected projects ─── */

const selectedProjects = [
  {
    title: "IOC Enrichment CLI",
    kind: "Open source",
    period: "2025",
    desc:
      "Concurrent enrichment against VirusTotal, AbuseIPDB and Shodan with structured JSON output.",
    img: "/images/IOC%20Checker.jpg",
    href: "/experience",
  },
  {
    title: "Malware Analysis, VirusShare Sample",
    kind: "Academic",
    period: "2024",
    desc:
      "Static and dynamic analysis in an isolated FlareVM lab with a full IOC report mapped to MITRE ATT&CK.",
    img: undefined,
    href: "/experience",
  },
  {
    title: "Web Application Penetration Testing",
    kind: "Academic",
    period: "2024",
    desc:
      "Trip.com domain pentest. Identified 3 High-severity CVEs and scored them via CVSS v3.1.",
    img: undefined,
    href: "/experience",
  },
];

/* ─── Certification preview ─── */

const certPreview = [
  {
    title: "Certified LLM Security Expert",
    subtitle: "CLLMSE",
    issuer: "Red Team Leaders",
    year: "2026",
    img: "/images/CLLMSE%20Certification.png",
  },
  {
    title: "DFIR Foundations",
    subtitle: "BlueCape",
    issuer: "BlueCape Security",
    year: "2025",
    img: "/images/Bluecape%20Security.jpg",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    subtitle: "AWS CCP",
    issuer: "Amazon Web Services",
    year: "2025",
    img: "/images/AWS%20CCP.jpg",
  },
];

/* ─── Small helpers ─── */

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-[11px] font-mono uppercase tracking-[0.22em] text-blue-800 mb-2 flex items-center gap-2 ${className}`}>
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section className="hero-glow pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-white shadow-[0_0_0_1px_rgb(203_213_225),0_10px_24px_-8px_rgba(37,99,235,0.4)] flex-shrink-0">
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
              <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-800 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue-700" />
                Cybersecurity / Security Engineering
              </p>
              <p className="text-xs text-slate-600 mt-1">Singapore</p>
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.02] mb-6">
            Emmanuel Chang<span className="text-blue-700">.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-800 leading-relaxed max-w-2xl">
            DFIR foundation with industry exposure across cybersecurity
            analysis, AI security engineering, incident management systems
            and security assurance.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-10">
            <Link
              href="/experience"
              className="btn-primary inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium"
            >
              View work
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact"
              className="btn-outline inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium"
            >
              <Mail className="w-3.5 h-3.5" />
              Contact
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 text-sm text-slate-700 hover:text-blue-800 transition-colors px-2 py-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </Link>
          </div>

          <p className="mt-10 flex items-center gap-2 text-[13px] text-slate-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to opportunities
          </p>
        </div>
      </section>

      {/* ────────────────────── CURRENT FOCUS (asymmetric) ────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 sm:mb-12">
            <Eyebrow>
              <Sparkles className="w-3 h-3" />
              Current focus
            </Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              What I actually work on.
            </h2>
          </div>

          {/* Featured DFIR panel: blue-indigo gradient */}
          <article className="card-gradient relative overflow-hidden p-6 sm:p-10 mb-5">
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
                  across Windows and Linux environments, endpoint
                  investigation, IOC analysis, malware artefacts, incident
                  response workflows and evidence handling.
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

          {/* Supporting capabilities */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
            {supportingCapabilities.map((c) => {
              const Icon = c.icon;
              return (
                <article
                  key={c.title}
                  className="card group p-5 sm:p-6"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-blue-800" />
                    </span>
                    <h3 className="text-[15px] font-semibold text-slate-900 leading-snug group-hover:text-blue-800 transition-colors">
                      {c.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {c.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────── WHERE I WORK (editorial) ─────────────────────── */}
      <section className="section-soft py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <Eyebrow>
                <Briefcase className="w-3 h-3" />
                Where I work
              </Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
                Recent roles.
              </h2>
            </div>
            <Link
              href="/experience"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-blue-800 hover:text-blue-950 font-medium group"
            >
              <span className="border-b border-blue-800/40 group-hover:border-blue-800 pb-0.5">
                All experience
              </span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="divide-y divide-blue-200/60">
            {workPreview.map((w) => (
              <article
                key={w.company}
                className="grid grid-cols-1 md:grid-cols-[13rem_1fr] gap-4 md:gap-8 py-6 sm:py-7"
              >
                <div className="min-w-0">
                  <h3 className="text-[17px] sm:text-lg font-semibold text-slate-900 tracking-tight leading-tight">
                    {w.company}
                  </h3>
                  <p className="text-[13px] text-slate-600 mt-1">
                    {w.duration}
                  </p>
                </div>
                <div className="min-w-0">
                  <p className="text-[15px] sm:text-base font-medium text-slate-900">
                    {w.role}
                  </p>
                  <p className="text-[13px] text-blue-800 mt-0.5">
                    {w.context}
                  </p>
                  <p className="text-[14.5px] text-slate-700 mt-2 leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <Link
            href="/experience"
            className="sm:hidden mt-6 inline-flex items-center gap-1.5 text-sm text-blue-800 font-medium"
          >
            All experience
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ─────────────────────── SELECTED PROJECTS ─────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <Eyebrow>
                <FolderGit2 className="w-3 h-3" />
                Selected projects
              </Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
                Case files.
              </h2>
            </div>
            <Link
              href="/experience"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-blue-800 hover:text-blue-950 font-medium group"
            >
              <span className="border-b border-blue-800/40 group-hover:border-blue-800 pb-0.5">
                Full project list
              </span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
            {selectedProjects.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="card group p-0 flex flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-slate-200 overflow-hidden">
                  {p.img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.img}
                      alt={`${p.title} preview`}
                      className="absolute inset-0 w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-blue-800/70 mb-1.5">
                          {p.kind}
                        </p>
                        <FolderGit2 className="w-6 h-6 text-blue-500 mx-auto" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-blue-800">
                    {p.kind} · {p.period}
                  </p>
                  <h3 className="text-[16px] font-semibold text-slate-900 leading-snug mt-1 group-hover:text-blue-800 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed mt-2">
                    {p.desc}
                  </p>
                  <div className="mt-auto pt-4 flex items-center gap-1.5 text-sm text-blue-800 font-medium">
                    <span className="border-b border-blue-500/30 group-hover:border-blue-700 pb-0.5">
                      Explore
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── TERMINAL ─────────────────────────── */}
      <section className="section-soft py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 sm:mb-10 max-w-2xl">
            <Eyebrow>
              <TerminalIcon className="w-3 h-3" />
              Terminal
            </Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              Poke around.
            </h2>
            <p className="text-sm sm:text-base text-slate-700 mt-3 leading-relaxed">
              A small interactive terminal is embedded below. Type{" "}
              <code className="font-mono text-blue-800 bg-blue-100/60 border border-blue-200 rounded px-1.5 py-0.5">
                help
              </code>{" "}
              to see the available commands.
            </p>
          </div>
          <Terminal />
        </div>
      </section>

      {/* ─────────────────────── CERTIFICATIONS ─────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <Eyebrow>
                <BadgeCheck className="w-3 h-3" />
                Credentials
              </Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
                Certifications.
              </h2>
            </div>
            <Link
              href="/resume"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-blue-800 hover:text-blue-950 font-medium group"
            >
              <span className="border-b border-blue-800/40 group-hover:border-blue-800 pb-0.5">
                Full list on resume
              </span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {certPreview.map((c) => (
              <Link
                key={c.title}
                href="/resume"
                className="card group p-0 overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-white border-b border-slate-200 p-3">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 260px"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-blue-800">
                    {c.subtitle}
                  </p>
                  <p className="text-sm font-semibold text-slate-900 leading-snug mt-1 group-hover:text-blue-800 transition-colors">
                    {c.title}
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    {c.issuer}, <span className="text-slate-800 font-medium">{c.year}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── CLOSING CTA ─────────────────────── */}
      <section className="section-dark border-t border-slate-800 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-[color:var(--bg-dark-2)] to-slate-900 p-6 sm:p-12">
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
