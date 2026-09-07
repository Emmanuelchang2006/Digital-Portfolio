"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Download, GraduationCap, BadgeCheck, Award, Sparkles, ArrowRight, Briefcase } from "lucide-react";
import ImageLightbox from "@/components/ImageLightbox";
import ZoomableImage from "@/components/ZoomableImage";

/* ────────── Data ────────── */

const education = [
  {
    year: "2023 – 2026",
    school: "Ngee Ann Polytechnic",
    diploma: "Diploma in Cybersecurity & Digital Forensics",
    gpa: "GPA 3.94 / 4.00",
    details: [
      "Specialisation in AI for Cybersecurity",
      "Minor in Entrepreneurship",
      "Advanced Computing Mathematics",
    ],
    certificates: [
      { label: "Diploma Certificate",                 img: "/images/Diploma%20Certificate.jpg" },
      { label: "Advanced Computing Mathematics",      img: "/images/Advance%20Maths%20Cert.jpg" },
      { label: "AI for Cybersecurity Specialisation", img: "/images/AI%20For%20cybersecurity%20Specialisation.jpg" },
      { label: "Minor in Entrepreneurship",           img: "/images/Minor%20in%20entrepreneurship.jpg" },
    ],
  },
  {
    year: "2019 – 2022",
    school: "Maris Stella High School",
    diploma: "GCE O-Level Certificate",
    gpa: "",
    details: [],
    certificates: [],
  },
];

const workCompact = [
  {
    company: "Tangent9",
    role: "AI Security Engineer",
    context: "Information Technology · Contract",
    duration: "July – September 2026",
    desc:
      "Contributed to an AI-powered incident management platform. Focus on security assessment, integration and validation of AI-enabled cybersecurity workflows.",
  },
  {
    company: "Telsecure",
    role: "Cybersecurity Analyst",
    context: "Cyber Security · Contractor",
    duration: "August – September 2026",
    desc:
      "Applied cybersecurity knowledge to technical configuration work. Focus on secure-configuration principles across SSH, encryption practices and infrastructure requirements.",
  },
  {
    company: "Apollo Healthcare Resources",
    role: "Sales Intern",
    context: "Sales · Internship",
    duration: "February – April 2026",
    desc:
      "End-to-end sales cycle including product sourcing, pricing negotiation and client fulfilment. Prepared COAs, PIs and Sales Contracts.",
  },
  {
    company: "ST Engineering Info-Security",
    role: "Junior DFIR Specialist Intern",
    context: "Cyber Security · Internship",
    duration: "September 2025 – January 2026",
    desc:
      "Endpoint IOC investigation across Windows and Linux, agentic-DFIR prototyping with Velociraptor and LLM tooling via MCP.",
  },
  {
    company: "R. Tiwary & Company Advocates",
    role: "Freelance Legal Assistant",
    context: "Law Firm · Freelance",
    duration: "January 2023 – December 2025",
    desc:
      "Supported drafting, formatting and preparation of legal documents. Reinforced attention-to-detail and structured-writing habits.",
  },
];

const awards = [
  { title: "Group-IB Outstanding Performance (6-Month Internship)", org: "Group-IB",                     year: "2025", img: "/images/Group%20IB%20Prize.jpg" },
  { title: "Director's List, AY2024/25 (Oct)",                       org: "Ngee Ann Polytechnic",         year: "2025", img: "/images/Director%20List%2020242025%20October.jpg" },
  { title: "EDUSAVE Certificate of Academic Achievement",            org: "Ministry of Education",        year: "2025", img: "/images/EDUSAVE%20Certificate%20of%20Achievement%202025.jpg" },
  { title: "EDUSAVE Merit Bursary",                                  org: "Ministry of Education",        year: "2025", img: "/images/EDUSAVE%20Merit%20bursary%202025.jpg" },
  { title: "Director's List, AY2024/25 (Apr)",                       org: "Ngee Ann Polytechnic",         year: "2024", img: "/images/Director%20List%2020242025%20April.jpg" },
  { title: "Director's List, AY2023/24",                             org: "Ngee Ann Polytechnic",         year: "2024", img: "/images/Director%20List%2020232024%20.jpg" },
  { title: "EDUSAVE Certificate of Academic Achievement",            org: "Ministry of Education",        year: "2024", img: "/images/EDUSAVE%20Certificate%20of%20Achievement%202024.jpg" },
  { title: "EAGLES Award",                                           org: "Maris Stella High School",     year: "2022", img: "/images/EAGLES.jpg" },
  { title: "SPF Award",                                              org: "Singapore Police Force",       year: "2022", img: "/images/SPF%20AWARD.jpg" },
  { title: "EDUSAVE Scholarship",                                    org: "Ministry of Education",        year: "2020", img: "/images/EDUSAVE%20Scholarship%202020.jpg" },
  { title: "EDUSAVE Certificate of Achievement",                     org: "Ministry of Education",        year: "2019", img: "/images/EDUSAVE%20Certificate%20of%20achievement%202019.jpg" },
  { title: "EDUSAVE Merit Bursary",                                  org: "Ministry of Education",        year: "2019", img: "/images/EDUSAVE%20Merit%20bursary%202019.jpg" },
];

