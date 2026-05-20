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
} from "lucide-react";
import ProjectModal, { ModalProject, ProjectReport } from "@/components/ProjectModal";

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

/* ── Projects with full DFIR report data ── */
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
    desc: "Auto-classifies indicators (IPv4, domain, URL, MD5/SHA1/SHA256) and queries VirusTotal, AbuseIPDB, and Shodan simultaneously. Aggregates results into CLEAN / SUSPICIOUS / MALICIOUS verdicts, generates structured JSON reports per IOC, and supports batch mode with summary output.",
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
        "Developed an open-source CLI utility that auto-classifies cyber indicators and concurrently queries three threat intelligence platforms. The tool reduces manual enrichment time by aggregating multi-source verdicts into structured, machine-readable reports suitable for SIEM ingestion.",
      iocs: [
        {
          tag: "FEATURE",
          label: "Multi-API Concurrent Enrichment",
          detail:
            "Simultaneously queries VirusTotal, AbuseIPDB, and Shodan for each indicator, reducing round-trip latency compared to sequential lookups.",
        },
        {
          tag: "FEATURE",
          label: "Auto-Classification Engine",
          detail:
            "Regex-based type detection distinguishes IPv4, domain, URL, and hash indicators (MD5/SHA1/SHA256) before API dispatch.",
        },
        {
          tag: "FEATURE",
          label: "Verdict Aggregation",
          detail:
            "Normalises API responses into CLEAN / SUSPICIOUS / MALICIOUS verdicts with confidence scoring across all queried sources.",
        },
        {
          tag: "FEATURE",
          label: "Structured JSON Reporting",
          detail:
            "Generates per-IOC JSON reports and batch summary output for downstream automation and analyst review.",
        },
      ],
      methodology: [
        { tool: "Python", detail: "Core language; concurrent API calls via asyncio / ThreadPoolExecutor" },
        { tool: "VirusTotal API", detail: "File hash and URL/domain reputation lookups" },
        { tool: "AbuseIPDB", detail: "IP abuse confidence scoring and geolocation data" },
        { tool: "Shodan", detail: "Host exposure and open service enumeration" },
        { tool: "Regex", detail: "Indicator type classification before API dispatch" },
      ],
      outcome:
        "Published as an open-source project on GitHub. The tool demonstrated measurable time savings during the ST Engineering internship by automating IOC triage workflows previously performed manually by analysts.",
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
        "Built a secure password generator that enforces strong password composition policies. The tool guarantees cryptographic diversity by mandating minimum character-class coverage across all generated outputs, aligned with NIST SP 800-63B baseline guidance.",
      iocs: [
        {
          tag: "REQUIREMENT",
          label: "Minimum Length Enforcement",
          detail:
            "All generated passwords are at least 12 characters to meet NIST SP 800-63B baseline requirements for memorised secrets.",
        },
        {
          tag: "REQUIREMENT",
          label: "Character Class Diversity",
          detail:
            "Mandatory inclusion of uppercase, lowercase, numeric, and special symbol characters prevents single-class brute-force efficiency.",
        },
        {
          tag: "REQUIREMENT",
          label: "Cryptographically Secure Randomness",
          detail:
            "Python secrets module used instead of random; ensures CSPRNG output unsuitable for statistical prediction.",
        },
      ],
      methodology: [
        { tool: "Python", detail: "Primary language; secrets module for CSPRNG output" },
        { tool: "string module", detail: "Character class pools for controlled selection and composition" },
      ],
      outcome:
        "Delivered a functional CLI tool meeting password composition requirements. Demonstrated understanding of password policy standards aligned with NIST guidelines and cryptographic randomness best practices.",
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
        "Developed a basic keylogger in a controlled lab environment to understand input capture mechanics at the OS level. The project was strictly educational with no deployment outside the sandboxed environment. Analysis of the techniques informed understanding of host-based detection methods used by defenders.",
      iocs: [
        {
          tag: "TECHNIQUE",
          label: "Keyboard Hook Installation",
          detail:
            "Registered a low-level keyboard hook using Python pynput library to intercept keystroke events system-wide before application-layer filtering.",
        },
        {
          tag: "TECHNIQUE",
          label: "Keystroke Buffering",
          detail:
            "Captured keystrokes are buffered in memory before being flushed to a log file at timed intervals, reducing I/O frequency.",
        },
        {
          tag: "TECHNIQUE",
          label: "Log Persistence",
          detail:
            "Keylog output written to a local flat file; demonstrated how adversaries exfiltrate credential data post-capture.",
        },
      ],
      methodology: [
        { tool: "Python", detail: "Core implementation language" },
        { tool: "pynput", detail: "Cross-platform keyboard listener for hook installation" },
        { tool: "Isolated VM", detail: "All testing conducted in a sandboxed VM with no network access" },
      ],
      outcome:
        "Successfully demonstrated keystroke capture mechanics in a controlled environment. Analysis informed understanding of host-based detection methods — including AV behavioural hooks and EDR process monitoring — that defenders deploy to detect keylogger activity.",
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
        "Performed a structured web application penetration test against the Trip.com domain. Identified three high-severity vulnerabilities using a combination of automated scanning and manual exploitation techniques. All findings were classified using the CVSS v3.1 scoring framework and documented in a formal findings report with remediation guidance.",
      iocs: [
        {
          tag: "HIGH",
          label: "SQL Injection — CVSSv3 8.1",
          detail:
            "Parameter-based SQLi detected in booking search endpoint. Allows unauthenticated database enumeration and potential data exfiltration without authentication.",
        },
        {
          tag: "HIGH",
          label: "Cross-Site Scripting (XSS) — CVSSv3 7.5",
          detail:
            "Reflected XSS in user-input fields with insufficient output encoding. Enables session token theft and phishing redirection against authenticated users.",
        },
        {
          tag: "HIGH",
          label: "Insecure Direct Object Reference (IDOR) — CVSSv3 7.2",
          detail:
            "Horizontal privilege escalation via predictable booking reference IDs. Allows access to other users' booking records without authorisation checks.",
        },
      ],
      methodology: [
        { tool: "Burp Suite", detail: "Intercepting proxy for manual HTTP request manipulation and payload injection" },
        { tool: "OWASP ZAP", detail: "Automated active scanner for initial vulnerability discovery" },
        { tool: "Nikto", detail: "Web server configuration and known-vulnerability scanner" },
        { tool: "Nmap", detail: "Port and service enumeration on target infrastructure" },
        { tool: "Kali Linux", detail: "Testing environment with full offensive toolset" },
        { tool: "CVSS v3.1", detail: "Scoring framework used to classify and prioritise all findings" },
      ],
      outcome:
        "Delivered a structured penetration test report documenting three high-severity CVEs. Remediation recommendations included parameterised queries to prevent SQLi, context-aware output encoding for XSS, and server-side authorisation checks on all resource endpoints to address IDOR.",
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
        "Configured a Palo Alto next-generation firewall to establish a site-to-site IPsec VPN tunnel between simulated Kuala Lumpur and Singapore office environments. Implemented zone-based security policies and access control rules aligned with the principle of least privilege.",
      iocs: [
        {
          tag: "CONTROL",
          label: "Site-to-Site IPsec VPN",
          detail:
            "Configured IKEv2 tunnel between KL and SG sites; verified encrypted traffic traversal and tunnel failover behaviour under simulated link loss.",
        },
        {
          tag: "CONTROL",
          label: "Zone-Based Security Policy",
          detail:
            "Defined Trust, Untrust, and DMZ zones with explicit inter-zone rules to segment and control traffic flows between office segments.",
        },
        {
          tag: "CONTROL",
          label: "Access Control Rules",
          detail:
            "Implemented least-privilege inbound and outbound policies; blocked unsanctioned protocols at the perimeter firewall layer.",
        },
        {
          tag: "CONTROL",
          label: "Internal Security Restrictions",
          detail:
            "Applied URL filtering and application-layer inspection to internal traffic egressing to the internet.",
        },
      ],
      methodology: [
        { tool: "Palo Alto NGFW", detail: "Primary firewall platform for all configuration and policy management" },
        { tool: "PAN-OS GUI", detail: "Web interface used for zone, policy, and VPN configuration" },
        { tool: "IKEv2 / IPsec", detail: "VPN protocol stack for encrypted inter-site tunnel establishment" },
        { tool: "Wireshark", detail: "Packet capture used to verify encrypted traffic and VPN handshake completion" },
      ],
      outcome:
        "Successfully demonstrated a functional site-to-site VPN with enforced security zones and access control policies. Gained practical experience with enterprise-grade perimeter firewall configuration and network segmentation principles.",
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
        "Conducted static and dynamic analysis on a VirusShare malware sample within an isolated lab environment. Produced a full behavioural analysis report documenting persistence mechanisms, process injection chains, network communication patterns, and file system artefacts. Findings were mapped to relevant MITRE ATT&CK techniques.",
      iocs: [
        {
          tag: "NETWORK",
          label: "C2 Beacon — 185.220.101.x:4444",
          detail:
            "Observed periodic outbound TCP connection attempts to a hardcoded IP over a non-standard port; consistent with a beacon interval of approximately 60 seconds.",
        },
        {
          tag: "PROCESS",
          label: "Process Injection — cmd.exe → powershell.exe",
          detail:
            "Malware spawned cmd.exe as a parent process to launch an encoded PowerShell payload; indicative of a living-off-the-land (LOL) technique to evade signature detection.",
        },
        {
          tag: "REGISTRY",
          label: "Run Key Persistence — HKCU\\...\\CurrentVersion\\Run",
          detail:
            "Wrote a registry Run key value pointing to the dropper binary to survive system reboot without requiring elevated privileges.",
        },
        {
          tag: "FILE",
          label: "Masquerading Binary — svchost32.exe",
          detail:
            "Dropper copied itself to %APPDATA% under the filename svchost32.exe to impersonate a legitimate Windows system process and evade casual inspection.",
        },
      ],
      methodology: [
        { tool: "Process Explorer", detail: "Live process tree inspection and parent-child relationship analysis" },
        { tool: "Process Monitor", detail: "File system, registry, and network activity monitoring during dynamic execution" },
        { tool: "x64 Debugger", detail: "Static and runtime disassembly for string and API call extraction" },
        { tool: "Dependency Walker", detail: "DLL import analysis to identify suspicious API calls at load time" },
        { tool: "Isolated VM (FlareVM)", detail: "Sandboxed Windows environment with network isolation for safe dynamic analysis" },
        { tool: "VirusTotal", detail: "Static hash lookup and multi-engine scan for known detection signatures" },
      ],
      outcome:
        "Produced a comprehensive IOC report that could be operationalised for SIEM detection rule creation. Analysis confirmed ransomware-like persistence mechanisms. Findings demonstrated proficiency in host-based artefact analysis and threat actor TTP mapping to MITRE ATT&CK.",
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
        "Designed and built an ice cream ordering application in C# using the .NET framework. The application features a customisable ordering system, topping selections, and a reward points mechanism, demonstrating fundamental software engineering principles through an end-to-end functional product.",
      iocs: [
        {
          tag: "FEATURE",
          label: "Customisable Order Builder",
          detail:
            "Users can select ice cream flavours, sizes, and optional toppings through a multi-step order flow with live order summary.",
        },
        {
          tag: "FEATURE",
          label: "Reward Points System",
          detail:
            "Implemented a point accrual and redemption system; points tracked per session and persist to a local data store across orders.",
        },
        {
          tag: "FEATURE",
          label: "Input Validation & Error Handling",
          detail:
            "All user inputs validated with descriptive error messages surfaced in the UI; prevents invalid state propagation through the order flow.",
        },
        {
          tag: "FEATURE",
          label: "End-to-End Order Flow",
          detail:
            "Complete ordering lifecycle from item selection through payment summary and order confirmation with receipt generation.",
        },
      ],
      methodology: [
        { tool: "C#", detail: "Primary language; object-oriented design with class-based entity models" },
        { tool: ".NET Framework", detail: "Application runtime and Windows Forms UI framework" },
        { tool: "Visual Studio", detail: "IDE used for development, debugging, and project management" },
      ],
      outcome:
        "Delivered a fully functional ordering application meeting all project requirements. Demonstrated fundamental software engineering principles including encapsulation, input validation, and end-to-end user experience design.",
    },
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
function CardWrapper({
  children,
  delay = 0,
  onClick,
}: {
  children: React.ReactNode;
  delay?: number;
  onClick?: () => void;
}) {
  const [scanned, setScanned] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      onViewportEnter={() => setScanned(true)}
      onClick={onClick}
      className={`relative overflow-hidden bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/40 hover:-translate-y-0.5 transition-all duration-300${onClick ? " cursor-pointer" : ""}`}
    >
      {children}
      <div className={`card-scan-line${scanned ? " scanning" : ""}`} />
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
  const [activeProject, setActiveProject] = useState<number | null>(null);

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
              subtitle="Academic and personal projects — click any card to view the full report"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((proj, i) => (
              <CardWrapper key={i} delay={i * 0.07} onClick={() => setActiveProject(i)}>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-white leading-snug">{proj.title}</h3>
                  <a
                    href={proj.link}
                    target={proj.link !== "#" ? "_blank" : undefined}
                    rel={proj.link !== "#" ? "noopener noreferrer" : undefined}
                    onClick={(e) => e.stopPropagation()}
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map((t) => <TagPill key={t} label={t} />)}
                </div>
                {/* Project screenshot — only for entries that have one */}
                {proj.img && (
                  <div className="relative h-56 rounded-xl overflow-hidden bg-slate-900 mb-4">
                    <Image
                      src={proj.img}
                      alt={`${proj.title} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-contain"
                    />
                  </div>
                )}
                {/* View report footer */}
                <div className="flex items-center gap-1.5 text-cyan-500 text-xs font-mono mt-auto pt-1 border-t border-slate-800/60">
                  <FileText className="w-3 h-3" />
                  <span className="uppercase tracking-widest">View Incident Report</span>
                  <span className="ml-auto font-mono text-slate-600 text-[10px]">{proj.report.refId}</span>
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
    </div>
  );
}
