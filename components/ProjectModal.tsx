"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Shield, AlertTriangle, Wrench, CheckCircle2 } from "lucide-react";

/* ── Types (exported so experience page can use them) ── */
export type Classification = "CONFIDENTIAL" | "RESTRICTED" | "INTERNAL";
export type FindingTag =
  | "CRITICAL" | "HIGH" | "MEDIUM" | "LOW"
  | "FEATURE" | "REQUIREMENT" | "TECHNIQUE" | "CONTROL"
  | "NETWORK" | "PROCESS" | "REGISTRY" | "FILE" | "INFO";

export interface IOCFinding {
  tag: FindingTag;
  label: string;
  detail: string;
}

export interface MethodologyStep {
  tool: string;
  detail: string;
}

export interface ProjectReport {
  classification: Classification;
  refId: string;
  date: string;
  analyst: string;
  status: string;
  iocTitle: string;
  executiveSummary: string;
  iocs: IOCFinding[];
  methodology: MethodologyStep[];
  outcome: string;
}

export interface ModalProject {
  title: string;
  period: string;
  type: string;
  report: ProjectReport;
}

interface Props {
  project: ModalProject;
  onClose: () => void;
}

/* ── Badge colour map ── */
const TAG_CLS: Record<FindingTag, string> = {
  CRITICAL:    "bg-red-950/70    text-red-400    border-red-800/50",
  HIGH:        "bg-orange-950/70 text-orange-400 border-orange-800/50",
  MEDIUM:      "bg-yellow-950/70 text-yellow-500 border-yellow-800/50",
  LOW:         "bg-blue-950/70   text-blue-400   border-blue-800/50",
  INFO:        "bg-cyan-950/70   text-cyan-400   border-cyan-800/50",
  FEATURE:     "bg-cyan-950/70   text-cyan-400   border-cyan-800/50",
  REQUIREMENT: "bg-cyan-950/70   text-cyan-400   border-cyan-800/50",
  TECHNIQUE:   "bg-purple-950/70 text-purple-400 border-purple-800/50",
  CONTROL:     "bg-emerald-950/70 text-emerald-400 border-emerald-800/50",
  NETWORK:     "bg-rose-950/70   text-rose-400   border-rose-800/50",
  PROCESS:     "bg-rose-950/70   text-rose-400   border-rose-800/50",
  REGISTRY:    "bg-rose-950/70   text-rose-400   border-rose-800/50",
  FILE:        "bg-rose-950/70   text-rose-400   border-rose-800/50",
};

/* ── Classification accent map ── */
const CLASS_CLS: Record<Classification, { bar: string; text: string }> = {
  CONFIDENTIAL: { bar: "bg-red-950/30",    text: "text-red-400"    },
  RESTRICTED:   { bar: "bg-orange-950/30", text: "text-orange-400" },
  INTERNAL:     { bar: "bg-blue-950/30",   text: "text-blue-400"   },
};

/* ── Reusable section heading ── */
function SectionHead({
  num, title, icon: Icon,
}: {
  num: string;
  title: string;
  icon: React.ElementType;
}) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-[11px] text-slate-600 w-5 flex-shrink-0">{num}</span>
      <Icon className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0" />
      <span className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.18em]">
        {title}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-slate-700/70 to-transparent" />
    </div>
  );
}

