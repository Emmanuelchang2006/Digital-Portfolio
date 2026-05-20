"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Briefcase,
  FolderGit2,
  Swords,
  HeartHandshake,
  ExternalLink,
  Calendar,
  MapPin,
  Tag,
} from "lucide-react";

/* ── Data ── */
const internships = [
  /* Apollo first (most recent), then ST Engineering, then Freelance */
  {
    role: "Sales Intern",
    company: "Apollo Healthcare Resources",
    period: "Feb 2026 – Apr 2026",
    location: "Singapore",
    type: "Internship",
    desc: "Managed end-to-end sales cycle including sourcing pharmaceutical products, negotiating pricing, and client fulfilment. Prepared Certificates of Analysis (COA), Proforma Invoices (PI), and Sales Contracts (SC). Maintained client relationships and supported product promotion and sales growth.",
    tags: ["Microsoft Word", "Microsoft Excel"],
    img: undefined,
  },
  {
    role: "Junior Digital Forensics & Incident Response Specialist Intern",
    company: "ST Engineering Info-Security Pte Ltd",
    period: "Sep 2025 – Jan 2026",
    location: "Singapore",
    type: "Internship",
    desc: "Performed forensic casework and live incident response on Windows and Linux endpoints to identify Indicators of Compromise (IOCs). Designed and built a production-ready 40-VM cyber range for strategic partners, including infrastructure design and multi-stage threat simulation. Researched and prototyped an 'Agentic DFIR' capability to automate telemetry analysis using forensic APIs and AI models.",
    tags: ["Velociraptor API", "Windows / Linux", "Virtual Machines", "Large Language Models", "MCP"],
    img: "/images/STENG%20Certificate%20of%20completion.jpg",
  },
  {
    role: "Freelance Assistant",
    company: "R. Tiwary & Company Advocates & Solicitors",
    period: "Jan 2023 – Dec 2025",
    location: "Singapore",
    type: "Freelance",
    desc: "Provided administrative and operational support to a legal firm. Assisted in drafting, formatting, and preparing legal documents.",
    tags: ["Microsoft Word"],
    img: undefined,
  },
];

const projects = [
  {
    title: "IOC Enrichment CLI Tool",
    period: "2025",
    type: "Open Source Project",
    desc: "Auto-classifies indicators (IPv4, domain, URL, MD5/SHA1/SHA256) and queries VirusTotal, AbuseIPDB, and Shodan simultaneously. Aggregates results into CLEAN / SUSPICIOUS / MALICIOUS verdicts, generates structured JSON reports per IOC, and supports batch mode with summary output.",
    tags: ["Python", "VirusTotal API", "AbuseIPDB", "Shodan", "Regex", "JSON"],
    link: "https://github.com/Emmanuelchang2006/ioc-checker",
    img: "/images/IOC%20Checker.jpg",
  },
  {
    title: "Password Generator",
    period: "2024",
    type: "Python Project",
    desc: "Built a secure password generator enforcing a minimum of 12 characters with mandatory inclusion of symbols, numbers, and uppercase and lowercase letters.",
    tags: ["Python"],
    link: "#",
    img: "/images/Password%20generator.jpg",
  },
  {
    title: "Keylogger",
    period: "2024",
    type: "Python Project",
    desc: "Developed a basic keylogger for educational purposes to understand input capture mechanics and system-level behaviour.",
    tags: ["Python"],
    link: "#",
    img: "/images/Keylogger.jpg",
  },
  {
    title: "Web Application Penetration Testing",
    period: "2024",
    type: "Academic Project",
    desc: "Performed penetration testing on the Trip.com domain, identifying 3 high-severity CVEs. Classified all vulnerabilities using the CVSS scoring framework and produced a structured findings report.",
    tags: ["Burp Suite", "ZAPROXY", "Kali Linux", "Nikto", "Nmap", "CVSS"],
    link: "#",
    img: undefined,
  },
  {
    title: "Firewall Configuration (Palo Alto)",
    period: "2024",
    type: "Academic Project",
    desc: "Configured a Palo Alto firewall with site-to-site VPN between Kuala Lumpur and Singapore offices. Implemented access control rules and internal security restrictions.",
    tags: ["Palo Alto", "VPN", "Network Security", "Access Control"],
    link: "#",
    img: undefined,
  },
  {
    title: "Malware Analysis",
    period: "2024",
    type: "Academic Project",
    desc: "Conducted static and dynamic analysis on a VirusShare malware sample. Produced a full behavioral analysis and IOC report documenting process activity, registry changes, and network indicators.",
    tags: ["Process Explorer", "Process Monitor", "x64 Debugger", "Dependency Walker"],
    link: "#",
    img: undefined,
  },
  {
    title: "App Development (C#)",
    period: "2023",
    type: "Academic Project",
    desc: "Built an ice cream ordering application in C# featuring customisable orders, topping selections, and a reward system. Focused on smooth UI and a functional end-to-end user experience.",
    tags: ["C#", ".NET"],
    link: "#",
    img: "/images/Ice%20Cream%20Project.jpg",
  },
];

