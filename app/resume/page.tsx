"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, GraduationCap, Award, Monitor, Users } from "lucide-react";

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

/* Reverse chronological — polytechnic first, then secondary */
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

/* Tech proficiency grouped by domain. */
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
      <div className="w-10 h-10 bg-blue-950/50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon className="w-5 h-5 text-blue-400" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        {subtitle && <p className="text-slate-400 text-sm mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-[#080d18] min-h-screen">
      <div className="max-w-5xl mx-auto">

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
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-500 transition-colors duration-200 shadow-md hover:shadow-blue-500/25"
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
          className="bg-slate-900 rounded-2xl border border-slate-800 p-8 mb-8 hover:border-slate-700 transition-all duration-300"
        >
          <SectionHeader icon={GraduationCap} title="Education" subtitle="Academic journey and qualifications" />

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-800" />

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
                  {/* Timeline dot */}
                  <div className="absolute -left-[2.35rem] top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-slate-900 shadow" />

                  <div className="bg-slate-800/40 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-200">
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                      {edu.year}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">{edu.school}</h3>
                    <p className="text-slate-300 font-medium">{edu.diploma}</p>

                    {/* Only render the pill row when there is something to show */}
                    {(edu.gpa || edu.details.length > 0) && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {edu.gpa && (
                          <span className="text-xs bg-blue-950/50 text-blue-400 px-2.5 py-1 rounded-full font-medium border border-blue-900/50">
                            {edu.gpa}
                          </span>
                        )}
                        {edu.details.map((detail) => (
                          <span key={detail} className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700/50">
                            {detail}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Certificate images — only shown for entries that have them */}
                    {edu.certificates.length > 0 && (
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        {edu.certificates.map((cert) => (
                          <div
                            key={cert.label}
                            className="relative h-56 rounded-lg overflow-hidden bg-slate-900"
                          >
                            <Image
                              src={cert.img}
                              alt={cert.label}
                              fill
                              sizes="(max-width: 640px) 50vw, 280px"
                              className="object-contain"
                            />
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
          className="bg-slate-900 rounded-2xl border border-slate-800 p-8 mb-8 hover:border-slate-700 transition-all duration-300"
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
                className="bg-slate-800/60 rounded-xl border border-slate-700/50 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                {/* Award image — full-width at top */}
                <div className="relative w-full aspect-[4/3] bg-slate-900">
                  <Image
                    src={award.img}
                    alt={award.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-white text-sm leading-snug">{award.title}</p>
                  <p className="text-slate-400 text-xs mt-1">{award.org}</p>
                  <span className="text-xs text-blue-400 font-medium">{award.year}</span>
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
          className="bg-slate-900 rounded-2xl border border-slate-800 p-8 mb-8 hover:border-slate-700 transition-all duration-300"
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
                        ? "px-3 py-1.5 bg-blue-950/50 text-blue-400 border border-blue-900/50 text-xs font-semibold rounded-lg cursor-default hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-200"
                        : "px-3 py-1.5 bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium rounded-lg cursor-default hover:bg-blue-700 hover:border-blue-600 hover:text-white transition-all duration-200"
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
          className="bg-slate-900 rounded-2xl border border-slate-800 p-8 hover:border-slate-700 transition-all duration-300"
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
                className="flex items-start gap-3 p-4 rounded-xl border border-slate-800 bg-slate-800/40 hover:border-blue-500/40 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-200"
              >
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white text-sm">{item.skill}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
