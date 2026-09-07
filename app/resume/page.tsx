"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Download, GraduationCap, Award, Users, ZoomIn, BadgeCheck, Shield, Fingerprint, Cpu, Cloud, Wrench } from "lucide-react";
import ImageLightbox from "@/components/ImageLightbox";

/* ── Data ── */

const education = [
  {
    year: "2023 – 2026",
    school: "Ngee Ann Polytechnic",
    diploma: "Diploma in Cybersecurity & Digital Forensics",
    gpa: "GPA: 3.94 / 4.00",
    details: [
      "Specialisation: AI for Cybersecurity",
      "Minor in Entrepreneurship",
      "Certified in Advanced Computing Mathematics",
    ],
    certificates: [
      { label: "Diploma Certificate",                  img: "/images/Diploma%20Certificate.jpg" },
      { label: "Advanced Computing Mathematics",       img: "/images/Advance%20Maths%20Cert.jpg" },
      { label: "AI for Cybersecurity Specialisation",  img: "/images/AI%20For%20cybersecurity%20Specialisation.jpg" },
      { label: "Minor in Entrepreneurship",            img: "/images/Minor%20in%20entrepreneurship.jpg" },
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

const awards = [
  {
    title: 'Group IB "Outstanding Performance for 6 Month Internship" Award',
    org: "Group-IB",
    year: "2025",
    img: "/images/Group%20IB%20Prize.jpg",
  },
  {
    title: "Ngee Ann Polytechnic Director's List AY2024/2025 (Oct Semester)",
    org: "Ngee Ann Polytechnic",
    year: "2025",
    img: "/images/Director%20List%2020242025%20October.jpg",
  },
  {
    title: "EDUSAVE Certificate of Academic Achievement 2025",
    org: "Ministry of Education",
    year: "2025",
    img: "/images/EDUSAVE%20Certificate%20of%20Achievement%202025.jpg",
  },
  {
    title: "EDUSAVE Merit Bursary 2025",
    org: "Ministry of Education",
    year: "2025",
    img: "/images/EDUSAVE%20Merit%20bursary%202025.jpg",
  },
  {
    title: "Ngee Ann Polytechnic Director's List AY2024/2025 (Apr Semester)",
    org: "Ngee Ann Polytechnic",
    year: "2024",
    img: "/images/Director%20List%2020242025%20April.jpg",
  },
  {
    title: "Ngee Ann Polytechnic Director's List AY2023/2024 (Oct Semester)",
    org: "Ngee Ann Polytechnic",
    year: "2024",
    img: "/images/Director%20List%2020232024%20.jpg",
  },
  {
    title: "EDUSAVE Certificate of Academic Achievement 2024",
    org: "Ministry of Education",
    year: "2024",
    img: "/images/EDUSAVE%20Certificate%20of%20Achievement%202024.jpg",
  },
  {
    title: "EAGLES Award",
    org: "Maris Stella High School",
    year: "2022",
    img: "/images/EAGLES.jpg",
  },
  {
    title: "SPF Award",
    org: "Singapore Police Force",
    year: "2022",
    img: "/images/SPF%20AWARD.jpg",
  },
  {
    title: "Edusave Scholarship 2020",
    org: "Ministry of Education",
    year: "2020",
    img: "/images/EDUSAVE%20Scholarship%202020.jpg",
  },
  {
    title: "Edusave Certificate of Achievement 2019",
    org: "Ministry of Education",
    year: "2019",
    img: "/images/EDUSAVE%20Certificate%20of%20achievement%202019.jpg",
  },
  {
    title: "Edusave Merit Bursary 2019",
    org: "Ministry of Education",
    year: "2019",
    img: "/images/EDUSAVE%20Merit%20bursary%202019.jpg",
  },
];

/* ── Certifications: three equal-footprint credential tiles ── */
type Certification = {
  title: string;
  short: string;
  issuer: string;
  year: string;
  focus: string;
  img: string;
};

const certifications: Certification[] = [
  {
    title: "DFIR Foundations and Techniques",
    short: "DFIR Foundations",
    issuer: "Blue Cape Security",
    year: "2025",
    focus:
      "Digital forensics fundamentals, incident response methodology and structured evidence handling.",
    img: "/images/Bluecape%20Security.jpg",
  },
  {
    title: "Certified LLM Security Expert (CLLMSE)",
    short: "CLLMSE",
    issuer: "Red Team Leaders",
    year: "2026",
    focus:
      "LLM red-team fundamentals, prompt-injection and adversarial testing for AI-enabled systems.",
    img: "/images/CLLMSE%20Certification.png",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    short: "AWS CCP",
    issuer: "Amazon Web Services",
    year: "2025",
    focus:
      "Cloud fundamentals, shared responsibility, and core AWS services.",
    img: "/images/AWS%20CCP.jpg",
  },
];

/* ── Skills (editorial capability map: 5 technical groups + soft skills) ── */
const technicalSkills: { icon: React.ElementType; label: string; items: string }[] = [
  {
    icon: Shield,
    label: "Cybersecurity",
    items:
      "Security Assessment · Authentication · RBAC · Capability-based Authorization · Secure Configuration · Vulnerability Assessment",
  },
  {
    icon: Fingerprint,
    label: "Digital Forensics / DFIR",
    items:
      "Digital Forensics · Incident Response · IOC Investigation · Malware Analysis · MITRE ATT&CK",
  },
  {
    icon: Cpu,
    label: "AI & Security",
    items:
      "LLM Security · AI Agent Evaluation · Evidence-grounded Assurance · MCP · AI-Assisted DFIR",
  },
  {
    icon: Cloud,
    label: "Cloud / Infrastructure",
    items:
      "AWS · Windows · Linux · Networking · Palo Alto Firewall · Site-to-site VPN",
  },
  {
    icon: Wrench,
    label: "Tools / Technologies",
    items:
      "Velociraptor · KAPE · FTK Imager · Magnet AXIOM · EnCase · Burp Suite · OWASP ZAP · Nmap · Wireshark · Python · TypeScript · Next.js · NestJS · PostgreSQL",
  },
];

const softSkills = [
  "Analytical Thinking",
  "Problem Solving",
  "Investigation",
  "Communication",
  "Documentation",
  "Teamwork",
  "Adaptability",
];

function SectionHeader({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="flex items-start gap-3 mb-8">
      <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        {subtitle && <p className="text-slate-500 text-sm mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
}

export default function ResumePage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="relative max-w-5xl mx-auto">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-3">
            Resume & Education
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto mb-6">
            Academic background, technical proficiencies, and achievements.
          </p>
          <a
            href="/EMMANUEL_CHANG_CV.pdf"
            download="EMMANUEL_CHANG_CV.pdf"
            className="glitch-btn inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-mono font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-sm"
          >
            <Download className="w-4 h-4" />
            Download Resume (PDF)
          </a>
        </motion.div>

        {/* ── Education Timeline ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/70 p-8 mb-8 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <SectionHeader icon={GraduationCap} title="Education" subtitle="Academic journey and qualifications" />

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200" />

            <div className="space-y-8 pl-12">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[2.35rem] top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-white shadow-sm" />

                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-blue-200 transition-colors duration-200">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      {edu.year}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-1">{edu.school}</h3>
                    <p className="text-slate-700 font-medium">{edu.diploma}</p>

                    {(edu.gpa || edu.details.length > 0) && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {edu.gpa && (
                          <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-medium border border-blue-200">
                            {edu.gpa}
                          </span>
                        )}
                        {edu.details.map((detail) => (
                          <span key={detail} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full border border-slate-200">
                            {detail}
                          </span>
                        ))}
                      </div>
                    )}

                    {edu.certificates.length > 0 && (
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        {edu.certificates.map((cert) => (
                          <div
                            key={cert.label}
                            className="relative h-56 rounded-lg overflow-hidden bg-slate-100 cursor-pointer group"
                            onClick={() => setLightbox({ src: cert.img, alt: cert.label })}
                          >
                            <Image
                              src={cert.img}
                              alt={cert.label}
                              fill
                              sizes="(max-width: 640px) 50vw, 280px"
                              className="object-contain group-hover:opacity-80 transition-opacity duration-200"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20">
                                <ZoomIn className="w-5 h-5 text-white" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── Certifications (BlueCape featured, then CLLMSE, then AWS CCP) ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/70 p-8 mb-8 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <SectionHeader
            icon={BadgeCheck}
            title="Certifications"
            subtitle="Industry credentials, DFIR, AI security and cloud"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.article
                key={cert.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group bg-white rounded-xl overflow-hidden flex flex-col border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Same-size frame for every certificate: aspect-[4/3], object-contain, consistent padding + background */}
                <button
                  type="button"
                  onClick={() => setLightbox({ src: cert.img, alt: cert.title })}
                  className="relative w-full aspect-[4/3] bg-slate-50 border-b border-slate-100 group/img focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label={`View ${cert.title} certificate`}
                >
                  <Image
                    src={cert.img}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-contain p-4 group-hover/img:opacity-85 transition-opacity duration-200"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-200">
                    <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </button>
                <div className="p-4 flex flex-col flex-1">
                  <span className="self-start text-[10px] font-mono uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 rounded px-1.5 py-0.5 mb-1.5">
                    {cert.short}
                  </span>
                  <p className="text-sm font-semibold text-slate-900 leading-snug">
                    {cert.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {cert.issuer} · <span className="text-slate-700 font-medium">{cert.year}</span>
                  </p>
                  <p className="text-[12.5px] text-slate-500 mt-2 leading-relaxed">
                    {cert.focus}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* ── Awards & Achievements ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/70 p-8 mb-8 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <SectionHeader icon={Award} title="Awards & Achievements" subtitle="Recognition and accolades, latest first" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                <div
                  className="relative w-full aspect-[4/3] bg-slate-50 cursor-pointer group"
                  onClick={() => setLightbox({ src: award.img, alt: award.title })}
                >
                  <Image
                    src={award.img}
                    alt={award.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain group-hover:opacity-80 transition-opacity duration-200"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-slate-900 text-sm leading-snug">{award.title}</p>
                  <p className="text-slate-500 text-xs mt-1">{award.org}</p>
                  <span className="text-xs text-blue-600 font-medium">{award.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Skills (unified: Technical + Soft, compact editorial) ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/70 p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <SectionHeader icon={Users} title="Skills" subtitle="Technical capability and how I work" />

          {/* Technical — editorial capability map with small blue icon markers */}
          <div className="relative">
            <p className="text-[11px] font-mono font-semibold text-blue-700 uppercase tracking-[0.22em] mb-5">
              Technical
            </p>

            <div className="divide-y divide-slate-200/60">
              {technicalSkills.map((group) => {
                const Icon = group.icon;
                return (
                  <div
                    key={group.label}
                    className="grid grid-cols-[auto_1fr] sm:grid-cols-[14rem_1fr] gap-x-4 sm:gap-x-6 gap-y-1 py-4 sm:py-4"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-8 h-8 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-blue-700" />
                      </span>
                      <span className="text-sm font-semibold text-slate-900 leading-tight">
                        {group.label}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed sm:pt-1.5 col-span-2 sm:col-span-1 pl-[2.65rem] sm:pl-0">
                      {group.items}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Professional competencies — distinct but compact */}
          <div className="mt-10 pt-8 border-t border-slate-200/70">
            <p className="text-[11px] font-mono font-semibold text-blue-700 uppercase tracking-[0.22em] mb-3">
              Professional Competencies
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              {softSkills.map((s, i) => (
                <span key={s}>
                  <span className="text-slate-800">{s}</span>
                  {i < softSkills.length - 1 && (
                    <span className="text-blue-400 mx-2">·</span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </motion.section>

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
