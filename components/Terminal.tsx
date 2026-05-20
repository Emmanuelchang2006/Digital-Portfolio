"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";

type LineType = "prompt" | "output" | "error" | "info" | "divider";

interface Line {
  id: number;
  type: LineType;
  content: string;
}

type RawLine = Omit<Line, "id">;

const PROMPT = "root@emmanuel-chang:~$";

const OUTPUT_MAP: Record<string, RawLine[]> = {
  help: [
    { type: "info",   content: "Available commands:" },
    { type: "output", content: "  whoami    — Short bio" },
    { type: "output", content: "  skills    — Technical skill set" },
    { type: "output", content: "  clear     — Clear the terminal" },
    { type: "output", content: "  help      — Show this message" },
  ],
  whoami: [
    { type: "output", content: "Emmanuel Chang — Cybersecurity & Digital Forensics student at Ngee Ann Polytechnic (GPA 3.94 / 4.00)." },
    { type: "output", content: "Aspiring Security Engineer with hands-on experience in DFIR, threat intelligence, and AI-driven security research." },
  ],
  skills: [
    { type: "info",    content: "── Blue Team & DFIR ──────────────────────" },
    { type: "output",  content: "  • Velociraptor  •  CrowdStrike Falcon  •  KAPE" },
    { type: "output",  content: "  • EnCase  •  FTK Imager  •  Magnet AXIOM" },
    { type: "output",  content: "  • Windows / Linux IOC Investigation" },
    { type: "output",  content: "  • Agentic DFIR  (LLM + Forensic API workflows)" },
    { type: "divider", content: "" },
    { type: "info",    content: "── Offensive / Vulnerability Management ──" },
    { type: "output",  content: "  • Nmap  •  Burp Suite  •  OWASP ZAP  •  Nikto" },
    { type: "output",  content: "  • Kali Linux  •  CVSS Vulnerability Scoring" },
    { type: "divider", content: "" },
    { type: "info",    content: "── Programming ───────────────────────────" },
    { type: "output",  content: "  • Python  •  JavaScript  •  C#  •  HTML / CSS" },
  ],
};

const WELCOME: RawLine[] = [
  { type: "info",    content: "Emmanuel Chang Portfolio Terminal  v1.0.0" },
  { type: "output",  content: 'Type "help" to see available commands.' },
  { type: "divider", content: "" },
];

export default function Terminal() {
  const counter = useRef(0);
  const stamp = () => ++counter.current;

  const toLines = (raws: RawLine[]): Line[] =>
    raws.map((r) => ({ ...r, id: stamp() }));

  const [lines, setLines] = useState<Line[]>(() => toLines(WELCOME));
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
      setLines(toLines(WELCOME));
      setInput("");
      setCmdHistory((h) => [cmd, ...h]);
      setHistIdx(-1);
      return;
    }

    const output: Line[] = OUTPUT_MAP[cmd]
      ? toLines(OUTPUT_MAP[cmd])
      : [{ id: stamp(), type: "error", content: `Command not found: "${cmd}". Type "help" for a list of commands.` }];

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
      className="rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-black/60 font-mono text-sm cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#161b2e] border-b border-slate-700/50 select-none">
        <span className="w-3 h-3 rounded-full bg-red-500/90" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/90" />
        <span className="w-3 h-3 rounded-full bg-green-500/90" />
        <span className="ml-3 text-xs text-slate-500 tracking-wide">bash — emmanuel-chang</span>
        <span className="ml-auto text-xs text-slate-600">↑↓ history</span>
      </div>

      {/* Output area */}
      <div ref={outputRef} className="bg-[#0b0e1a] px-5 py-4 h-72 overflow-y-auto">
        {lines.map((line) => {
          switch (line.type) {
            case "prompt":
              return (
                <div key={line.id} className="flex gap-2 leading-relaxed">
                  <span className="text-green-400 whitespace-nowrap select-none">{PROMPT}</span>
                  <span className="text-white">{line.content}</span>
                </div>
              );
            case "error":
              return (
                <div key={line.id} className="text-red-400 leading-relaxed">
                  {line.content}
                </div>
              );
            case "info":
              return (
                <div key={line.id} className="text-cyan-400 font-semibold leading-relaxed">
                  {line.content}
                </div>
              );
            case "divider":
              return <div key={line.id} className="h-2" />;
            default:
              return (
                <div key={line.id} className="text-slate-300 leading-relaxed">
                  {line.content}
                </div>
              );
          }
        })}
      </div>

      {/* Input line */}
      <div className="bg-[#0b0e1a] border-t border-slate-800 px-5 py-3 flex items-center gap-2">
        <span className="text-green-400 whitespace-nowrap flex-shrink-0 select-none">
          {PROMPT}
        </span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          className="flex-1 bg-transparent outline-none text-white caret-green-400 placeholder-slate-600"
          placeholder="type a command..."
          autoComplete="off"
          spellCheck={false}
        />
      </div>
    </div>
  );
}
