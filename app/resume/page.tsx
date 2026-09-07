"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Download, GraduationCap, BadgeCheck, Award, Sparkles, ArrowRight } from "lucide-react";
import ImageLightbox from "@/components/ImageLightbox";
import ZoomableImage from "@/components/ZoomableImage";

/* Data */

const education = [
  {
    year: "2023 to 2026",
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
    year: "2019 to 2022",
    school: "Maris Stella High School",
    diploma: "GCE O-Level Certificate",
    gpa: "",
    details: [],
    certificates: [],
  },
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

const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Cybersecurity & DFIR",
    items: [
      "Digital Forensics",
      "Incident Response",
      "Malware Analysis",
      "Threat Analysis",
      "Security Assessment",
    ],
  },
  {
    label: "AI & Security",
    items: [
      "AI Security",
      "AI-assisted Security Analysis",
      "AI Agent Workflows",
      "Security Automation",
      "Evidence-grounded Analysis",
    ],
  },
  {
    label: "Security Engineering",
    items: [
      "Authentication",
      "RBAC",
      "Secure Configuration",
      "Network Security",
      "Cryptography",
    ],
  },
  {
    label: "Development & Platforms",
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
    <div className="mb-8 sm:mb-10">
      <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-700 mb-2 flex items-center gap-2">
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
      <section className="hero-glow pt-28 sm:pt-32 pb-8 sm:pb-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-700 mb-2">
            Resume
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight mb-4 leading-[1.05]">
            Education, certifications and skills.
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-6">
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
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="Academics" title="Education" icon={GraduationCap} />

          <div className="space-y-6">
            {education.map((edu, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="flex items-baseline flex-wrap gap-3 mb-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                    {edu.school}
                  </h3>
                  <span className="text-xs font-mono text-slate-500 tracking-wider">
                    {edu.year}
                  </span>
                </div>
                <p className="text-slate-700 text-[15px]">{edu.diploma}</p>

                {(edu.gpa || edu.details.length > 0) && (
                  <ul className="mt-3 text-sm text-slate-600 space-y-1">
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
                    <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-3">
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
                          <p className="mt-1.5 text-[11px] text-slate-500 leading-tight">
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

      {/* Certifications */}
      <section className="section-tinted border-y border-blue-100/70 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="Credentials" title="Certifications." icon={BadgeCheck} />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {certifications.map((cert) => (
              <article
                key={cert.title}
                className="group rounded-2xl bg-white border border-blue-100 overflow-hidden flex flex-col hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-300"
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
                  <p className="text-[11px] font-mono uppercase tracking-wider text-blue-700 mb-1">
                    {cert.subtitle}
                  </p>
                  <p className="text-sm font-semibold text-slate-900 leading-snug group-hover:text-blue-800 transition-colors">
                    {cert.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {cert.issuer}, <span className="text-slate-700 font-medium">{cert.year}</span>
                  </p>
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {cert.focus}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Capabilities (dark navy, 2x2 grouped cards) */}
      <section className="section-dark-glow py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-dark opacity-40 pointer-events-none" aria-hidden />
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-300 mb-2 flex items-center gap-2">
                <Sparkles className="w-3 h-3" />
                What I bring
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Skills &amp; Capabilities.
              </h2>
            </div>
            <p className="hidden sm:block text-sm text-slate-300 max-w-xs text-right">
              Grouped by domain. Only areas I actually work in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {skillGroups.map((g) => (
              <div
                key={g.label}
                className="rounded-2xl border border-slate-800 bg-white/[0.04] backdrop-blur-sm p-5 sm:p-6 hover:border-blue-500/60 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-blue-400 to-indigo-500" />
                  <h3 className="text-[15px] font-semibold text-white tracking-tight">
                    {g.label}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-[14px] text-slate-200 leading-snug">
                      <span className="w-1 h-1 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="Recognition" title="Awards &amp; Achievements." icon={Award} />

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
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {award.org}, <span className="text-slate-700 font-medium">{award.year}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              For the full curriculum vitae, download the PDF.
            </p>
            <a
              href="/EMMANUEL_CHANG_CV.pdf"
              download="EMMANUEL_CHANG_CV.pdf"
              className="inline-flex items-center gap-1.5 text-sm text-blue-700 hover:text-blue-900 font-medium"
            >
              Download PDF
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
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