export default function ProjectModal({ project, onClose }: Props) {
  const { report } = project;
  const cls = CLASS_CLS[report.classification];

  /* lock body scroll while open */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  /* close on Escape */
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.article
        initial={{ opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1,    y: 0  }}
        exit={{    opacity: 0, scale: 0.96, y: 18 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#070b14] border border-slate-700/40 rounded-2xl shadow-2xl shadow-black overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── CONFIDENTIAL diagonal watermark ── */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="text-[8.5rem] font-black tracking-[0.35em] uppercase whitespace-nowrap text-red-950/15"
            style={{ transform: "rotate(-35deg)" }}
          >
            {report.classification}
          </span>
        </div>

        {/* ── Classification bar ── */}
        <header className={`${cls.bar} border-b border-slate-800/50 px-5 py-2.5 flex items-center justify-between flex-shrink-0`}>
          <div className="flex items-center gap-2.5">
            <Shield className={`w-3.5 h-3.5 ${cls.text}`} />
            <span className={`font-mono text-[11px] font-bold tracking-[0.22em] uppercase ${cls.text}`}>
              {report.classification}
            </span>
            <span className="font-mono text-[11px] text-slate-600 ml-1">// {report.refId}</span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg bg-slate-800/70 hover:bg-slate-700 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-150"
            aria-label="Close report"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </header>

        {/* ── Report header ── */}
        <div className="px-6 pt-5 pb-5 border-b border-slate-800/50 flex-shrink-0">
          <p className="font-mono text-[9px] text-slate-600 uppercase tracking-[0.28em] mb-1.5">
            Digital Forensics Incident Report
          </p>
          <h2 className="text-lg sm:text-xl font-bold text-white leading-snug mb-4">
            {project.title}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { label: "REF ID",   val: report.refId },
              { label: "ANALYST",  val: report.analyst },
              { label: "DATE",     val: report.date },
              { label: "STATUS",   val: report.status },
            ].map(({ label, val }) => (
              <div
                key={label}
                className="bg-slate-900/60 border border-slate-800/50 rounded-lg px-3 py-2"
              >
                <p className="font-mono text-[8.5px] text-slate-600 uppercase tracking-widest mb-0.5">
                  {label}
                </p>
                <p className="font-mono text-[11px] text-slate-100 font-semibold truncate">{val}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Scrollable body ── */}
        <div className="overflow-y-auto flex-1 px-6 py-6 space-y-8 relative">

          {/* 01 Executive Summary */}
          <section>
            <SectionHead num="01" title="Executive Summary" icon={Shield} />
            <p className="text-sm text-slate-300 leading-relaxed pl-8">
              {report.executiveSummary}
            </p>
          </section>

          {/* 02 IOCs / Findings */}
          <section>
            <SectionHead num="02" title={report.iocTitle} icon={AlertTriangle} />
            <div className="pl-8 space-y-2">
              {report.iocs.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800/40 hover:border-slate-700/60 transition-colors duration-150"
                >
                  <span
                    className={`flex-shrink-0 font-mono text-[9px] font-bold px-1.5 py-0.5 rounded border ${
                      TAG_CLS[item.tag] ?? TAG_CLS.INFO
                    }`}
                  >
                    {item.tag}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-200">{item.label}</p>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 03 Methodology */}
          <section>
            <SectionHead num="03" title="Methodology / Tools Used" icon={Wrench} />
            <div className="pl-8 space-y-2">
              {report.methodology.map((step, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="flex-shrink-0 font-mono text-cyan-500 text-xs mt-0.5">▸</span>
                  <p className="text-xs text-slate-300">
                    <span className="font-bold text-slate-100">{step.tool}</span>
                    {step.detail && (
                      <span className="text-slate-400"> — {step.detail}</span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 04 Remediation / Outcome */}
          <section>
            <SectionHead num="04" title="Remediation / Outcome" icon={CheckCircle2} />
            <p className="text-sm text-slate-300 leading-relaxed pl-8">
              {report.outcome}
            </p>
          </section>

        </div>

        {/* ── Footer ── */}
        <footer className="flex-shrink-0 px-5 py-2.5 border-t border-slate-800/50 bg-slate-900/30 flex items-center justify-between">
          <span className="font-mono text-[9px] text-slate-600 uppercase tracking-widest">
            {report.classification} // {report.refId} // {project.type}
          </span>
          <span className={`font-mono text-[9px] uppercase tracking-widest ${cls.text}`}>
            ● {report.status}
          </span>
        </footer>
      </motion.article>
    </motion.div>
  );
}
