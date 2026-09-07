"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Download, GraduationCap, Award, Monitor, Users, ZoomIn, BadgeCheck } from "lucide-react";
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

/* ── Certifications (BlueCape featured, then CLLMSE and AWS CCP) ── */
type Certification = {
  title: string;
  short: string;
  issuer: string;
  year: string;
  focus: string;
  img: string;
  featured?: boolean;
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
    featured: true,
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

const techCategories: { label: string; tools: string[]; style: "dark" | "blue" }[] = [
  {
    label: "Digital Forensics Incident Response (DFIR)",
    style: "dark",
    tools: [
      "EnCase",
      "FTK Imager",
      "PhotoRec",
      "Velociraptor",
      "CrowdStrike Falcon",
      "KAPE",
      "Magnet AXIOM",
      "Endpoint analysis (Windows/Linux IOC investigation)",
      "Velociraptor + LLM integration (MCP-based workflows)",
      "Large-scale cyber range simulation (40-VM environment)",
    ],
  },
  {
    label: "Malware Analysis",
    style: "dark",
    tools: [
      "Process Explorer",
      "Process Monitor",
      "Dependency Walker",
      "x64 Debuggers",
      "Behavioral malware analysis and reporting",
    ],
  },
  {
    label: "Network & Infrastructure Security",
    style: "dark",
    tools: [
      "Palo Alto Firewall configuration",
      "VPN setup (site-to-site)",
      "Internal network segmentation",
      "Access control design",
    ],
  },
  {
    label: "Cloud Security",
    style: "blue",
    tools: [
      "AWS Cloud fundamentals",
      "AWS Certified Cloud Practitioner",
    ],
  },
  {
    label: "Vulnerability Management",
    style: "dark",
    tools: [
      "Nmap",
      "Nikto",
      "Kali Linux",
      "Burp Suite",
      "OWASP ZAP",
      "CVSS-based vulnerability scoring and triage",
    ],
  },
  {
    label: "Programming Languages",
    style: "blue",
    tools: [
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "C#",
    ],
  },
];

const softSkills = [
  {
    skill: "Leadership & Management",
    desc: "NPCC Vice-Chairman, Altar Boys Society President, House Leader — event planning, logistics coordination, and training camp management.",
  },
  {
    skill: "Communication & Stakeholder Management",
    desc: "Cross-functional teamwork in cybersecurity projects; client communication, requirement gathering, documentation, and legal assistant experience.",
  },
  {
    skill: "Mentorship & Community Impact",
    desc: "Digital literacy volunteer (Singpass / HealthHub training for seniors), Tennis Coach, and Orientation Leader.",
  },
  {
    skill: "Analytical Thinking & Adaptability",
    desc: "Malware reverse engineering, CVSS scoring, firewall topology design, and rapid adoption of emerging technologies including LLM + DFIR integration.",
  },
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
    <div className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-screen overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

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
          className="bg-white rounded-2xl border border-slate-200 p-8 mb-8 shadow-sm hover:shadow-md transition-shadow duration-300"
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
          className="bg-white rounded-2xl border border-slate-200 p-8 mb-8 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <SectionHeader
            icon={BadgeCheck}
            title="Certifications"
            subtitle="Industry credentials, DFIR, AI security and cloud"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {certifications.map((cert, i) => {
              const isFeatured = !!cert.featured;
              return (
                <motion.article
                  key={cert.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`group bg-white rounded-xl overflow-hidden flex flex-col transition-all duration-300 ${
                    isFeatured
                      ? "md:col-span-3 border border-blue-200 shadow-md hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5 ring-1 ring-blue-500/10"
                      : "md:col-span-2 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setLightbox({ src: cert.img, alt: cert.title })}
                    className={`relative w-full bg-slate-50 border-b border-slate-100 group/img focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                      isFeatured ? "aspect-[16/10]" : "aspect-[4/3]"
                    }`}
                    aria-label={`View ${cert.title} certificate`}
                  >
                    <Image
                      src={cert.img}
                      alt={cert.title}
                      fill
                      sizes={isFeatured ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 40vw"}
                      className="object-contain p-3 group-hover/img:opacity-85 transition-opacity duration-200"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-200">
                      <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <ZoomIn className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </button>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 rounded px-1.5 py-0.5">
                        {cert.short}
                      </span>
                      {isFeatured && (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className={`font-semibold text-slate-900 leading-snug ${isFeatured ? "text-base" : "text-sm"}`}>
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
              );
            })}
          </div>
        </motion.section>

        {/* ── Awards & Achievements ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-slate-200 p-8 mb-8 shadow-sm hover:shadow-md transition-shadow duration-300"
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

        {/* ── Technical Proficiency ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-slate-200 p-8 mb-8 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <SectionHeader icon={Monitor} title="Technical Proficiency" subtitle="Tools, platforms, and technologies" />

          {techCategories.map((cat, catIdx) => (
            <div key={cat.label} className={catIdx < techCategories.length - 1 ? "mb-6" : ""}>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool) => (
                  <motion.span
                    key={tool}
                    whileHover={{ scale: 1.05 }}
                    className={
                      cat.style === "blue"
                        ? "px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono font-semibold rounded-lg cursor-default hover:bg-blue-100 hover:border-blue-300 transition-all duration-200"
                        : "px-3 py-1.5 bg-slate-100 text-slate-700 border border-slate-200 text-xs font-mono font-medium rounded-lg cursor-default hover:bg-slate-200 transition-all duration-200"
                    }
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </motion.section>

        {/* ── Professional Competencies ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <SectionHeader icon={Users} title="Professional Competencies" subtitle="Leadership, communication, and analytical skills" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {softSkills.map((item, i) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-blue-200 transition-colors duration-200"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{item.skill}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
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
