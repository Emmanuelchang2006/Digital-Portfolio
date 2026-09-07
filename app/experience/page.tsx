"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  FolderGit2,
  Swords,
  HeartHandshake,
  ExternalLink,
  Calendar,
  MapPin,
  Tag,
  FileText,
  ZoomIn,
} from "lucide-react";
import ProjectModal, { ModalProject, ProjectReport } from "@/components/ProjectModal";
import ImageLightbox from "@/components/ImageLightbox";

/* ── Data ── */
type Emphasis = "featured" | "primary" | "quiet";

interface Internship {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  desc: string;
  tags: string[];
  img?: string;
  emphasis: Emphasis;
}

const internships: Internship[] = [
  {
    role: "AI Security Engineer",
    company: "Tangent9",
    period: "Jul 2026 – Sep 2026",
    location: "Singapore",
    type: "Contract",
    desc: "Contributed to Tangent9's AI-powered incident management platform. Work centred on security assessment, integration and validation of AI-enabled cybersecurity workflows rather than solo development of the whole system. Focus areas included authentication, RBAC and capability-based authorization across the Next.js BFF and NestJS backend; requirements and architecture analysis; API integration; testing and validation of incident-triage, SLA-monitoring, knowledge-management and audit paths; and evaluation of AI-agent behaviour for cybersecurity assurance (AssureIQ-style evidence-grounded workflows: evidence ingestion, control assessment, cross-referencing, audit analysis and evidence-grounded reporting).",
    tags: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "BFF", "LLM Agents", "Capability-based Authz", "RBAC", "AssureIQ"],
    img: undefined,
    emphasis: "featured",
  },
  {
    role: "Cybersecurity Analyst",
    company: "Telsecure",
    period: "Aug 2026 – Sep 2026",
    location: "Singapore",
    type: "Contractor",
    desc: "Applied cybersecurity knowledge to technical configuration work. Focused on secure-configuration principles including SSH configuration, AES / encryption concepts, and translating security requirements into practical, defensible configuration decisions. The role emphasised practical security judgement rather than the operation of dedicated security tooling.",
    tags: ["SSH", "AES / Encryption", "Secure Configuration"],
    img: undefined,
    emphasis: "primary",
  },
  {
    role: "Junior Digital Forensics & Incident Response Specialist Intern",
    company: "ST Engineering Info-Security Pte Ltd",
    period: "Sep 2025 – Jan 2026",
    location: "Singapore",
    type: "Internship",
    desc: "Performed forensic casework and live incident response on Windows and Linux endpoints to identify Indicators of Compromise (IOCs). Contributed to the design of a virtualised cyber range for strategic partners, including infrastructure design and multi-stage threat simulation. Researched and prototyped an 'Agentic DFIR' capability to automate telemetry analysis using forensic APIs and AI models.",
    tags: ["Velociraptor API", "Windows / Linux", "Virtual Machines", "Large Language Models", "MCP"],
    img: "/images/STENG%20Certificate%20of%20completion.jpg",
    emphasis: "primary",
  },
  {
    role: "Sales Intern",
    company: "Apollo Healthcare Resources",
    period: "Feb 2026 – Apr 2026",
    location: "Singapore",
    type: "Internship",
    desc: "Managed end-to-end sales cycle including sourcing pharmaceutical products, negotiating pricing, and client fulfilment. Prepared Certificates of Analysis (COA), Proforma Invoices (PI), and Sales Contracts (SC).",
    tags: ["Microsoft Word", "Microsoft Excel"],
    img: undefined,
    emphasis: "quiet",
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
    emphasis: "quiet",
  },
];

/* ── Projects with condensed DFIR report data ── */
interface ProjectEntry {
  title: string;
  period: string;
  type: string;
  desc: string;
  tags: string[];
  link: string;
  img?: string;
  report: ProjectReport;
}

