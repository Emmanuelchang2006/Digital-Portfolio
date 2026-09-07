"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import ImageLightbox from "@/components/ImageLightbox";

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
    title: "Certified LLM Security Expert (CLLMSE)",
    issuer: "Red Team Leaders",
    year: "2026",
    img: "/images/CLLMSE%20Certification.png",
  },
  {
    title: "DFIR Foundations and Security Techniques",
    issuer: "BlueCape Security",
    year: "2025",
    img: "/images/Bluecape%20Security.jpg",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2025",
    img: "/images/AWS%20CCP.jpg",
  },
];

const awards = [
  { title: 'Group-IB Outstanding Performance (6-Month Internship)', org: "Group-IB",                     year: "2025", img: "/images/Group%20IB%20Prize.jpg" },
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

const skillGroups: { label: string; items: string }[] = [
  {
    label: "Security Operations",
    items: "DFIR, Incident Response, IOC Investigation, Malware Analysis, Threat Intelligence",
  },
  {
    label: "Security Engineering",
    items: "Network Security, Secure Configuration, Authentication, Access Control, Vulnerability Assessment",
  },
  {
    label: "AI & Security",
    items: "LLM Security, AI Agents, MCP, AI-Assisted DFIR, Evidence-Grounded Workflows",
  },
  {
    label: "Cloud & Infrastructure",
    items: "AWS, Linux, Windows, Networking",
  },
  {
    label: "Engineering",
    items: "Python, TypeScript, JavaScript, Next.js, NestJS, PostgreSQL",
  },
  {
    label: "Professional",
    items: "Technical Analysis, Documentation, Communication, Problem Solving, Team Collaboration",
  },
];

export default function ResumePage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <header className="mb-14">
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-3">
            Resume
          </h1>
          <p className="text-slate-600 max-w-xl leading-relaxed">
            Education, certifications, awards and the technical toolkit
            I actually use.
          </p>
          <a
            href="/EMMANUEL_CHANG_CV.pdf"
            download="EMMANUEL_CHANG_CV.pdf"
            className="inline-flex items-center gap-1.5 mt-6 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-800 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Download PDF
          </a>
        </header>

        {/* EDUCATION */}
        <section className="mb-16">
          <h2 className="text-lg font-semibold text-slate-900 tracking-tight mb-6 pb-2 border-b border-slate-200">
            Education
          </h2>

          <div className="space-y-8">
            {education.map((edu, i) => (
              <div key={i}>
                <p className="text-xs font-mono text-slate-500 mb-1 tracking-wider">{edu.year}</p>
                <h3 className="text-[17px] font-semibold text-slate-900 leading-snug">{edu.school}</h3>
                <p className="text-slate-700 mt-0.5">{edu.diploma}</p>

                {(edu.gpa || edu.details.length > 0) && (
                  <ul className="mt-3 text-sm text-slate-600 space-y-1">
                    {edu.gpa && <li>{edu.gpa}</li>}
                    {edu.details.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                )}

                {edu.certificates.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
                    {edu.certificates.map((cert) => (
                      <button
                        type="button"
                        key={cert.label}
                        onClick={() => setLightbox({ src: cert.img, alt: cert.label })}
                        className="group text-left"
                      >
                        <div className="relative aspect-[4/3] bg-white border border-slate-200 rounded overflow-hidden group-hover:border-slate-400 transition-colors">
                          <Image
                            src={cert.img}
                            alt={cert.label}
                            fill
                            sizes="(max-width: 640px) 45vw, 200px"
                            className="object-contain p-2"
                          />
                        </div>
                        <p className="mt-1.5 text-[11px] text-slate-500 leading-tight">{cert.label}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="mb-16">
          <h2 className="text-lg font-semibold text-slate-900 tracking-tight mb-6 pb-2 border-b border-slate-200">
            Certifications
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <button
                type="button"
                key={cert.title}
                onClick={() => setLightbox({ src: cert.img, alt: cert.title })}
                className="group text-left"
              >
                <div className="relative aspect-[4/3] bg-white border border-slate-200 rounded overflow-hidden group-hover:border-slate-400 transition-colors">
                  <Image
                    src={cert.img}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 240px"
                    className="object-contain p-3"
                  />
                </div>
                <div className="mt-2">
                  <p className="text-sm font-medium text-slate-900 leading-snug">{cert.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {cert.issuer}, {cert.year}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* SKILLS & CAPABILITIES */}
        <section className="mb-16">
          <h2 className="text-lg font-semibold text-slate-900 tracking-tight mb-6 pb-2 border-b border-slate-200">
            Skills &amp; Capabilities
          </h2>

          <dl className="divide-y divide-slate-100">
            {skillGroups.map((g) => (
              <div key={g.label} className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 py-3">
                <dt className="text-sm font-medium text-slate-900">{g.label}</dt>
                <dd className="text-sm text-slate-600 leading-relaxed">{g.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* AWARDS */}
        <section>
          <h2 className="text-lg font-semibold text-slate-900 tracking-tight mb-6 pb-2 border-b border-slate-200">
            Awards &amp; Achievements
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {awards.map((award, i) => (
              <button
                type="button"
                key={i}
                onClick={() => setLightbox({ src: award.img, alt: award.title })}
                className="group text-left"
              >
                <div className="relative aspect-[4/3] bg-white border border-slate-200 rounded overflow-hidden group-hover:border-slate-400 transition-colors">
                  <Image
                    src={award.img}
                    alt={award.title}
                    fill
                    sizes="(max-width: 640px) 45vw, 200px"
                    className="object-contain p-2"
                  />
                </div>
                <div className="mt-1.5">
                  <p className="text-[13px] font-medium text-slate-900 leading-snug">{award.title}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{award.org}, {award.year}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

      </div>

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
    </div>
  );
}