const ctfCompetitions = [
  {
    name: "YBN Capture-The-Flag (CTF)",
    organiser: "YBN",
    year: "2024",
    placement: "Participant",
    categories: ["OSINT", "Web Exploitation", "Cryptography"],
    desc: "Participated in OSINT, web exploitation, and cryptography challenges. Strengthened problem-solving and teamwork skills through competitive flag-hunting scenarios.",
    img: "/images/YBN%20CTF.jpg",
  },
];

const ccaAndService = [
  {
    title: "Freshmen Orientation Programme",
    org: "Ngee Ann Polytechnic",
    role: "Orientation Group Leader / Clan Leader",
    period: "2024 – 2025",
    desc: "Coordinated orientation activities and led students in adapting to polytechnic life. Managed Griffin Clan logistics and engagement throughout the programme.",
    imgs: ["/images/FOP2024.jpg", "/images/FOP2025.jpg"],
  },
  {
    title: "ICT Society",
    org: "Ngee Ann Polytechnic",
    role: "Member",
    period: "2023 – 2024",
    desc: "Assisted in freshman orientation programs and supported student onboarding initiatives within the School of ICT.",
    imgs: [],
  },
  {
    title: "Nullsec",
    org: "Ngee Ann Polytechnic",
    role: "Member",
    period: "2023 – 2026",
    desc: "Participated in cybersecurity seminars and CTF competitions. Engaged in hands-on training sessions covering offensive and defensive security techniques.",
    imgs: [],
  },
  {
    title: "Singapore Computer Society",
    org: "Singapore Computer Society",
    role: "Volunteer",
    period: "2023 – 2026",
    desc: "Taught digital literacy skills (Singpass, HealthHub navigation) to the homeless community. Supported community tech education initiatives to bridge the digital divide.",
    imgs: ["/images/SCS.jpg"],
  },
  {
    title: "Altar Boys' Society",
    org: "Church of the Immaculate Heart of Mary",
    role: "President",
    period: "2022 – 2024",
    desc: "Led the EXCO team and organised camps and youth development activities. Focused on leadership growth, team coordination, and spiritual development within the community.",
    imgs: ["/images/Altar%20Servers.jpg"],
  },
  {
    title: "National Police Cadet Corps (NPCC)",
    org: "Maris Stella High School",
    role: "Vice President (Head of Training)",
    period: "2019 – 2022",
    desc: "Planned logistics for camps and training events. Coordinated interschool activities and leadership programmes, developing strong organisational and people management skills.",
    imgs: ["/images/NPCC.jpg"],
  },
];

/* ── Reusable card wrapper ── */
function CardWrapper({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
    >
      {children}
    </motion.div>
  );
}

/* ── Tag pill ── */
function TagPill({ label }: { label: string }) {
  return (
    <span className="px-2.5 py-0.5 bg-slate-800 text-slate-300 text-xs font-medium rounded-full border border-slate-700/50">
      {label}
    </span>
  );
}

/* ── Section header ── */
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