const projects: ProjectEntry[] = [
  {
    title: "IOC Enrichment CLI Tool",
    period: "2025",
    type: "Open Source Project",
    desc: "Auto-classifies indicators (IPv4, domain, URL, MD5/SHA1/SHA256) and queries VirusTotal, AbuseIPDB, and Shodan simultaneously. Aggregates results into CLEAN / SUSPICIOUS / MALICIOUS verdicts with structured JSON reports and batch mode.",
    tags: ["Python", "VirusTotal API", "AbuseIPDB", "Shodan", "Regex", "JSON"],
    link: "https://github.com/Emmanuelchang2006/ioc-checker",
    img: "/images/IOC%20Checker.jpg",
    report: {
      classification: "INTERNAL",
      refId: "TI-2025-001",
      date: "2025",
      analyst: "E. Chang",
      status: "PUBLISHED",
      iocTitle: "Key Features & Technical Findings",
      executiveSummary:
        "Open-source CLI that auto-classifies cyber indicators (IP, domain, URL, hash) and queries VirusTotal, AbuseIPDB, and Shodan concurrently. Aggregates multi-source verdicts into structured JSON reports — cutting manual triage time for analysts.",
      iocs: [
        {
          tag: "FEATURE",
          label: "Multi-API Concurrent Enrichment",
          detail: "Queries 3 threat intel APIs per indicator in parallel — no sequential round-trips.",
        },
        {
          tag: "FEATURE",
          label: "Auto-Classification Engine",
          detail: "Regex detects indicator type (IP, domain, URL, hash) before API dispatch — no manual tagging needed.",
        },
        {
          tag: "FEATURE",
          label: "Verdict Aggregation",
          detail: "All API responses normalised to CLEAN / SUSPICIOUS / MALICIOUS with confidence scores.",
        },
        {
          tag: "FEATURE",
          label: "Structured JSON Reporting",
          detail: "Generates per-IOC reports and batch summaries for analyst review or SIEM ingestion.",
        },
      ],
      methodology: [
        { tool: "Python", detail: "asyncio concurrent API calls" },
        { tool: "VirusTotal API", detail: "Hash and URL/domain reputation" },
        { tool: "AbuseIPDB", detail: "IP abuse scoring" },
        { tool: "Shodan", detail: "Host exposure and open ports" },
        { tool: "Regex", detail: "Indicator type detection" },
      ],
      outcome:
        "Published on GitHub. Reduced analyst IOC triage time at ST Engineering by automating workflows that were previously done manually.",
    },
  },
  {
    title: "Password Generator",
    period: "2024",
    type: "Python Project",
    desc: "Built a secure password generator enforcing a minimum of 12 characters with mandatory inclusion of symbols, numbers, and uppercase and lowercase letters.",
    tags: ["Python"],
    link: "#",
    img: "/images/Password%20generator.jpg",
    report: {
      classification: "INTERNAL",
      refId: "DEV-2024-002",
      date: "2024",
      analyst: "E. Chang",
      status: "COMPLETE",
      iocTitle: "Security Requirements & Compliance",
      executiveSummary:
        "CLI tool generating cryptographically strong passwords aligned with NIST SP 800-63B — minimum 12 characters, mandatory character-class diversity, and CSPRNG randomness throughout.",
      iocs: [
        {
          tag: "REQUIREMENT",
          label: "Minimum Length Enforcement",
          detail: "All outputs are 12+ characters — meets NIST baseline for memorised secrets.",
        },
        {
          tag: "REQUIREMENT",
          label: "Character Class Diversity",
          detail: "Enforces uppercase, lowercase, numbers, and symbols per output — prevents single-class brute-force.",
        },
        {
          tag: "REQUIREMENT",
          label: "Cryptographically Secure Randomness",
          detail: "Uses Python secrets module (not random) — output is statistically unpredictable.",
        },
      ],
      methodology: [
        { tool: "Python", detail: "Core language; secrets module for CSPRNG" },
        { tool: "string module", detail: "Character class pools for controlled composition" },
      ],
      outcome:
        "Functional CLI tool demonstrating NIST password policy standards and secure randomness principles.",
    },
  },
  {
    title: "Keylogger",
    period: "2024",
    type: "Python Project",
    desc: "Developed a basic keylogger for educational purposes to understand input capture mechanics and system-level behaviour.",
    tags: ["Python"],
    link: "#",
    img: "/images/Keylogger.jpg",
    report: {
      classification: "RESTRICTED",
      refId: "RE-2024-003",
      date: "2024",
      analyst: "E. Chang",
      status: "LAB ONLY",
      iocTitle: "Identified Techniques & Mechanisms",
      executiveSummary:
        "Built a basic keylogger in an isolated lab VM to understand input-capture mechanics at the OS level. Strictly educational — no deployment outside the sandboxed environment. Analysis directly informed understanding of EDR and AV detection strategies.",
      iocs: [
        {
          tag: "TECHNIQUE",
          label: "Keyboard Hook Installation",
          detail: "Low-level pynput hook intercepts keystrokes before application-layer filtering.",
        },
        {
          tag: "TECHNIQUE",
          label: "Keystroke Buffering",
          detail: "Captured keys buffered in memory and flushed to file at intervals — reduces I/O noise.",
        },
        {
          tag: "TECHNIQUE",
          label: "Log Persistence",
          detail: "Output written to a local flat file — mirrors how attackers store captured credentials.",
        },
      ],
      methodology: [
        { tool: "Python", detail: "Core implementation" },
        { tool: "pynput", detail: "Cross-platform keyboard listener" },
        { tool: "Isolated VM", detail: "No network access; fully sandboxed" },
      ],
      outcome:
        "Demonstrated keystroke capture in a controlled lab. Gained direct insight into how EDRs and AV tools detect keylogger activity — applicable to defensive security work.",
    },
  },
  {
    title: "Web Application Penetration Testing",
    period: "2024",
    type: "Academic Project",
    desc: "Performed penetration testing on the Trip.com domain, identifying 3 high-severity CVEs. Classified all vulnerabilities using the CVSS scoring framework and produced a structured findings report.",
    tags: ["Burp Suite", "ZAPROXY", "Kali Linux", "Nikto", "Nmap", "CVSS"],
    link: "#",
    img: undefined,
    report: {
      classification: "RESTRICTED",
      refId: "PT-2024-004",
      date: "2024",
      analyst: "E. Chang",
      status: "CLOSED",
      iocTitle: "Vulnerabilities Identified",
      executiveSummary:
        "Penetration test on Trip.com domain. Identified 3 High-severity vulnerabilities using manual exploitation and automated scanning. All findings scored via CVSS v3.1 with remediation guidance.",
      iocs: [
        {
          tag: "HIGH",
          label: "SQL Injection — CVSSv3 8.1",
          detail: "Parameter-based SQLi in booking search. Allows unauthenticated DB access and potential data exfiltration.",
        },
        {
          tag: "HIGH",
          label: "Cross-Site Scripting (XSS) — CVSSv3 7.5",
          detail: "Reflected XSS in user input fields. Enables session token theft against authenticated users.",
        },
        {
          tag: "HIGH",
          label: "Insecure Direct Object Reference (IDOR) — CVSSv3 7.2",
          detail: "Predictable booking IDs expose other users' records — no server-side authorisation checks.",
        },
      ],
      methodology: [
        { tool: "Burp Suite", detail: "Manual HTTP request manipulation and payload injection" },
        { tool: "OWASP ZAP", detail: "Automated active vulnerability scanning" },
        { tool: "Nikto", detail: "Web server and configuration scanning" },
        { tool: "Nmap", detail: "Port and service enumeration" },
        { tool: "Kali Linux", detail: "Testing environment" },
        { tool: "CVSS v3.1", detail: "Vulnerability severity scoring" },
      ],
      outcome:
        "Delivered a structured pentest report with 3 High-severity CVEs. Remediations: parameterised queries (SQLi), output encoding (XSS), server-side authorisation checks (IDOR).",
    },
  },
  {
    title: "Firewall Configuration (Palo Alto)",
    period: "2024",
    type: "Academic Project",
    desc: "Configured a Palo Alto firewall with site-to-site VPN between Kuala Lumpur and Singapore offices. Implemented access control rules and internal security restrictions.",
    tags: ["Palo Alto", "VPN", "Network Security", "Access Control"],
    link: "#",
    img: undefined,
    report: {
      classification: "INTERNAL",
      refId: "NS-2024-005",
      date: "2024",
      analyst: "E. Chang",
      status: "COMPLETE",
      iocTitle: "Security Controls Implemented",
      executiveSummary:
        "Configured a Palo Alto NGFW to connect KL and Singapore offices via site-to-site IPsec VPN. Implemented zone-based security policies following least-privilege principles.",
      iocs: [
        {
          tag: "CONTROL",
          label: "Site-to-Site IPsec VPN",
          detail: "IKEv2 tunnel between KL–SG sites; verified encrypted traffic and failover under simulated link loss.",
        },
        {
          tag: "CONTROL",
          label: "Zone-Based Security Policy",
          detail: "Trust / Untrust / DMZ zones with explicit inter-zone rules for traffic segmentation.",
        },
        {
          tag: "CONTROL",
          label: "Access Control Rules",
          detail: "Least-privilege inbound/outbound rules; unsanctioned protocols blocked at perimeter.",
        },
        {
          tag: "CONTROL",
          label: "URL Filtering",
          detail: "Application-layer inspection on internal internet-bound traffic.",
        },
      ],
      methodology: [
        { tool: "Palo Alto NGFW", detail: "Primary firewall platform" },
        { tool: "PAN-OS GUI", detail: "Zone, policy, and VPN configuration" },
        { tool: "IKEv2 / IPsec", detail: "VPN tunnel protocol stack" },
        { tool: "Wireshark", detail: "Verified encrypted traffic and VPN handshake" },
      ],
      outcome:
        "Functional site-to-site VPN with enforced security zones. Practical experience with enterprise perimeter firewall configuration and network segmentation.",
    },
  },
  {
    title: "Malware Analysis",
    period: "2024",
    type: "Academic Project",
    desc: "Conducted static and dynamic analysis on a VirusShare malware sample. Produced a full behavioral analysis and IOC report documenting process activity, registry changes, and network indicators.",
    tags: ["Process Explorer", "Process Monitor", "x64 Debugger", "Dependency Walker"],
    link: "#",
    img: undefined,
    report: {
      classification: "CONFIDENTIAL",
      refId: "MA-2024-006",
      date: "2024",
      analyst: "E. Chang",
      status: "ANALYSED",
      iocTitle: "Indicators of Compromise (IOCs)",
      executiveSummary:
        "Static and dynamic analysis of a VirusShare sample in an isolated lab. Produced a full IOC report covering C2 communications, process injection, persistence, and file artefacts — mapped to MITRE ATT&CK.",
      iocs: [
        {
          tag: "NETWORK",
          label: "C2 Beacon — 185.220.101.x:4444",
          detail: "Periodic ~60s TCP connections to hardcoded IP — consistent beacon pattern.",
        },
        {
          tag: "PROCESS",
          label: "Process Injection — cmd.exe → PowerShell",
          detail: "Encoded PowerShell spawned via cmd.exe — living-off-the-land technique to evade signatures.",
        },
        {
          tag: "REGISTRY",
          label: "Run Key Persistence — HKCU\\...\\CurrentVersion\\Run",
          detail: "Run key written to survive reboot — no elevated privileges needed.",
        },
        {
          tag: "FILE",
          label: "Masquerading Binary — svchost32.exe",
          detail: "Dropper copied to %APPDATA% as svchost32.exe to mimic a legitimate Windows system process.",
        },
      ],
      methodology: [
        { tool: "Process Explorer", detail: "Process tree inspection and parent-child analysis" },
        { tool: "Process Monitor", detail: "File, registry, and network activity during execution" },
        { tool: "x64 Debugger", detail: "Static/runtime disassembly and API extraction" },
        { tool: "Dependency Walker", detail: "DLL import analysis at load time" },
        { tool: "FlareVM (Isolated VM)", detail: "Sandboxed Windows analysis environment" },
        { tool: "VirusTotal", detail: "Static hash lookup and multi-engine scan" },
      ],
      outcome:
        "Full IOC report operationalisable for SIEM detection rules. Confirmed ransomware-like persistence and C2 patterns. Demonstrated MITRE ATT&CK TTP mapping.",
    },
  },
  {
    title: "App Development (C#)",
    period: "2023",
    type: "Academic Project",
    desc: "Built an ice cream ordering application in C# featuring customisable orders, topping selections, and a reward system. Focused on smooth UI and a functional end-to-end user experience.",
    tags: ["C#", ".NET"],
    link: "#",
    img: "/images/Ice%20Cream%20Project.jpg",
    report: {
      classification: "INTERNAL",
      refId: "DEV-2023-007",
      date: "2023",
      analyst: "E. Chang",
      status: "COMPLETE",
      iocTitle: "Key Features Implemented",
      executiveSummary:
        "Ice cream ordering app in C# (.NET) with customisable orders, toppings, and a reward points system. Full end-to-end ordering lifecycle from item selection to receipt generation.",
      iocs: [
        {
          tag: "FEATURE",
          label: "Customisable Order Builder",
          detail: "Multi-step flow for flavours, sizes, and toppings with live order summary.",
        },
        {
          tag: "FEATURE",
          label: "Reward Points System",
          detail: "Point accrual and redemption persisted to local storage across sessions.",
        },
        {
          tag: "FEATURE",
          label: "Input Validation & Error Handling",
          detail: "All inputs validated with descriptive error messages — prevents invalid order states.",
        },
        {
          tag: "FEATURE",
          label: "End-to-End Order Flow",
          detail: "Selection → payment summary → confirmation → receipt generation.",
        },
      ],
      methodology: [
        { tool: "C#", detail: "OOP design with class-based entity models" },
        { tool: ".NET Framework", detail: "App runtime and Windows Forms UI" },
        { tool: "Visual Studio", detail: "IDE for development and debugging" },
      ],
      outcome:
        "Fully functional ordering app delivered to spec. Demonstrated OOP principles, input validation, and end-to-end UX design in C#.",
    },
  },
];

