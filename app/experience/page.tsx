"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  Briefcase,
  FolderGit2,
  Swords,
  HeartHandshake,
  Calendar,
  Building2,
  FileBadge,
} from "lucide-react";
import ProjectModal, { ModalProject, ProjectReport } from "@/components/ProjectModal";
import ImageLightbox from "@/components/ImageLightbox";
import ZoomableImage from "@/components/ZoomableImage";

/* ─────────────────────────────
   WORK EXPERIENCE
────────────────────────────── */

type Emphasis = "primary" | "quiet";

interface WorkItem {
  role: string;
  company: string;
  field: string;
  type: string;
  dates: string;
  summary: string;
  bullets?: string[];
  stack?: string[];
  img?: string;
  emphasis: Emphasis;
}

const work: WorkItem[] = [
  {
    role: "AI Security Engineer",
    company: "Tangent9",
    field: "Information Technology",
    type: "Contract",
    dates: "6 Jul 2026 to 27 Sep 2026",
    summary:
      "Contributed to an AI-powered incident management platform. Work centred on security assessment, integration and validation of AI-enabled cybersecurity workflows rather than solo development of the whole system.",
    bullets: [
      "Security-assessed authentication, authorization and capability-based access control across the Next.js BFF and NestJS backend.",
      "Validated frontend and backend integration, API contracts and audit paths against product and security requirements.",
      "Reviewed architecture and implementation against expected security behaviour and identified authorization and capability mismatches.",
      "Evaluated AI-agent behaviour and evidence-grounded workflows for cybersecurity assurance, including evidence ingestion, control assessment and audit analysis.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "BFF architecture",
      "LLM agents",
      "Capability-based authz",
    ],
    emphasis: "primary",
  },
  {
    role: "Cybersecurity Analyst",
    company: "Telsecure",
    field: "Cyber Security",
    type: "Contractor",
    dates: "24 Aug 2026 to 27 Sep 2026",
    summary:
      "Applied cybersecurity knowledge to technical configuration work. Focused on secure-configuration principles across areas such as SSH access and encryption (AES), and translating security requirements into concrete configuration decisions. The role emphasised practical security judgement rather than the operation of dedicated security tooling.",
    bullets: [
      "Applied SSH configuration and access-security principles.",
      "Reviewed the use of encryption (AES) and key-handling practices in stored configurations.",
      "Aligned technical configurations with documented security requirements.",
      "Translated security requirements into practical, defensible configuration decisions.",
    ],
    emphasis: "primary",
  },
  {
    role: "Sales Intern",
    company: "Apollo Healthcare Resources",
    field: "Sales",
    type: "Internship",
    dates: "Feb 2026 to Apr 2026",
    summary:
      "End-to-end sales cycle including product sourcing, pricing negotiation and client fulfilment. Prepared COAs, PIs and Sales Contracts. Strengthened client communication and documentation precision.",
    emphasis: "quiet",
  },
  {
    role: "Junior DFIR Specialist Intern",
    company: "ST Engineering Info-Security",
    field: "Cyber Security",
    type: "Internship",
    dates: "Sep 2025 to Jan 2026",
    summary:
      "Performed forensic casework and live incident response on Windows and Linux endpoints to identify indicators of compromise. Contributed to the design of a virtualised cyber range for strategic partners and prototyped an agentic-DFIR capability using Velociraptor and LLM tooling via MCP.",
    bullets: [
      "Endpoint IOC investigation across Windows and Linux hosts.",
      "Prototyped agentic-DFIR workflows combining Velociraptor with LLM tooling over MCP.",
      "Contributed to the design of a virtualised cyber range for multi-stage threat simulation.",
    ],
    stack: ["Velociraptor", "MCP", "LLMs", "KAPE", "Windows / Linux", "VMware"],
    img: "/images/STENG%20Certificate%20of%20completion.jpg",
    emphasis: "primary",
  },
  {
    role: "Freelance Legal Assistant",
    company: "R. Tiwary & Company Advocates",
    field: "Law Firm",
    type: "Freelance",
    dates: "Jan 2023 to Dec 2025",
    summary:
      "Supported drafting, formatting and preparation of legal documents. Reinforced attention-to-detail and structured-writing habits that carry over into forensic reporting.",
    emphasis: "quiet",
  },
];

