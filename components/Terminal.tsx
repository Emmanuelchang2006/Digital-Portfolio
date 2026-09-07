"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";

type LineType = "prompt" | "output" | "error" | "info" | "divider" | "link";

interface Line {
  id: number;
  type: LineType;
  content: string;
  href?: string;
}

type RawLine = Omit<Line, "id">;

const PROMPT = "~ $";

const OUTPUT_MAP: Record<string, RawLine[]> = {
  help: [
    { type: "info",   content: "Available commands:" },
    { type: "output", content: "  whoami     short bio" },
    { type: "output", content: "  skills     technical skill set" },
    { type: "output", content: "  projects   featured projects" },
    { type: "output", content: "  awards     recent recognition" },
    { type: "output", content: "  contact    how to reach me" },
    { type: "output", content: "  socials    GitHub, LinkedIn" },
    { type: "output", content: "  clear      clear the terminal" },
    { type: "output", content: "  help       show this message" },
  ],
  whoami: [
    { type: "output", content: "Emmanuel Chang. Cybersecurity & Digital Forensics student at Ngee Ann Polytechnic." },
    { type: "output", content: "DFIR foundation with cybersecurity analysis and AI security engineering experience." },
  ],
  skills: [
    { type: "info",    content: "Security & DFIR" },
    { type: "output",  content: "  DFIR, Incident Response, IOC Investigation, Malware Analysis, Threat Intelligence" },
    { type: "divider", content: "" },
    { type: "info",    content: "Security Engineering" },
    { type: "output",  content: "  Secure Configuration, Authentication, Access Control, Network Security" },
    { type: "divider", content: "" },
    { type: "info",    content: "AI Security" },
    { type: "output",  content: "  LLM Security, AI Agents, MCP, AI-Assisted DFIR, Evidence-Grounded Workflows" },
    { type: "divider", content: "" },
    { type: "info",    content: "Engineering" },
    { type: "output",  content: "  Python, TypeScript, Next.js, NestJS, PostgreSQL" },
  ],
  projects: [
    { type: "output", content: "  IOC Enrichment CLI       Python, VT / AbuseIPDB / Shodan" },
    { type: "output", content: "  Malware Analysis Report  Static + dynamic, MITRE ATT&CK" },
    { type: "output", content: "  Web App Pentest          Burp / ZAP, 3 high-severity CVEs" },
    { type: "output", content: "  Firewall (Palo Alto)     Site-to-site VPN, zone policy" },
    { type: "info",   content: "See /experience for full case files." },
  ],
  awards: [
    { type: "output", content: "  Group-IB Outstanding Performance (6-Month Internship)" },
    { type: "output", content: "  NP Director's List x 3" },
    { type: "output", content: "  Certified LLM Security Expert (CLLMSE)" },
    { type: "output", content: "  DFIR Foundations, BlueCape Security" },
    { type: "output", content: "  AWS Certified Cloud Practitioner" },
    { type: "info",   content: "See /resume for the full list." },
  ],
  contact: [
    { type: "output", content: "  email     emmanuelchangyq@gmail.com" },
    { type: "output", content: "  phone     +65 8338 8400" },
    { type: "output", content: "  location  Singapore" },
    { type: "info",   content: "See /contact for the form." },
  ],
  socials: [
    { type: "link", content: "  GitHub    github.com/Emmanuelchang2006",   href: "https://github.com/Emmanuelchang2006" },
    { type: "link", content: "  LinkedIn  linkedin.com/in/emmanuel-chang", href: "https://www.linkedin.com/in/emmanuel-chang" },
  ],
};

const WELCOME: RawLine[] = [
  { type: "info",    content: 'Type "help" to see available commands.' },
];

const WELCOME_LINES: Line[] = WELCOME.map((r, i) => ({ ...r, id: i + 1 }));
const WELCOME_MAX_ID = WELCOME_LINES.length;

export default function Terminal() {
  const counter = useRef(WELCOME_MAX_ID);
  const stamp = () => ++counter.current;

  const toLines = (raws: RawLine[]): Line[] =>
    raws.map((r) => ({ ...r, id: stamp() }));

  const [lines, setLines] = useState<Line[]>(WELCOME_LINES);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);

  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  function run(raw: string) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    const promptLine: Line = { id: stamp(), type: "prompt", content: cmd };

    if (cmd === "clear") {
      counter.current = WELCOME_MAX_ID;
      setLines(WELCOME_LINES);
      setInput("");
      setCmdHistory((h) => [cmd, ...h]);
      setHistIdx(-1);
      return;
    }

    const output: Line[] = OUTPUT_MAP[cmd]
      ? toLines(OUTPUT_MAP[cmd])
      : [{ id: stamp(), type: "error", content: `Command not found: "${cmd}". Type "help" for available commands.` }];

    setLines((prev) => [...prev, promptLine, ...output]);
    setCmdHistory((h) => [cmd, ...h]);
    setHistIdx(-1);
    setInput("");
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      run(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(next);
      if (cmdHistory[next] !== undefined) setInput(cmdHistory[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(histIdx - 1, -1);
      setHistIdx(next);
      setInput(next === -1 ? "" : (cmdHistory[next] ?? ""));
    }
  }

  return (
    <div
      className="rounded-2xl overflow-hidden border border-slate-800 bg-[color:var(--bg-dark-2)] font-mono text-[13px] cursor-text shadow-2xl shadow-blue-950/40 ring-1 ring-blue-500/10"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Header strip */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-black/30 border-b border-slate-800 select-none">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-2 text-[10px] text-slate-500 tracking-wider">bash · emmanuel-chang</span>
      </div>

      <div ref={outputRef} className="px-4 sm:px-5 py-4 h-64 sm:h-72 overflow-y-auto">
        {lines.map((line) => {
          switch (line.type) {
            case "prompt":
              return (
                <div key={line.id} className="flex gap-2 leading-relaxed break-words">
                  <span className="text-blue-400 whitespace-nowrap select-none">{PROMPT}</span>
                  <span className="text-slate-100 break-all">{line.content}</span>
                </div>
              );
            case "error":
              return (
                <div key={line.id} className="text-rose-300 leading-relaxed">{line.content}</div>
              );
            case "info":
              return (
                <div key={line.id} className="text-blue-300 font-medium leading-relaxed">
                  {line.content}
                </div>
              );
            case "divider":
              return <div key={line.id} className="h-2" />;
            case "link":
              return (
                <div key={line.id} className="text-slate-400 leading-relaxed">
                  <a
                    href={line.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-white underline underline-offset-4 decoration-slate-600"
                  >
                    {line.content}
                  </a>
                </div>
              );
            default:
              return (
                <div key={line.id} className="text-slate-400 leading-relaxed">
                  {line.content}
                </div>
              );
          }
        })}
      </div>

      <div className="border-t border-slate-800 px-4 sm:px-5 py-2.5 flex items-center gap-2">
        <span className="text-blue-400 whitespace-nowrap flex-shrink-0 select-none">{PROMPT}</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          className="flex-1 min-w-0 bg-transparent outline-none text-slate-100 caret-blue-400 placeholder-slate-600"
          placeholder="type a command"
          autoComplete="off"
          spellCheck={false}
          inputMode="text"
          aria-label="Terminal command input"
        />
      </div>
    </div>
  );
}
