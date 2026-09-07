"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import Terminal from "@/components/Terminal";

const capabilities = [
  {
    n: "01",
    title: "Digital Forensics & Incident Response",
    desc:
      "DFIR-focused security engineering across Windows and Linux environments. Endpoint investigation, IOC analysis, malware artefacts, incident response workflows and evidence handling.",
    direction: "Currently exploring agentic DFIR and AI-assisted forensic workflows.",
  },
  {
    n: "02",
    title: "Security Engineering",
    desc:
      "Applying secure-configuration principles to real infrastructure. Authentication, access control, secure encryption practices (AES, SSH), and translating security requirements into concrete technical decisions.",
  },
  {
    n: "03",
    title: "AI Security & Assurance",
    desc:
      "Security assessment and validation of AI-enabled cybersecurity systems. Capability-based access control, evidence-grounded assurance workflows, and evaluation of AI-agent behaviour against expected outputs.",
  },
  {
    n: "04",
    title: "Threat Intelligence & Offensive Security",
    desc:
      "Multi-source IOC enrichment and verdict aggregation. Web exploitation, cryptography and OSINT challenges through Hack The Box, BrainHack and academic pentest work.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-5 sm:gap-6 mb-8">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-1 ring-slate-200 flex-shrink-0">
              <Image
                src="/profile.jpg"
                alt="Emmanuel Chang"
                width={80}
                height={80}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="min-w-0 pt-1">
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-slate-500 mb-1.5">
                Cybersecurity / Security Engineering
              </p>
              <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
                Emmanuel Chang
              </h1>
            </div>
          </div>

          <p className="text-[17px] sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
            DFIR foundation with experience across cybersecurity analysis, AI
            security engineering, incident management systems and security
            assurance. Currently a Diploma student in Cybersecurity &amp; Digital
            Forensics at Ngee Ann Polytechnic.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-8">
            <Link
              href="/experience"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-800 transition-colors"
            >
              View experience
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-slate-900 text-sm font-medium rounded-md border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </Link>
            <Link
              href="/contact"
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors px-1"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">
              Capabilities
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {capabilities.map((c) => (
              <div
                key={c.n}
                className="grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_1fr] gap-4 sm:gap-6 py-6 sm:py-7"
              >
                <div className="font-mono text-xs text-slate-400 pt-1">
                  {c.n}
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-slate-900 mb-2 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-[15px] text-slate-600 leading-relaxed max-w-xl">
                    {c.desc}
                  </p>
                  {c.direction && (
                    <p className="text-sm text-slate-500 mt-2 max-w-xl">
                      <span className="text-slate-400">Direction: </span>
                      {c.direction}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TERMINAL */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">
              Terminal
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              A quick way to look around. Try <code className="font-mono text-slate-700">help</code>.
            </p>
          </div>
          <Terminal />
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-200">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 tracking-tight">
              Available for internship and part-time roles.
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Cybersecurity, DFIR, and AI-security opportunities welcome.
            </p>
          </div>
          <Link
            href="/contact"
            className="self-start inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-800 transition-colors"
          >
            Get in touch
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