const certifications = [
  {
    title: "Certified LLM Security Expert",
    subtitle: "CLLMSE",
    issuer: "Red Team Leaders",
    year: "2026",
    focus: "LLM red-team fundamentals, prompt-injection and adversarial testing.",
    img: "/images/CLLMSE%20Certification.png",
  },
  {
    title: "DFIR Foundations and Security Techniques",
    subtitle: "DFIR Foundations",
    issuer: "BlueCape Security",
    year: "2025",
    focus: "Digital forensics fundamentals and incident response methodology.",
    img: "/images/Bluecape%20Security.jpg",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    subtitle: "AWS CCP",
    issuer: "Amazon Web Services",
    year: "2025",
    focus: "Cloud fundamentals, shared responsibility, and core AWS services.",
    img: "/images/AWS%20CCP.jpg",
  },
];

const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Security & DFIR",
    items: [
      "Digital Forensics",
      "Incident Response",
      "Security Analysis",
      "Threat Analysis",
      "Security Assessment",
    ],
  },
  {
    label: "AI Security",
    items: [
      "AI Security",
      "AI Agent Workflows",
      "Evidence-grounded Analysis",
      "Security Automation",
      "AI Assurance",
    ],
  },
  {
    label: "Security Engineering",
    items: [
      "Authentication",
      "RBAC",
      "Secure Configuration",
      "Cryptography",
      "API Security",
    ],
  },
  {
    label: "Development",
    items: [
      "Python",
      "TypeScript",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Git / GitHub",
    ],
  },
];

/* ────────── Helpers ────────── */

function SectionHeader({
  eyebrow,
  title,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  icon?: React.ElementType;
}) {
  return (
    <div className="mb-10 sm:mb-12">
      <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-800 mb-2 flex items-center gap-2">
        {Icon && <Icon className="w-3 h-3" />}
        {eyebrow}
      </p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
        {title}
      </h2>
    </div>
  );
}