/* ─────────────────────────────
   PROJECTS
────────────────────────────── */

interface ProjectEntry {
  title: string;
  period: string;
  type: string;
  desc: string;
  tags: string[];
  link?: string;
  img?: string;
  report: ProjectReport;
}

const projects: ProjectEntry[] = [
  {
    title: "IOC Enrichment CLI Tool",
    period: "2025",
    type: "Open source",
    desc: "Auto-classifies indicators (IPv4, domain, URL, MD5/SHA1/SHA256) and queries VirusTotal, AbuseIPDB and Shodan concurrently. Aggregates results into CLEAN, SUSPICIOUS or MALICIOUS verdicts with structured JSON reports.",
    tags: ["Python", "VirusTotal", "AbuseIPDB", "Shodan", "JSON"],
    link: "https://github.com/Emmanuelchang2006/ioc-checker",
    img: "/images/IOC%20Checker.jpg",
    report: {
      classification: "INTERNAL",
      refId: "TI-2025-001",
      date: "2025",
      analyst: "E. Chang",
      status: "PUBLISHED",
      iocTitle: "Findings",
      executiveSummary:
        "Open-source CLI that auto-classifies cyber indicators (IP, domain, URL, hash) and queries VirusTotal, AbuseIPDB and Shodan concurrently. Aggregates multi-source verdicts into structured JSON reports, cutting manual triage time for analysts.",
      iocs: [
        { tag: "FEATURE", label: "Multi-API concurrent enrichment", detail: "Queries 3 threat intel APIs per indicator in parallel." },
        { tag: "FEATURE", label: "Auto-classification engine",     detail: "Regex detects indicator type (IP, domain, URL, hash) before API dispatch." },
        { tag: "FEATURE", label: "Verdict aggregation",             detail: "All API responses normalised to CLEAN, SUSPICIOUS or MALICIOUS with confidence scores." },
        { tag: "FEATURE", label: "Structured JSON reporting",       detail: "Generates per-IOC reports and batch summaries suitable for analyst review or SIEM ingestion." },
      ],
      methodology: [
        { tool: "Python", detail: "asyncio concurrent API calls" },
        { tool: "VirusTotal API", detail: "Hash, URL and domain reputation" },
        { tool: "AbuseIPDB", detail: "IP abuse scoring" },
        { tool: "Shodan", detail: "Host exposure and open ports" },
        { tool: "Regex", detail: "Indicator type detection" },
      ],
      outcome:
        "Published on GitHub. Reduced analyst IOC triage time by automating workflows previously done manually.",
    },
  },
  {
    title: "Malware Analysis, VirusShare Sample",
    period: "2024",
    type: "Academic",
    desc: "Static and dynamic analysis of a VirusShare sample in an isolated FlareVM lab. Produced a full IOC report mapped to MITRE ATT&CK covering C2 communications, process injection, persistence and file artefacts.",
    tags: ["Process Explorer", "Process Monitor", "x64 Debugger", "MITRE ATT&CK"],
    report: {
      classification: "CONFIDENTIAL",
      refId: "MA-2024-006",
      date: "2024",
      analyst: "E. Chang",
      status: "ANALYSED",
      iocTitle: "Findings",
      executiveSummary:
        "Static and dynamic analysis of a VirusShare sample in an isolated lab. Produced a full IOC report covering C2 communications, process injection, persistence and file artefacts, mapped to MITRE ATT&CK.",
      iocs: [
        { tag: "NETWORK",  label: "C2 beacon, 185.220.101.x:4444",              detail: "Periodic ~60s TCP connections to hardcoded IP, consistent beacon pattern." },
        { tag: "PROCESS",  label: "Process injection, cmd.exe to PowerShell",   detail: "Encoded PowerShell spawned via cmd.exe, a living-off-the-land pattern used to evade signatures." },
        { tag: "REGISTRY", label: "Run-key persistence",                        detail: "HKCU Run key written to survive reboot without elevated privileges." },
        { tag: "FILE",     label: "Masquerading binary, svchost32.exe",         detail: "Dropper copied to %APPDATA% as svchost32.exe to mimic a Windows system process." },
      ],
      methodology: [
        { tool: "Process Explorer", detail: "Process tree inspection and parent-child analysis" },
        { tool: "Process Monitor", detail: "File, registry and network activity during execution" },
        { tool: "x64 Debugger", detail: "Static and runtime disassembly, API extraction" },
        { tool: "Dependency Walker", detail: "DLL import analysis at load time" },
        { tool: "FlareVM", detail: "Sandboxed Windows analysis environment" },
        { tool: "VirusTotal", detail: "Static hash lookup and multi-engine scan" },
      ],
      outcome:
        "Full IOC report operationalisable for SIEM detection rules. Confirmed ransomware-like persistence and C2 patterns and demonstrated MITRE ATT&CK TTP mapping.",
    },
  },
  {
    title: "Web Application Penetration Testing",
    period: "2024",
    type: "Academic",
    desc: "Penetration testing on the Trip.com domain. Identified 3 high-severity CVEs and scored them via CVSS v3.1 with remediation guidance.",
    tags: ["Burp Suite", "OWASP ZAP", "Kali", "Nikto", "Nmap", "CVSS"],
    report: {
      classification: "RESTRICTED",
      refId: "PT-2024-004",
      date: "2024",
      analyst: "E. Chang",
      status: "CLOSED",
      iocTitle: "Findings",
      executiveSummary:
        "Penetration test on Trip.com domain. Identified 3 High-severity vulnerabilities using manual exploitation and automated scanning. All findings scored via CVSS v3.1 with remediation guidance.",
      iocs: [
        { tag: "HIGH", label: "SQL Injection, CVSSv3 8.1", detail: "Parameter-based SQLi in booking search. Allows unauthenticated DB access and potential data exfiltration." },
        { tag: "HIGH", label: "Cross-Site Scripting (XSS), CVSSv3 7.5", detail: "Reflected XSS in user input fields. Enables session token theft against authenticated users." },
        { tag: "HIGH", label: "Insecure Direct Object Reference, CVSSv3 7.2", detail: "Predictable booking IDs expose other users' records. No server-side authorisation checks." },
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
        "Delivered a structured pentest report with 3 High-severity CVEs. Remediation guidance covered parameterised queries (SQLi), output encoding (XSS) and server-side authorisation checks (IDOR).",
    },
  },
  {
    title: "Firewall Configuration (Palo Alto)",
    period: "2024",
    type: "Academic",
    desc: "Configured a Palo Alto NGFW with site-to-site IPsec VPN between KL and Singapore offices. Implemented zone-based access control and enterprise perimeter policy.",
    tags: ["Palo Alto", "VPN", "Network Security", "Access Control"],
    report: {
      classification: "INTERNAL",
      refId: "NS-2024-005",
      date: "2024",
      analyst: "E. Chang",
      status: "COMPLETE",
      iocTitle: "Findings",
      executiveSummary:
        "Configured a Palo Alto NGFW to connect KL and Singapore offices via site-to-site IPsec VPN. Implemented zone-based security policies following least-privilege principles.",
      iocs: [
        { tag: "CONTROL", label: "Site-to-site IPsec VPN",     detail: "IKEv2 tunnel between KL and SG sites. Verified encrypted traffic and failover under simulated link loss." },
        { tag: "CONTROL", label: "Zone-based security policy", detail: "Trust, Untrust and DMZ zones with explicit inter-zone rules for traffic segmentation." },
        { tag: "CONTROL", label: "Access control rules",       detail: "Least-privilege inbound and outbound rules. Unsanctioned protocols blocked at perimeter." },
        { tag: "CONTROL", label: "URL filtering",              detail: "Application-layer inspection on internal internet-bound traffic." },
      ],
      methodology: [
        { tool: "Palo Alto NGFW", detail: "Primary firewall platform" },
        { tool: "PAN-OS GUI", detail: "Zone, policy and VPN configuration" },
        { tool: "IKEv2 / IPsec", detail: "VPN tunnel protocol stack" },
        { tool: "Wireshark", detail: "Verified encrypted traffic and VPN handshake" },
      ],
      outcome:
        "Functional site-to-site VPN with enforced security zones. Practical experience with enterprise perimeter firewall configuration and network segmentation.",
    },
  },
  {
    title: "Password Generator (NIST-aligned)",
    period: "2024",
    type: "Python project",
    desc: "CLI tool generating cryptographically strong passwords aligned with NIST SP 800-63B. Minimum 12 characters, mandatory character-class diversity, CSPRNG randomness.",
    tags: ["Python", "NIST", "CSPRNG"],
    img: "/images/Password%20generator.jpg",
    report: {
      classification: "INTERNAL",
      refId: "DEV-2024-002",
      date: "2024",
      analyst: "E. Chang",
      status: "COMPLETE",
      iocTitle: "Findings",
      executiveSummary:
        "CLI tool generating cryptographically strong passwords aligned with NIST SP 800-63B. Minimum 12 characters, mandatory character-class diversity, and CSPRNG randomness throughout.",
      iocs: [
        { tag: "REQUIREMENT", label: "Minimum length enforcement",           detail: "All outputs are 12+ characters, meeting the NIST baseline for memorised secrets." },
        { tag: "REQUIREMENT", label: "Character class diversity",            detail: "Enforces uppercase, lowercase, numbers and symbols per output to prevent single-class brute-force." },
        { tag: "REQUIREMENT", label: "Cryptographically secure randomness",  detail: "Uses Python's secrets module (not random) so output is statistically unpredictable." },
      ],
      methodology: [
        { tool: "Python", detail: "Core language, secrets module for CSPRNG" },
        { tool: "string module", detail: "Character class pools for controlled composition" },
      ],
      outcome:
        "Functional CLI tool demonstrating NIST password policy standards and secure randomness principles.",
    },
  },
  {
    title: "Keylogger (Lab only)",
    period: "2024",
    type: "Python project",
    desc: "Basic keylogger built in an isolated lab VM to understand input-capture mechanics at the OS level. Strictly educational, no deployment outside the sandbox.",
    tags: ["Python", "pynput", "OS internals"],
    img: "/images/Keylogger.jpg",
    report: {
      classification: "RESTRICTED",
      refId: "RE-2024-003",
      date: "2024",
      analyst: "E. Chang",
      status: "LAB ONLY",
      iocTitle: "Findings",
      executiveSummary:
        "Basic keylogger built in an isolated lab VM to understand input-capture mechanics at the OS level. Strictly educational, no deployment outside the sandboxed environment. Analysis directly informed understanding of EDR and AV detection strategies.",
      iocs: [
        { tag: "TECHNIQUE", label: "Keyboard hook installation", detail: "Low-level pynput hook intercepts keystrokes before application-layer filtering." },
        { tag: "TECHNIQUE", label: "Keystroke buffering",         detail: "Captured keys buffered in memory and flushed to file at intervals to reduce I/O noise." },
        { tag: "TECHNIQUE", label: "Log persistence",             detail: "Output written to a local flat file, mirroring how attackers store captured credentials." },
      ],
      methodology: [
        { tool: "Python", detail: "Core implementation" },
        { tool: "pynput", detail: "Cross-platform keyboard listener" },
        { tool: "Isolated VM", detail: "No network access, fully sandboxed" },
      ],
      outcome:
        "Demonstrated keystroke capture in a controlled lab. Gained direct insight into how EDR and AV tools detect keylogger activity, applicable to defensive security work.",
    },
  },
  {
    title: "Ice Cream Ordering App (C#)",
    period: "2023",
    type: "Academic",
    desc: "Ice cream ordering app in C# (.NET) with customisable orders, toppings and a reward points system. Focus on OOP, validation and end-to-end UX.",
    tags: ["C#", ".NET", "OOP"],
    img: "/images/Ice%20Cream%20Project.jpg",
    report: {
      classification: "INTERNAL",
      refId: "DEV-2023-007",
      date: "2023",
      analyst: "E. Chang",
      status: "COMPLETE",
      iocTitle: "Findings",
      executiveSummary:
        "Ice cream ordering app in C# (.NET) with customisable orders, toppings and a reward points system. Full end-to-end ordering lifecycle from item selection to receipt generation.",
      iocs: [
        { tag: "FEATURE", label: "Customisable order builder",       detail: "Multi-step flow for flavours, sizes and toppings with a live order summary." },
        { tag: "FEATURE", label: "Reward points system",             detail: "Point accrual and redemption persisted to local storage across sessions." },
        { tag: "FEATURE", label: "Input validation and error handling", detail: "All inputs validated with descriptive error messages, preventing invalid order states." },
        { tag: "FEATURE", label: "End-to-end order flow",            detail: "Selection, payment summary, confirmation and receipt generation." },
      ],
      methodology: [
        { tool: "C#", detail: "OOP design with class-based entity models" },
        { tool: ".NET Framework", detail: "App runtime and Windows Forms UI" },
        { tool: "Visual Studio", detail: "IDE for development and debugging" },
      ],
      outcome:
        "Fully functional ordering app delivered to spec. Demonstrated OOP principles, input validation and end-to-end UX design in C#.",
    },
  },
];

/* ─────────────────────────────
   CTF
────────────────────────────── */

interface CtfEntry {
  name: string;
  organiser: string;
  year: string;
  placement: string;
  metrics?: { k: string; v: string }[];
  categories: string[];
  desc: string;
  img: string;
}

const ctfCompetitions: CtfEntry[] = [
  {
    name: "HTB Cyber Apocalypse 2026, The Salt Crown",
    organiser: "Hack The Box",
    year: "2026",
    placement: "644 / 6744",
    metrics: [
      { k: "Solved", v: "26 / 136" },
      { k: "Points", v: "23,150" },
      { k: "Team",   v: "littledogs" },
    ],
    categories: ["Web", "Crypto", "Reverse", "Forensics", "OSINT"],
    desc: "International CTF spanning web exploitation, cryptography, reversing and forensics.",
    img: "/images/HTB_CTF.jpeg",
  },
  {
    name: "BrainHack, Cyber Defenders Discovery Camp 2026",
    organiser: "DSTA",
    year: "2026",
    placement: "Challenger",
    categories: ["Defensive", "Blue Team", "Forensics"],
    desc: "National defensive CTF hosted by DSTA. Participated in the Challenger track with a focus on blue-team scenarios.",
    img: "/images/Brainhack_CTF.png",
  },
  {
    name: "YBN Capture-The-Flag",
    organiser: "YBN",
    year: "2024",
    placement: "Participant",
    categories: ["OSINT", "Web", "Cryptography"],
    desc: "OSINT, web exploitation and cryptography challenges.",
    img: "/images/YBN%20CTF.jpg",
  },
];

/* ─────────────────────────────
   CCA & COMMUNITY SERVICE
────────────────────────────── */

interface CcaEntry {
  title: string;
  org: string;
  role: string;
  period: string;
  desc: string;
  imgs: string[];
}

const ccaAndService: CcaEntry[] = [
  {
    title: "Freshmen Orientation Programme",
    org: "Ngee Ann Polytechnic",
    role: "Group / Clan Leader",
    period: "2024 to 2025",
    desc: "Coordinated orientation activities and led students in adapting to polytechnic life. Managed Griffin Clan logistics and engagement.",
    imgs: ["/images/FOP2024.jpg", "/images/FOP2025.jpg"],
  },
  {
    title: "Singapore Computer Society",
    org: "Singapore Computer Society",
    role: "Volunteer",
    period: "2023 to 2026",
    desc: "Taught digital literacy skills (Singpass, HealthHub navigation) to the homeless community.",
    imgs: ["/images/SCS.jpg"],
  },
  {
    title: "Nullsec",
    org: "Ngee Ann Polytechnic",
    role: "Member",
    period: "2023 to 2026",
    desc: "Cybersecurity seminars, CTF training, and hands-on offensive and defensive sessions.",
    imgs: [],
  },
  {
    title: "ICT Society",
    org: "Ngee Ann Polytechnic",
    role: "Member",
    period: "2023 to 2024",
    desc: "Supported freshman orientation and student onboarding within the School of ICT.",
    imgs: [],
  },
  {
    title: "Altar Boys' Society",
    org: "Church of the Immaculate Heart of Mary",
    role: "President",
    period: "2022 to 2024",
    desc: "Led the EXCO team, organised camps and youth-development activities. Focused on leadership, coordination and mentorship.",
    imgs: ["/images/Altar%20Servers.jpg"],
  },
  {
    title: "National Police Cadet Corps",
    org: "Maris Stella High School",
    role: "Vice-President, Head of Training",
    period: "2019 to 2022",
    desc: "Planned logistics for camps and training events, coordinated interschool activities and leadership programmes.",
    imgs: ["/images/NPCC.jpg"],
  },
];

/* ─────────────────────────────
   Small section header
────────────────────────────── */

function SectionHeader({
  eyebrow,
  title,
  icon: Icon,
  right,
}: {
  eyebrow: string;
  title: string;
  icon?: React.ElementType;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-end justify-between gap-4 mb-8 sm:mb-10">
      <div>
        <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-700 mb-2 flex items-center gap-2">
          {Icon && <Icon className="w-3 h-3" />}
          {eyebrow}
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
          {title}
        </h2>
      </div>
      {right}
    </div>
  );
}

/* ─────────────────────────────
   PAGE
────────────────────────────── */

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
    <>
      {/* Page Header (hero-glow) */}
      <section className="hero-glow pt-28 sm:pt-32 pb-8 sm:pb-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-700 mb-2">
            Experience
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight mb-4 leading-[1.05]">
            Roles, projects, competitions and service.
          </h1>
          <p className="text-slate-700 max-w-2xl leading-relaxed">
            A record of my work across DFIR, cybersecurity analysis, AI
            security engineering and community involvement.
          </p>
        </div>
      </section>

      {/* WORK EXPERIENCE (light) */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Work"
            title="Work Experience"
            icon={Briefcase}
          />

          <div className="space-y-5 sm:space-y-6">
            {work.map((w, i) => {
              const isPrimary = w.emphasis === "primary";
              return (
                <article
                  key={`${w.company}-${i}`}
                  className={`group rounded-2xl bg-white border overflow-hidden transition-all duration-300 ${
                    isPrimary
                      ? "border-blue-200 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/15 hover:-translate-y-0.5"
                      : "border-slate-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5"
                  }`}
                >
                  <div
                    className={`p-6 sm:p-8 relative ${
                      isPrimary ? "border-l-4 border-l-blue-600" : "border-l-4 border-l-slate-200"
                    }`}
                  >
                    {/* Header: company / type + dates */}
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 leading-tight tracking-tight group-hover:text-blue-800 transition-colors">
                          {w.company}
                        </h3>
                        <p className="text-slate-800 text-[15px] sm:text-base mt-1 font-medium">
                          {w.role}
                        </p>
                      </div>
                      <span
                        className={`text-[11px] font-mono uppercase tracking-[0.22em] px-2.5 py-1 rounded-md border ${
                          isPrimary
                            ? "text-blue-800 bg-blue-50 border-blue-200"
                            : "text-slate-700 bg-slate-50 border-slate-200"
                        }`}
                      >
                        {w.type}
                      </span>
                    </div>

                    {/* Metadata row: dates + field with icons */}
                    <div className="mt-4 pb-5 border-b border-slate-100 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13.5px] text-slate-700">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-blue-700" />
                        <span className="font-mono">{w.dates}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-blue-700" />
                        <span>
                          <span className="text-slate-500">Field:</span>{" "}
                          <span className="font-medium text-slate-800">{w.field}</span>
                        </span>
                      </span>
                    </div>

                    <p className="mt-5 text-[15px] text-slate-700 leading-relaxed">
                      {w.summary}
                    </p>

                    {w.bullets && w.bullets.length > 0 && (
                      <ul className="mt-4 space-y-1.5 text-[14.5px] text-slate-700">
                        {w.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="text-blue-500 select-none flex-shrink-0 pt-1">
                              <FileBadge className="w-3 h-3" />
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {w.stack && w.stack.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {w.stack.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-mono text-blue-800 bg-blue-50 border border-blue-200 rounded-md px-2 py-1"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    {w.img && (
                      <div className="mt-5 max-w-md">
                        <ZoomableImage
                          src={w.img}
                          alt={`${w.company} certificate`}
                          onOpen={() => setLightbox({ src: w.img!, alt: `${w.company} certificate` })}
                          aspect="aspect-[4/3]"
                          fit="contain"
                          padded
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS (tinted) */}
      <section className="section-tinted border-y border-blue-100/70 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Case files"
            title="Projects."
            icon={FolderGit2}
            right={
              <p className="hidden sm:block text-sm text-slate-500 max-w-xs text-right">
                Each project opens as a technical case study.
              </p>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {projects.map((proj, i) => (
              <button
                type="button"
                key={i}
                onClick={() => setActiveProject(i)}
                aria-label={`Open case file: ${proj.title}`}
                className="group text-left bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[16px] font-semibold text-slate-900 leading-snug group-hover:text-blue-800 transition-colors">
                    {proj.title}
                  </h3>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-400 hover:text-blue-600 flex-shrink-0 mt-0.5"
                      aria-label="Open project link"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
                <p className="text-xs font-mono text-slate-500 mt-1 tracking-wider">
                  {proj.type} · {proj.period}
                </p>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {proj.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono text-slate-600 bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {proj.img && (
                  <div className="mt-4 relative aspect-video w-full rounded-xl overflow-hidden bg-slate-50 border border-slate-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={proj.img}
                      alt={`${proj.title} screenshot`}
                      className="absolute inset-0 w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 tracking-wider">
                    {proj.report.refId}
                  </span>
                  <span className="text-[11px] text-blue-700 font-medium inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    Open case file
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTF (light) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Capture The Flag"
            title="Competitions."
            icon={Swords}
          />

          <div className="space-y-6 sm:space-y-8">
            {ctfCompetitions.map((ctf, i) => (
              <article
                key={i}
                className="group grid grid-cols-1 sm:grid-cols-[15rem_1fr] gap-5 sm:gap-6 items-start bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                <ZoomableImage
                  src={ctf.img}
                  alt={ctf.name}
                  onOpen={() => setLightbox({ src: ctf.img, alt: ctf.name })}
                  aspect="aspect-[4/3]"
                  fit="cover"
                  sizes="(max-width: 640px) 100vw, 240px"
                  radius="rounded-xl"
                />

                <div>
                  <h3 className="text-[17px] font-semibold text-slate-900 leading-snug group-hover:text-blue-800 transition-colors">
                    {ctf.name}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {ctf.organiser}, {ctf.year}
                  </p>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">{ctf.desc}</p>

                  <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3 mt-4">
                    <div>
                      <dt className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Placement</dt>
                      <dd className="text-sm text-blue-800 mt-0.5 font-semibold">{ctf.placement}</dd>
                    </div>
                    {ctf.metrics?.map((m) => (
                      <div key={m.k}>
                        <dt className="text-[10px] font-mono uppercase tracking-wider text-slate-400">{m.k}</dt>
                        <dd className="text-sm text-slate-800 mt-0.5 font-mono">{m.v}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-4 text-xs text-slate-500">
                    <span className="text-slate-400">Categories: </span>
                    {ctf.categories.join(", ")}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CCA & COMMUNITY (tinted) */}
      <section className="section-tinted border-t border-blue-100/70 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Community"
            title="Co-Curricular &amp; Community Service."
            icon={HeartHandshake}
          />

          <div className="space-y-6">
            {ccaAndService.map((item, i) => (
              <article
                key={i}
                className={`group grid grid-cols-1 gap-5 items-start bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-300 ${
                  item.imgs.length > 0 ? "sm:grid-cols-[15rem_1fr]" : ""
                }`}
              >
                {item.imgs.length > 0 && (
                  <div
                    className={
                      item.imgs.length > 1 ? "grid grid-cols-2 gap-2" : ""
                    }
                  >
                    {item.imgs.map((src) => (
                      <ZoomableImage
                        key={src}
                        src={src}
                        alt={item.title}
                        onOpen={() => setLightbox({ src, alt: item.title })}
                        aspect="aspect-[4/3]"
                        fit="cover"
                        sizes="(max-width: 640px) 100vw, 160px"
                        radius="rounded-xl"
                      />
                    ))}
                  </div>
                )}
                <div>
                  <h3 className="text-[16px] font-semibold text-slate-900 leading-snug group-hover:text-blue-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-700 mt-0.5">{item.role}</p>
                  <p className="text-xs font-mono text-slate-500 mt-1 tracking-wider">
                    {item.org}, {item.period}
                  </p>
                  <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {modalProject && (
          <ProjectModal
            key="project-modal"
            project={modalProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>

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
    </>
  );
}