const ctfCompetitions = [
  {
    name: "HTB Cyber Apocalypse 2026 — The Salt Crown",
    organiser: "Hack The Box",
    year: "2026",
    placement: "644 / 6744",
    categories: ["Web Exploitation", "Cryptography", "Reversing", "Forensics", "OSINT"],
    desc: "International CTF spanning web exploitation, cryptography, reversing and forensics. Team \"littledogs\": 26 / 136 challenges solved, 23,150 points, placed 644 out of 6,744 teams.",
    img: "/images/HTB_CTF.jpeg",
  },
  {
    name: "BrainHack — Cyber Defenders Discovery Camp 2026",
    organiser: "DSTA",
    year: "2026",
    placement: "Challenger",
    categories: ["Defensive", "Blue Team", "Forensics"],
    desc: "National defensive CTF hosted by DSTA. Participated in the Challenger track with a focus on blue-team scenarios and forensics.",
    img: "/images/Brainhack_CTF.png",
  },
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
function CardWrapper({
  children,
  delay = 0,
  onClick,
}: {
  children: React.ReactNode;
  delay?: number;
  onClick?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      onClick={onClick}
      className={`bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300${onClick ? " cursor-pointer" : ""}`}
    >
      {children}
    </motion.div>
  );
}

/* ── Tag pill ── */
function TagPill({ label }: { label: string }) {
  return (
    <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 text-xs font-mono rounded-full border border-slate-200">
      {label}
    </span>
  );
}

/* ── Section header ── */
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

export default function ExperiencePage() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const modalProject: ModalProject | null =
    activeProject !== null
      ? {
          title: projects[activeProject].title,
          period: projects[activeProject].period,
          type: projects[activeProject].type,
          report: projects[activeProject].report,
        }
      : null;

  return (
    <div className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-screen overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-3">Experience</h1>
          <p className="text-slate-500 max-w-xl mx-auto">
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

          <div className="space-y-4">
            {internships.map((item, i) => {
              const isFeatured = item.emphasis === "featured";
              const isQuiet = item.emphasis === "quiet";
              return (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`relative bg-white border rounded-2xl transition-all duration-300 ${
                    isFeatured
                      ? "border-blue-200 shadow-md hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5 p-5 sm:p-6 ring-1 ring-blue-500/10"
                      : isQuiet
                      ? "border-slate-200 shadow-sm hover:shadow hover:border-slate-300 p-4 sm:p-5"
                      : "border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 p-5 sm:p-6"
                  }`}
                >
                  {isFeatured && (
                    <span
                      aria-hidden
                      className="absolute inset-y-4 left-0 w-1 rounded-r bg-gradient-to-b from-blue-500 to-indigo-600"
                    />
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className={`font-bold text-slate-900 leading-tight ${
                          isFeatured ? "text-lg sm:text-xl" : isQuiet ? "text-[15px]" : "text-lg"
                        }`}>
                          {item.role}
                        </h3>
                        {isFeatured && (
                          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 rounded px-1.5 py-0.5">
                            Current
                          </span>
                        )}
                      </div>
                      <p className={`font-semibold ${
                        isQuiet ? "text-slate-600 text-[13px]" : "text-blue-700 text-sm"
                      }`}>
                        {item.company}
                      </p>
                    </div>
                    <span
                      className={`self-start px-2.5 py-0.5 text-[11px] font-medium rounded-full flex-shrink-0 border ${
                        isFeatured
                          ? "bg-blue-50 text-blue-700 border-blue-200"
                          : isQuiet
                          ? "bg-slate-50 text-slate-600 border-slate-200"
                          : "bg-blue-50 text-blue-700 border-blue-200"
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11.5px] text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>

                  <p className={`text-slate-600 leading-relaxed ${isQuiet ? "text-[13px]" : "text-sm"}`}>
                    {item.desc}
                  </p>

                  {!isQuiet && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.tags.map((t) => <TagPill key={t} label={t} />)}
                    </div>
                  )}

                  {item.img && (
                    <div className="mt-4 max-w-xs">
                      <div
                        className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 cursor-pointer group border border-slate-200"
                        onClick={() => setLightbox({ src: item.img!, alt: `${item.company} certificate` })}
                      >
                        <Image
                          src={item.img}
                          alt={`${item.company} certificate`}
                          fill
                          sizes="(max-width: 640px) 100vw, 320px"
                          className="object-contain p-2 group-hover:opacity-80 transition-opacity duration-200"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <div className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20">
                            <ZoomIn className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.article>
              );
            })}
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
              subtitle="Academic and personal projects — click any card to view the full report"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((proj, i) => (
              <CardWrapper key={i} delay={i * 0.07} onClick={() => setActiveProject(i)}>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-slate-900 leading-snug">{proj.title}</h3>
                  <a
                    href={proj.link}
                    target={proj.link !== "#" ? "_blank" : undefined}
                    rel={proj.link !== "#" ? "noopener noreferrer" : undefined}
                    onClick={(e) => e.stopPropagation()}
                    className="text-slate-400 hover:text-blue-600 transition-colors flex-shrink-0 mt-0.5"
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
                  <span className="flex items-center gap-1 text-xs text-blue-600 font-medium">
                    <Tag className="w-3 h-3" />
                    {proj.type}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map((t) => <TagPill key={t} label={t} />)}
                </div>
                {proj.img && (
                  <div
                    className="relative h-56 rounded-xl overflow-hidden bg-slate-100 mb-4 cursor-pointer group"
                    onClick={(e) => { e.stopPropagation(); setLightbox({ src: proj.img!, alt: `${proj.title} screenshot` }); }}
                  >
                    <Image
                      src={proj.img}
                      alt={`${proj.title} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-contain group-hover:opacity-80 transition-opacity duration-200"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-1.5 text-blue-600 text-xs font-mono mt-auto pt-1 border-t border-slate-200">
                  <FileText className="w-3 h-3" />
                  <span className="uppercase tracking-widest">View Incident Report</span>
                  <span className="ml-auto font-mono text-slate-400 text-[10px]">{proj.report.refId}</span>
                </div>
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
                    <h3 className="text-lg font-bold text-slate-900">{ctf.name}</h3>
                    <p className="text-blue-600 font-semibold text-sm">{ctf.organiser}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1">
                    <span className="px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200">
                      {ctf.placement}
                    </span>
                    <span className="text-xs text-slate-400">{ctf.year}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{ctf.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {ctf.categories.map((cat) => (
                    <span key={cat} className="px-2.5 py-0.5 bg-purple-50 text-purple-700 text-xs font-mono rounded-full border border-purple-200">
                      {cat}
                    </span>
                  ))}
                </div>
                {ctf.img && (
                  <div
                    className="relative h-52 rounded-xl overflow-hidden bg-slate-100 mt-4 cursor-pointer group"
                    onClick={() => setLightbox({ src: ctf.img!, alt: `${ctf.name} certificate` })}
                  >
                    <Image
                      src={ctf.img}
                      alt={`${ctf.name} certificate`}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-contain group-hover:opacity-80 transition-opacity duration-200"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
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
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="text-blue-600 font-semibold text-sm">{item.org}</p>
                  </div>
                  <span className="self-start px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full flex-shrink-0 border border-emerald-200">
                    {item.role}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400 mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                {item.imgs.length === 1 && (
                  <div
                    className="relative h-56 rounded-xl overflow-hidden bg-slate-100 mt-4 cursor-pointer group"
                    onClick={() => setLightbox({ src: item.imgs[0], alt: item.title })}
                  >
                    <Image
                      src={item.imgs[0]}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-contain group-hover:opacity-80 transition-opacity duration-200"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                )}
                {item.imgs.length > 1 && (
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {item.imgs.map((src) => (
                      <div
                        key={src}
                        className="relative h-44 rounded-xl overflow-hidden bg-slate-100 cursor-pointer group"
                        onClick={() => setLightbox({ src, alt: item.title })}
                      >
                        <Image
                          src={src}
                          alt={item.title}
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
              </CardWrapper>
            ))}
          </div>
        </section>

      </div>

      {/* ── Project Modal ── */}
      <AnimatePresence>
        {modalProject && (
          <ProjectModal
            key="project-modal"
            project={modalProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>

      {/* ── Image Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <ImageLightbox
            key="experience-lightbox"
            src={lightbox.src}
            alt={lightbox.alt}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
