"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Download, GraduationCap, Award, Monitor, Users, ZoomIn } from "lucide-react";
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
    title: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    year: "2025",
    img: "/images/AWS%20CCP.jpg",
  },
  {
    title: "DFIR Foundations and Security Techniques",
    org: "BlueCape Security",
    year: "2025",
    img: "/images/Bluecape%20Security.jpg",
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

/* ── Reusable section header ── */
function SectionHeader({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="flex items-start gap-3 mb-8">
      <div className="w-10 h-10 bg-cyan-950/40 border border-cyan-800/30 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon className="w-5 h-5 text-cyan-400" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        {subtitle && <p className="text-slate-400 text-sm mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
}

export default function ResumePage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-900 min-h-screen overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-cyan-500 rounded-full blur-3xl opacity-[0.08] pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-blue-600 rounded-full blur-3xl opacity-[0.10] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[400px] h-[400px] bg-cyan-600 rounded-full blur-3xl opacity-[0.07] pointer-events-none" />
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
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Resume & Education
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto mb-6">
            Academic background, technical proficiencies, and achievements.
          </p>
          <a
            href="/EMMANUEL_CHANG_CV.pdf"
            download="EMMANUEL_CHANG_CV.pdf"
            className="glitch-btn inline-flex items-center gap-2 px-6 py-3 bg-cyan-700/70 border border-cyan-600/40 text-white text-sm font-medium rounded-xl hover:bg-cyan-600/80 hover:border-cyan-500/60 transition-all duration-200 shadow-md hover:shadow-cyan-500/20"
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
          className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mb-8 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
        >
          <SectionHeader icon={GraduationCap} title="Education" subtitle="Academic journey and qualifications" />

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10" />

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
                  <div className="absolute -left-[2.35rem] top-1.5 w-3 h-3 rounded-full bg-cyan-400 border-2 border-slate-900 shadow" />

                  <div className="bg-white/[0.03] rounded-xl p-5 border border-white/10 hover:border-cyan-500/30 hover:shadow-md hover:shadow-cyan-500/5 transition-all duration-200">
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                      {edu.year}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">{edu.school}</h3>
                    <p className="text-slate-300 font-medium">{edu.diploma}</p>

                    {(edu.gpa || edu.details.length > 0) && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {edu.gpa && (
                          <span className="text-xs bg-cyan-950/50 text-cyan-400 px-2.5 py-1 rounded-full font-medium border border-cyan-800/40">
                            {edu.gpa}
                          </span>
                        )}
                        {edu.details.map((detail) => (
                          <span key={detail} className="text-xs bg-white/5 text-slate-300 px-2.5 py-1 rounded-full border border-white/10">
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
                            className="relative h-56 rounded-lg overflow-hidden bg-slate-900/60 cursor-pointer group"
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

        {/* ── Awards & Achievements ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mb-8 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
        >
          <SectionHeader icon={Award} title="Awards & Achievements" subtitle="Recognition and accolades — latest first" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                <div
                  className="relative w-full aspect-[4/3] bg-slate-900/60 cursor-pointer group"
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
                  <p className="font-semibold text-white text-sm leading-snug">{award.title}</p>
                  <p className="text-slate-400 text-xs mt-1">{award.org}</p>
                  <span className="text-xs text-cyan-400 font-medium">{award.year}</span>
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
          className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mb-8 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
        >
          <SectionHeader icon={Monitor} title="Technical Proficiency" subtitle="Tools, platforms, and technologies" />

          {techCategories.map((cat, catIdx) => (
            <div key={cat.label} className={catIdx < techCategories.length - 1 ? "mb-6" : ""}>
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool) => (
                  <motion.span
                    key={tool}
                    whileHover={{ scale: 1.05 }}
                    className={
                      cat.style === "blue"
                        ? "px-3 py-1.5 bg-cyan-950/50 text-cyan-400 border border-cyan-800/40 text-xs font-semibold rounded-lg cursor-default hover:bg-cyan-600 hover:text-white hover:border-cyan-500 transition-all duration-200"
                        : "px-3 py-1.5 bg-white/5 text-slate-200 border border-white/10 text-xs font-medium rounded-lg cursor-default hover:bg-cyan-700/60 hover:border-cyan-600/50 hover:text-white transition-all duration-200"
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
          className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
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
                className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-cyan-500/30 hover:shadow-md hover:shadow-cyan-500/5 transition-all duration-200"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white text-sm">{item.skill}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{item.desc}</p>
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