export default function ResumePage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      {/* Header */}
      <section className="hero-glow pt-32 sm:pt-40 pb-8 sm:pb-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-800 mb-2">
            Resume
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight mb-4 leading-[1.05]">
            Education, experience, awards and skills.
          </h1>
          <p className="text-slate-700 max-w-2xl leading-relaxed">
            A structured summary of my technical background. For the full case
            files, see the Experience page.
          </p>
          <div className="mt-8">
            <a
              href="/EMMANUEL_CHANG_CV.pdf"
              download="EMMANUEL_CHANG_CV.pdf"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="Academics" title="Education" icon={GraduationCap} />

          <div className="space-y-6">
            {education.map((edu, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-blue-200/70 p-6 sm:p-8 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="flex items-baseline flex-wrap gap-3 mb-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                    {edu.school}
                  </h3>
                  <span className="text-[13px] text-slate-600">{edu.year}</span>
                </div>
                <p className="text-slate-800 text-[15px]">{edu.diploma}</p>

                {(edu.gpa || edu.details.length > 0) && (
                  <ul className="mt-3 text-sm text-slate-700 space-y-1">
                    {edu.gpa && (
                      <li className="flex items-baseline gap-2">
                        <span className="text-blue-500 select-none">·</span>
                        <span className="font-semibold text-blue-800">{edu.gpa}</span>
                      </li>
                    )}
                    {edu.details.map((d) => (
                      <li key={d} className="flex items-baseline gap-2">
                        <span className="text-blue-500 select-none">·</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {edu.certificates.length > 0 && (
                  <div className="mt-6">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-3">
                      Certificates
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {edu.certificates.map((cert) => (
                        <div key={cert.label}>
                          <ZoomableImage
                            src={cert.img}
                            alt={cert.label}
                            onOpen={() => setLightbox({ src: cert.img, alt: cert.label })}
                            aspect="aspect-[4/3]"
                            fit="contain"
                            padded
                            sizes="(max-width: 640px) 45vw, 200px"
                            radius="rounded-xl"
                          />
                          <p className="mt-1.5 text-[11px] text-slate-600 leading-tight">
                            {cert.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience compact (editorial) */}
      <section className="section-soft py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="Career" title="Experience" icon={Briefcase} />

          <div className="divide-y divide-blue-200/60">
            {workCompact.map((w, i) => (
              <article
                key={i}
                className="grid grid-cols-1 md:grid-cols-[13rem_1fr] gap-4 md:gap-8 py-6 sm:py-7 row-hover px-3 sm:px-4 -mx-3 sm:-mx-4"
              >
                <div className="min-w-0">
                  <h3 className="text-[17px] sm:text-lg font-semibold text-slate-900 tracking-tight leading-tight">
                    {w.company}
                  </h3>
                  <p className="text-[13.5px] text-slate-600 mt-1.5">
                    {w.duration}
                  </p>
                </div>
                <div className="min-w-0">
                  <p className="text-[15px] font-semibold text-slate-900">
                    {w.role}
                  </p>
                  <p className="text-[13.5px] text-blue-800 mt-0.5">
                    {w.context}
                  </p>
                  <p className="text-[14.5px] text-slate-700 mt-2 leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center sm:text-left">
            <a
              href="/experience"
              className="inline-flex items-center gap-1.5 text-sm text-blue-800 hover:text-blue-950 font-medium group"
            >
              <span className="border-b border-blue-800/40 group-hover:border-blue-800 pb-0.5">
                See full experience with case files
              </span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Awards & Achievements (BEFORE certifications) */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="Recognition" title="Awards & Achievements" icon={Award} />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {awards.map((award, i) => (
              <div key={i} className="flex flex-col">
                <ZoomableImage
                  src={award.img}
                  alt={award.title}
                  onOpen={() => setLightbox({ src: award.img, alt: award.title })}
                  aspect="aspect-[4/3]"
                  fit="contain"
                  padded
                  sizes="(max-width: 640px) 45vw, 220px"
                  radius="rounded-xl"
                />
                <div className="mt-2">
                  <p className="text-[13px] font-medium text-slate-900 leading-snug">
                    {award.title}
                  </p>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    {award.org}, <span className="text-slate-800 font-medium">{award.year}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications (AFTER awards) */}
      <section className="section-soft py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="Credentials" title="Certifications" icon={BadgeCheck} />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {certifications.map((cert) => (
              <article
                key={cert.title}
                className="group rounded-2xl bg-white border border-blue-200/70 overflow-hidden flex flex-col hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/15 hover:-translate-y-0.5 transition-all duration-300"
              >
                <ZoomableImage
                  src={cert.img}
                  alt={cert.title}
                  onOpen={() => setLightbox({ src: cert.img, alt: cert.title })}
                  aspect="aspect-[4/3]"
                  fit="contain"
                  padded
                  sizes="(max-width: 640px) 100vw, 260px"
                  radius="rounded-none"
                  className="border-0 border-b border-slate-200 rounded-none"
                />
                <div className="p-5">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-blue-800 mb-1">
                    {cert.subtitle}
                  </p>
                  <p className="text-sm font-semibold text-slate-900 leading-snug group-hover:text-blue-800 transition-colors">
                    {cert.title}
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    {cert.issuer}, <span className="text-slate-800 font-medium">{cert.year}</span>
                  </p>
                  <p className="text-xs text-slate-700 mt-2.5 leading-relaxed">
                    {cert.focus}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Capabilities (atmospheric capability map) */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="What I bring" title="Skills & Capabilities" icon={Sparkles} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 sm:gap-y-10">
            {skillGroups.map((g) => (
              <div key={g.label}>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-blue-200/70">
                  <span className="w-1 h-5 rounded-full bg-gradient-to-b from-blue-500 to-indigo-600" />
                  <h3 className="text-[15px] font-semibold text-slate-900 tracking-tight">
                    {g.label}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2.5 text-[14.5px] text-slate-700 leading-snug"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <ImageLightbox
            key="resume-lightbox"
            src={lightbox.src}
            alt={lightbox.alt}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