export default function ExperiencePage() {
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
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">Experience</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Internships, projects, competitions, and community involvement.
          </p>
        </motion.div>

        {/* ── Work Experience ── */}
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <SectionHeader
              icon={Briefcase}
              title="Work Experience"
              subtitle="Professional roles and industry exposure"
            />
          </motion.div>

          <div className="space-y-5">
            {internships.map((item, i) => (
              <CardWrapper key={i} delay={i * 0.08}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.role}</h3>
                    <p className="text-blue-400 font-semibold text-sm">{item.company}</p>
                  </div>
                  <span className="self-start px-2.5 py-1 bg-blue-950/50 text-blue-400 text-xs font-medium rounded-full flex-shrink-0 border border-blue-900/50">
                    {item.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((t) => <TagPill key={t} label={t} />)}
                </div>
                {/* Certificate image — only for entries that have one */}
                {item.img && (
                  <div className="max-w-lg mx-auto mt-4">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
                      <Image
                        src={item.img}
                        alt={`${item.company} certificate`}
                        fill
                        sizes="(max-width: 768px) 100vw, 512px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
              </CardWrapper>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <SectionHeader
              icon={FolderGit2}
              title="Projects"
              subtitle="Academic and personal projects"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((proj, i) => (
              <CardWrapper key={i} delay={i * 0.07}>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-white leading-snug">{proj.title}</h3>
                  <a
                    href={proj.link}
                    target={proj.link !== "#" ? "_blank" : undefined}
                    rel={proj.link !== "#" ? "noopener noreferrer" : undefined}
                    className="text-slate-500 hover:text-blue-400 transition-colors flex-shrink-0 mt-0.5"
                    aria-label="Project link"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Calendar className="w-3 h-3" />
                    {proj.period}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-blue-400 font-medium">
                    <Tag className="w-3 h-3" />
                    {proj.type}
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((t) => <TagPill key={t} label={t} />)}
                </div>
                {/* Project screenshot — only for entries that have one */}
                {proj.img && (
                  <div className="relative h-56 rounded-xl overflow-hidden bg-slate-900 mt-4">
                    <Image
                      src={proj.img}
                      alt={`${proj.title} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-contain"
                    />
                  </div>
                )}
              </CardWrapper>
            ))}
          </div>
        </section>

        {/* ── CTF Competitions ── */}
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <SectionHeader
              icon={Swords}
              title="Capture The Flag"
              subtitle="Competitive cybersecurity challenge events"
            />
          </motion.div>

          <div className="space-y-5">
            {ctfCompetitions.map((ctf, i) => (
              <CardWrapper key={i} delay={i * 0.08}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{ctf.name}</h3>
                    <p className="text-blue-400 font-semibold text-sm">{ctf.organiser}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1">
                    <span className="px-2.5 py-1 bg-amber-950/50 text-amber-400 text-xs font-semibold rounded-full border border-amber-900/50">
                      {ctf.placement}
                    </span>
                    <span className="text-xs text-slate-400">{ctf.year}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">{ctf.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {ctf.categories.map((cat) => (
                    <span key={cat} className="px-2.5 py-0.5 bg-purple-950/50 text-purple-400 text-xs font-medium rounded-full border border-purple-900/50">
                      {cat}
                    </span>
                  ))}
                </div>
                {/* CTF image — shown below category pills */}
                {ctf.img && (
                  <div className="relative h-52 rounded-xl overflow-hidden bg-slate-900 mt-4">
                    <Image
                      src={ctf.img}
                      alt={`${ctf.name} certificate`}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-contain"
                    />
                  </div>
                )}
              </CardWrapper>
            ))}
          </div>
        </section>

        {/* ── CCA & Community Service ── */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <SectionHeader
              icon={HeartHandshake}
              title="CCA & Community Service"
              subtitle="Co-curricular activities and volunteer work"
            />
          </motion.div>

          <div className="space-y-5">
            {ccaAndService.map((item, i) => (
              <CardWrapper key={i} delay={i * 0.08}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-blue-400 font-semibold text-sm">{item.org}</p>
                  </div>
                  <span className="self-start px-2.5 py-1 bg-green-950/50 text-green-400 text-xs font-medium rounded-full flex-shrink-0 border border-green-900/50">
                    {item.role}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400 mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                {/* CCA images — single image or 2-column gallery for multiple */}
                {item.imgs.length === 1 && (
                  <div className="relative h-56 rounded-xl overflow-hidden bg-slate-900 mt-4">
                    <Image
                      src={item.imgs[0]}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-contain"
                    />
                  </div>
                )}
                {item.imgs.length > 1 && (
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {item.imgs.map((src) => (
                      <div key={src} className="relative h-44 rounded-xl overflow-hidden bg-slate-900">
                        <Image
                          src={src}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 50vw, 280px"
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </CardWrapper>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
